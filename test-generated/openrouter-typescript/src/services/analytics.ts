import type { BadRequestResponse, ForbiddenResponse, GetUserActivityResponse, InternalServerResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getUserActivity returns status 400.
 */
export class GetUserActivityBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`GetUserActivityBadRequestError`);
    this.name = 'GetUserActivityBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getUserActivity returns status 401.
 */
export class GetUserActivityUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetUserActivityUnauthorizedError`);
    this.name = 'GetUserActivityUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getUserActivity returns status 403.
 */
export class GetUserActivityForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: ForbiddenResponse;

  constructor(body: ForbiddenResponse) {
    super(`GetUserActivityForbiddenError`);
    this.name = 'GetUserActivityForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getUserActivity returns status 500.
 */
export class GetUserActivityInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetUserActivityInternalServerErrorError`);
    this.name = 'GetUserActivityInternalServerErrorError';
    this.body = body;
  }
}

export class AnalyticsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Get user activity grouped by endpoint
   *
   * Returns user activity data grouped by endpoint for the last 30 (completed) UTC days
   *
   * @param date 
   * @throws {GetUserActivityBadRequestError | GetUserActivityUnauthorizedError | GetUserActivityForbiddenError | GetUserActivityInternalServerErrorError | UnexpectedError}
   */
  async getUserActivity(params: {
    date?: string;
  }): Promise<GetUserActivityResponse> {
    const path = '/activity';
    const queryParams = new URLSearchParams();
    if (params.date !== undefined) {
      queryParams.append('date', String(params.date));
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
        case 400: {
          try {
            const body = await response.json() as BadRequestResponse;
            throw new GetUserActivityBadRequestError(body);
          } catch (e) {
            if (e instanceof GetUserActivityBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new GetUserActivityUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetUserActivityUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 403: {
          try {
            const body = await response.json() as ForbiddenResponse;
            throw new GetUserActivityForbiddenError(body);
          } catch (e) {
            if (e instanceof GetUserActivityForbiddenError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetUserActivityInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetUserActivityInternalServerErrorError) throw e;
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