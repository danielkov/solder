import type { InternalServerResponse, ListProvidersResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listProviders returns status 500.
 */
export class ListProvidersInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListProvidersInternalServerErrorError`);
    this.name = 'ListProvidersInternalServerErrorError';
    this.body = body;
  }
}

export class ProvidersService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * List all providers
   * @throws {ListProvidersInternalServerErrorError | UnexpectedError}
   */
  async listProviders(): Promise<ListProvidersResponse> {
    const path = '/providers';
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
            throw new ListProvidersInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListProvidersInternalServerErrorError) throw e;
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