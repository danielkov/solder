import type { Error, MuseumHours } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getMuseumHours returns status 400.
 */
export class GetMuseumHoursBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetMuseumHoursBadRequestError`);
    this.name = 'GetMuseumHoursBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getMuseumHours returns status 404.
 */
export class GetMuseumHoursNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetMuseumHoursNotFoundError`);
    this.name = 'GetMuseumHoursNotFoundError';
    this.body = body;
  }
}

export class OperationsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Get museum hours
   *
   * Get upcoming museum operating hours.
   *
   * @param startDate 
   * @param page 
   * @param limit 
   * @throws {GetMuseumHoursBadRequestError | GetMuseumHoursNotFoundError | UnexpectedError}
   */
  async getMuseumHours(params: {
    startDate?: string;
    page?: number;
    limit?: number;
  }): Promise<MuseumHours> {
    const path = '/museum-hours';
    const queryParams = new URLSearchParams();
    if (params.startDate !== undefined) {
      queryParams.append('startDate', String(params.startDate));
    }
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
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
        case 400: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetMuseumHoursBadRequestError(body));
          } catch (e) {
            if (e instanceof GetMuseumHoursBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetMuseumHoursNotFoundError(body));
          } catch (e) {
            if (e instanceof GetMuseumHoursNotFoundError) throw e;
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