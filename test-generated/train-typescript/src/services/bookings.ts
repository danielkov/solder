import type { Booking, CreateBookingUnion, GetBookingsUnion, Problem } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getBookings returns status 400.
 */
export class GetBookingsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingsBadRequestError`);
    this.name = 'GetBookingsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getBookings returns status 401.
 */
export class GetBookingsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingsUnauthorizedError`);
    this.name = 'GetBookingsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getBookings returns status 403.
 */
export class GetBookingsForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingsForbiddenError`);
    this.name = 'GetBookingsForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getBookings returns status 429.
 */
export class GetBookingsTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingsTooManyRequestsError`);
    this.name = 'GetBookingsTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getBookings returns status 500.
 */
export class GetBookingsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingsInternalServerErrorError`);
    this.name = 'GetBookingsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 400.
 */
export class CreateBookingBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingBadRequestError`);
    this.name = 'CreateBookingBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 401.
 */
export class CreateBookingUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingUnauthorizedError`);
    this.name = 'CreateBookingUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 404.
 */
export class CreateBookingNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingNotFoundError`);
    this.name = 'CreateBookingNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 409.
 */
export class CreateBookingConflictError extends globalThis.Error {
  readonly status = 409;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingConflictError`);
    this.name = 'CreateBookingConflictError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 429.
 */
export class CreateBookingTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingTooManyRequestsError`);
    this.name = 'CreateBookingTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createBooking returns status 500.
 */
export class CreateBookingInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingInternalServerErrorError`);
    this.name = 'CreateBookingInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 400.
 */
export class GetBookingBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingBadRequestError`);
    this.name = 'GetBookingBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 401.
 */
export class GetBookingUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingUnauthorizedError`);
    this.name = 'GetBookingUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 403.
 */
export class GetBookingForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingForbiddenError`);
    this.name = 'GetBookingForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 404.
 */
export class GetBookingNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingNotFoundError`);
    this.name = 'GetBookingNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 429.
 */
export class GetBookingTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingTooManyRequestsError`);
    this.name = 'GetBookingTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getBooking returns status 500.
 */
export class GetBookingInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`GetBookingInternalServerErrorError`);
    this.name = 'GetBookingInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 400.
 */
export class DeleteBookingBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingBadRequestError`);
    this.name = 'DeleteBookingBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 401.
 */
export class DeleteBookingUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingUnauthorizedError`);
    this.name = 'DeleteBookingUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 403.
 */
export class DeleteBookingForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingForbiddenError`);
    this.name = 'DeleteBookingForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 404.
 */
export class DeleteBookingNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingNotFoundError`);
    this.name = 'DeleteBookingNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 429.
 */
export class DeleteBookingTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingTooManyRequestsError`);
    this.name = 'DeleteBookingTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteBooking returns status 500.
 */
export class DeleteBookingInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`DeleteBookingInternalServerErrorError`);
    this.name = 'DeleteBookingInternalServerErrorError';
    this.body = body;
  }
}

export class BookingsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * List existing bookings
   *
   * Returns a list of all trip bookings by the authenticated user.
   *
   * @param page 
   * @param limit 
   * @throws {GetBookingsBadRequestError | GetBookingsUnauthorizedError | GetBookingsForbiddenError | GetBookingsTooManyRequestsError | GetBookingsInternalServerErrorError | UnexpectedError}
   */
  async getBookings(params: {
    page?: number;
    limit?: number;
  }): Promise<GetBookingsUnion> {
    const path = '/bookings';
    const queryParams = new URLSearchParams();
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
            const body = await response.json() as Problem;
            await this.raise(new GetBookingsBadRequestError(body));
          } catch (e) {
            if (e instanceof GetBookingsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingsUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetBookingsUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingsForbiddenError(body));
          } catch (e) {
            if (e instanceof GetBookingsForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingsTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof GetBookingsTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingsInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof GetBookingsInternalServerErrorError) throw e;
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
   * Create a booking
   *
   * A booking is a temporary hold on a trip. It is not confirmed until the payment is processed.
   *
   * @param body 
   * @throws {CreateBookingBadRequestError | CreateBookingUnauthorizedError | CreateBookingNotFoundError | CreateBookingConflictError | CreateBookingTooManyRequestsError | CreateBookingInternalServerErrorError | UnexpectedError}
   */
  async createBooking(params: {
    body: Booking;
  }): Promise<CreateBookingUnion> {
    const path = '/bookings';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
    const request: SDKRequestInit = {
      method: 'POST',
      url,
      headers,
      body: JSON.stringify(params.body),
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
            await this.raise(new CreateBookingBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateBookingBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateBookingUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingNotFoundError(body));
          } catch (e) {
            if (e instanceof CreateBookingNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 409: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingConflictError(body));
          } catch (e) {
            if (e instanceof CreateBookingConflictError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof CreateBookingTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof CreateBookingInternalServerErrorError) throw e;
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
   * Get a booking
   *
   * Returns the details of a specific booking.
   * @throws {GetBookingBadRequestError | GetBookingUnauthorizedError | GetBookingForbiddenError | GetBookingNotFoundError | GetBookingTooManyRequestsError | GetBookingInternalServerErrorError | UnexpectedError}
   */
  async getBooking(): Promise<CreateBookingUnion> {
    const path = '/bookings/{bookingId}';
    const url = `${this.baseUrl}${path}`;
    
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
            await this.raise(new GetBookingBadRequestError(body));
          } catch (e) {
            if (e instanceof GetBookingBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetBookingUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingForbiddenError(body));
          } catch (e) {
            if (e instanceof GetBookingForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingNotFoundError(body));
          } catch (e) {
            if (e instanceof GetBookingNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof GetBookingTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new GetBookingInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof GetBookingInternalServerErrorError) throw e;
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
   * Delete a booking
   *
   * Deletes a booking, cancelling the hold on the trip.
   * @throws {DeleteBookingBadRequestError | DeleteBookingUnauthorizedError | DeleteBookingForbiddenError | DeleteBookingNotFoundError | DeleteBookingTooManyRequestsError | DeleteBookingInternalServerErrorError | UnexpectedError}
   */
  async deleteBooking(): Promise<void> {
    const path = '/bookings/{bookingId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
    const request: SDKRequestInit = {
      method: 'DELETE',
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
            await this.raise(new DeleteBookingBadRequestError(body));
          } catch (e) {
            if (e instanceof DeleteBookingBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new DeleteBookingUnauthorizedError(body));
          } catch (e) {
            if (e instanceof DeleteBookingUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new DeleteBookingForbiddenError(body));
          } catch (e) {
            if (e instanceof DeleteBookingForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new DeleteBookingNotFoundError(body));
          } catch (e) {
            if (e instanceof DeleteBookingNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new DeleteBookingTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof DeleteBookingTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new DeleteBookingInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof DeleteBookingInternalServerErrorError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return;
  }

}