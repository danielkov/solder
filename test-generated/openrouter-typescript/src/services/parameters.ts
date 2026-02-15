import type { GetParametersResponse, InternalServerResponse, NotFoundResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getParameters returns status 401.
 */
export class GetParametersUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetParametersUnauthorizedError`);
    this.name = 'GetParametersUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getParameters returns status 404.
 */
export class GetParametersNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`GetParametersNotFoundError`);
    this.name = 'GetParametersNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getParameters returns status 500.
 */
export class GetParametersInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetParametersInternalServerErrorError`);
    this.name = 'GetParametersInternalServerErrorError';
    this.body = body;
  }
}

export class ParametersService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Get a model's supported parameters and data about which are most popular
   *
   * @param author 
   * @param slug 
   * @param provider 
   * @throws {GetParametersUnauthorizedError | GetParametersNotFoundError | GetParametersInternalServerErrorError | UnexpectedError}
   */
  async getParameters(params: {
    author: string;
    slug: string;
    provider?: string;
  }): Promise<GetParametersResponse> {
    const path = `/parameters/{author}/{slug}`.replace('{author}', String(params.author)).replace('{slug}', String(params.slug));
    const queryParams = new URLSearchParams();
    if (params.provider !== undefined) {
      queryParams.append('provider', String(params.provider));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearer) {
      headers['Authorization'] = `Bearer ${this.security.bearer}`;
    }
    
    const request: SDKRequestInit = {
      method: 'GET',
      url,
      headers,
    };
    await this.hooks.onRequest?.(request);

    const response = await fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    await this.hooks.onResponse?.({
      method: request.method,
      url: request.url,
      status: response.status,
      headers: response.headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            await this.raise(new GetParametersUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetParametersUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            await this.raise(new GetParametersNotFoundError(body));
          } catch (e) {
            if (e instanceof GetParametersNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new GetParametersInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof GetParametersInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

}