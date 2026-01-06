import type { BadGatewayResponse, EdgeNetworkTimeoutResponse, GetGenerationResponse, InternalServerResponse, NotFoundResponse, PaymentRequiredResponse, ProviderOverloadedResponse, TooManyRequestsResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig) {}

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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new GetGenerationUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetGenerationUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 402: {
          try {
            const body = await response.json() as PaymentRequiredResponse;
            throw new GetGenerationStatus402Error(body);
          } catch (e) {
            if (e instanceof GetGenerationStatus402Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new GetGenerationNotFoundError(body);
          } catch (e) {
            if (e instanceof GetGenerationNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new GetGenerationTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof GetGenerationTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetGenerationInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetGenerationInternalServerErrorError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 502: {
          try {
            const body = await response.json() as BadGatewayResponse;
            throw new GetGenerationBadGatewayError(body);
          } catch (e) {
            if (e instanceof GetGenerationBadGatewayError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 524: {
          try {
            const body = await response.json() as EdgeNetworkTimeoutResponse;
            throw new GetGenerationStatus524Error(body);
          } catch (e) {
            if (e instanceof GetGenerationStatus524Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 529: {
          try {
            const body = await response.json() as ProviderOverloadedResponse;
            throw new GetGenerationStatus529Error(body);
          } catch (e) {
            if (e instanceof GetGenerationStatus529Error) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
      }
    }

    return response.json();
  }

}