import type { BookingPayment, CreateBookingPaymentUnion, Problem } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when createBookingPayment returns status 400.
 */
export class CreateBookingPaymentBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingPaymentBadRequestError`);
    this.name = 'CreateBookingPaymentBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createBookingPayment returns status 401.
 */
export class CreateBookingPaymentUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingPaymentUnauthorizedError`);
    this.name = 'CreateBookingPaymentUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createBookingPayment returns status 403.
 */
export class CreateBookingPaymentForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingPaymentForbiddenError`);
    this.name = 'CreateBookingPaymentForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when createBookingPayment returns status 429.
 */
export class CreateBookingPaymentTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingPaymentTooManyRequestsError`);
    this.name = 'CreateBookingPaymentTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createBookingPayment returns status 500.
 */
export class CreateBookingPaymentInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: Problem;

  constructor(body: Problem) {
    super(`CreateBookingPaymentInternalServerErrorError`);
    this.name = 'CreateBookingPaymentInternalServerErrorError';
    this.body = body;
  }
}

export class PaymentsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Pay for a Booking
   *
   * A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.
   *
   * @param body 
   * @throws {CreateBookingPaymentBadRequestError | CreateBookingPaymentUnauthorizedError | CreateBookingPaymentForbiddenError | CreateBookingPaymentTooManyRequestsError | CreateBookingPaymentInternalServerErrorError | UnexpectedError}
   */
  async createBookingPayment(params: {
    body: BookingPayment;
  }): Promise<CreateBookingPaymentUnion> {
    const path = '/bookings/{bookingId}/payment';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Problem;
            throw new CreateBookingPaymentBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateBookingPaymentBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            throw new CreateBookingPaymentUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateBookingPaymentUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            throw new CreateBookingPaymentForbiddenError(body);
          } catch (e) {
            if (e instanceof CreateBookingPaymentForbiddenError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            throw new CreateBookingPaymentTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof CreateBookingPaymentTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            throw new CreateBookingPaymentInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof CreateBookingPaymentInternalServerErrorError) throw e;
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