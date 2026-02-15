import type { EndpointsListEndpointsResponse, InternalServerResponse, ListEndpointsZdrResponse, NotFoundResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listEndpointsZdr returns status 500.
 */
export class ListEndpointsZdrInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListEndpointsZdrInternalServerErrorError`);
    this.name = 'ListEndpointsZdrInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when listEndpoints returns status 404.
 */
export class ListEndpointsNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`ListEndpointsNotFoundError`);
    this.name = 'ListEndpointsNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when listEndpoints returns status 500.
 */
export class ListEndpointsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListEndpointsInternalServerErrorError`);
    this.name = 'ListEndpointsInternalServerErrorError';
    this.body = body;
  }
}

export class EndpointsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Preview the impact of ZDR on the available endpoints
   * @throws {ListEndpointsZdrInternalServerErrorError | UnexpectedError}
   */
  async listEndpointsZdr(): Promise<ListEndpointsZdrResponse> {
    const path = '/endpoints/zdr';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
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
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new ListEndpointsZdrInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof ListEndpointsZdrInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

  /**
   * List all endpoints for a model
   *
   * @param author 
   * @param slug 
   * @throws {ListEndpointsNotFoundError | ListEndpointsInternalServerErrorError | UnexpectedError}
   */
  async listEndpoints(params: {
    author: string;
    slug: string;
  }): Promise<EndpointsListEndpointsResponse> {
    const path = `/models/{author}/{slug}/endpoints`.replace('{author}', String(params.author)).replace('{slug}', String(params.slug));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
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
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            await this.raise(new ListEndpointsNotFoundError(body));
          } catch (e) {
            if (e instanceof ListEndpointsNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            await this.raise(new ListEndpointsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof ListEndpointsInternalServerErrorError) throw e;
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