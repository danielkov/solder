import type { EndpointsListEndpointsResponse, InternalServerResponse, ListEndpointsZdrResponse, NotFoundResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig) {}

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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListEndpointsZdrInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListEndpointsZdrInternalServerErrorError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new ListEndpointsNotFoundError(body);
          } catch (e) {
            if (e instanceof ListEndpointsNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListEndpointsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListEndpointsInternalServerErrorError) throw e;
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