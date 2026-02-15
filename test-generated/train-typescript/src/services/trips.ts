import type { GetTripsUnion, Problem } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getTrips returns status 400.
 */
export class GetTripsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetTripsBadRequestError`);
    this.name = 'GetTripsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getTrips returns status 401.
 */
export class GetTripsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetTripsUnauthorizedError`);
    this.name = 'GetTripsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getTrips returns status 403.
 */
export class GetTripsForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetTripsForbiddenError`);
    this.name = 'GetTripsForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getTrips returns status 429.
 */
export class GetTripsTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetTripsTooManyRequestsError`);
    this.name = 'GetTripsTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getTrips returns status 500.
 */
export class GetTripsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetTripsInternalServerErrorError`);
    this.name = 'GetTripsInternalServerErrorError';
    this.body = body;
  }
}

export class TripsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Get available train trips
   *
   * Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

   *
   * @param page 
   * @param limit 
   * @param origin 
   * @param destination 
   * @param date 
   * @param bicycles 
   * @param dogs 
   * @throws {GetTripsBadRequestError | GetTripsUnauthorizedError | GetTripsForbiddenError | GetTripsTooManyRequestsError | GetTripsInternalServerErrorError | UnexpectedError}
   */
  async getTrips(params: {
    page?: number;
    limit?: number;
    origin: string;
    destination: string;
    date: string;
    bicycles?: boolean;
    dogs?: boolean;
  }): Promise<GetTripsUnion> {
    const path = '/trips';
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.origin !== undefined) {
      queryParams.append('origin', String(params.origin));
    }
    if (params.destination !== undefined) {
      queryParams.append('destination', String(params.destination));
    }
    if (params.date !== undefined) {
      queryParams.append('date', String(params.date));
    }
    if (params.bicycles !== undefined) {
      queryParams.append('bicycles', String(params.bicycles));
    }
    if (params.dogs !== undefined) {
      queryParams.append('dogs', String(params.dogs));
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
            const body = await response.json() as Problem;
            await this.raise(new GetTripsBadRequestError(body));
          } catch (e) {
            if (e instanceof GetTripsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetTripsUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetTripsUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetTripsForbiddenError(body));
          } catch (e) {
            if (e instanceof GetTripsForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetTripsTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof GetTripsTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetTripsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof GetTripsInternalServerErrorError) throw e;
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