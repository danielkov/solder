import type { BookingPayment, CreateBookingPaymentUnion, Problem } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

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
            await this.raise(new CreateBookingPaymentBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateBookingPaymentBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingPaymentUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateBookingPaymentUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 403: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingPaymentForbiddenError(body));
          } catch (e) {
            if (e instanceof CreateBookingPaymentForbiddenError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 429: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingPaymentTooManyRequestsError(body));
          } catch (e) {
            if (e instanceof CreateBookingPaymentTooManyRequestsError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 500: {
          try {
            const body = await response.json() as Problem;
            await this.raise(new CreateBookingPaymentInternalServerErrorError(body));
          } catch (e) {
            if (e instanceof CreateBookingPaymentInternalServerErrorError) throw e;
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