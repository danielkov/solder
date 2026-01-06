import type { GetStationsUnion, Problem } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getStations returns status 400.
 */
export class GetStationsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetStationsBadRequestError`);
    this.name = 'GetStationsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getStations returns status 401.
 */
export class GetStationsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetStationsUnauthorizedError`);
    this.name = 'GetStationsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getStations returns status 403.
 */
export class GetStationsForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetStationsForbiddenError`);
    this.name = 'GetStationsForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getStations returns status 429.
 */
export class GetStationsTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetStationsTooManyRequestsError`);
    this.name = 'GetStationsTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getStations returns status 500.
 */
export class GetStationsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetStationsInternalServerErrorError`);
    this.name = 'GetStationsInternalServerErrorError';
    this.body = body;
  }
}

export class StationsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Get a list of train stations
   *
   * Returns a paginated and searchable list of all train stations.
   *
   * @param page 
   * @param limit 
   * @param coordinates 
   * @param search 
   * @param country 
   * @throws {GetStationsBadRequestError | GetStationsUnauthorizedError | GetStationsForbiddenError | GetStationsTooManyRequestsError | GetStationsInternalServerErrorError | UnexpectedError}
   */
  async getStations(params: {
    page?: number;
    limit?: number;
    coordinates?: string;
    search?: string;
    country?: string;
  }): Promise<GetStationsUnion> {
    const path = '/stations';
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.limit !== undefined) {
      queryParams.append('limit', String(params.limit));
    }
    if (params.coordinates !== undefined) {
      queryParams.append('coordinates', String(params.coordinates));
    }
    if (params.search !== undefined) {
      queryParams.append('search', String(params.search));
    }
    if (params.country !== undefined) {
      queryParams.append('country', String(params.country));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Problem;
            throw new GetStationsBadRequestError(body);
          } catch (e) {
            if (e instanceof GetStationsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            throw new GetStationsUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetStationsUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            throw new GetStationsForbiddenError(body);
          } catch (e) {
            if (e instanceof GetStationsForbiddenError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            throw new GetStationsTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof GetStationsTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            throw new GetStationsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetStationsInternalServerErrorError) throw e;
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