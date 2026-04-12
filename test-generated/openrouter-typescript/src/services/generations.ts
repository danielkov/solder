import type { BadGatewayResponse, EdgeNetworkTimeoutResponse, GetGenerationResponse, InternalServerResponse, NotFoundResponse, PaymentRequiredResponse, ProviderOverloadedResponse, TooManyRequestsResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getGeneration returns status 401.
 */
export class GetGenerationUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetGenerationUnauthorizedError`);
    this.name = 'GetGenerationUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 402.
 */
export class GetGenerationStatus402Error extends globalThis.Error {
  readonly status = 402;
  readonly body: PaymentRequiredResponse;

  constructor(body: PaymentRequiredResponse) {
    super(`GetGenerationStatus402Error`);
    this.name = 'GetGenerationStatus402Error';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 404.
 */
export class GetGenerationNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`GetGenerationNotFoundError`);
    this.name = 'GetGenerationNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 429.
 */
export class GetGenerationTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`GetGenerationTooManyRequestsError`);
    this.name = 'GetGenerationTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 500.
 */
export class GetGenerationInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetGenerationInternalServerErrorError`);
    this.name = 'GetGenerationInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 502.
 */
export class GetGenerationBadGatewayError extends globalThis.Error {
  readonly status = 502;
  readonly body: BadGatewayResponse;

  constructor(body: BadGatewayResponse) {
    super(`GetGenerationBadGatewayError`);
    this.name = 'GetGenerationBadGatewayError';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 524.
 */
export class GetGenerationStatus524Error extends globalThis.Error {
  readonly status = 524;
  readonly body: EdgeNetworkTimeoutResponse;

  constructor(body: EdgeNetworkTimeoutResponse) {
    super(`GetGenerationStatus524Error`);
    this.name = 'GetGenerationStatus524Error';
    this.body = body;
  }
}

/**
 * Error thrown when getGeneration returns status 529.
 */
export class GetGenerationStatus529Error extends globalThis.Error {
  readonly status = 529;
  readonly body: ProviderOverloadedResponse;

  constructor(body: ProviderOverloadedResponse) {
    super(`GetGenerationStatus529Error`);
    this.name = 'GetGenerationStatus529Error';
    this.body = body;
  }
}

export class GenerationsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Get request & usage metadata for a generation
   *
   * @param id 
   * @throws {GetGenerationUnauthorizedError | GetGenerationStatus402Error | GetGenerationNotFoundError | GetGenerationTooManyRequestsError | GetGenerationInternalServerErrorError | GetGenerationBadGatewayError | GetGenerationStatus524Error | GetGenerationStatus529Error | UnexpectedError}
   */
  async getGeneration(params: {
    id: string;
  }): Promise<GetGenerationResponse> {
    const path = '/generation';
    const queryParams = new URLSearchParams();
    if (params.id !== undefined) {
      queryParams.append('id', String(params.id));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
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
        case 401: {
          const body = await response.json() as UnauthorizedResponse;
          await this.raise(new GetGenerationUnauthorizedError(body));
          break;
        }
        case 402: {
          const body = await response.json() as PaymentRequiredResponse;
          await this.raise(new GetGenerationStatus402Error(body));
          break;
        }
        case 404: {
          const body = await response.json() as NotFoundResponse;
          await this.raise(new GetGenerationNotFoundError(body));
          break;
        }
        case 429: {
          const body = await response.json() as TooManyRequestsResponse;
          await this.raise(new GetGenerationTooManyRequestsError(body));
          break;
        }
        case 500: {
          const body = await response.json() as InternalServerResponse;
          await this.raise(new GetGenerationInternalServerErrorError(body));
          break;
        }
        case 502: {
          const body = await response.json() as BadGatewayResponse;
          await this.raise(new GetGenerationBadGatewayError(body));
          break;
        }
        case 524: {
          const body = await response.json() as EdgeNetworkTimeoutResponse;
          await this.raise(new GetGenerationStatus524Error(body));
          break;
        }
        case 529: {
          const body = await response.json() as ProviderOverloadedResponse;
          await this.raise(new GetGenerationStatus529Error(body));
          break;
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return response.json();
  }

}