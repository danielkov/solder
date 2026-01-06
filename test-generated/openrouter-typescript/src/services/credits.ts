import type { BadRequestResponse, CreateChargeRequest, CreateCoinbaseChargeResponse, ForbiddenResponse, InternalServerResponse, TooManyRequestsResponse, UnauthorizedResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getCredits returns status 401.
 */
export class GetCreditsUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetCreditsUnauthorizedError`);
    this.name = 'GetCreditsUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getCredits returns status 403.
 */
export class GetCreditsForbiddenError extends globalThis.Error {
  readonly status = 403;
  readonly body: ForbiddenResponse;

  constructor(body: ForbiddenResponse) {
    super(`GetCreditsForbiddenError`);
    this.name = 'GetCreditsForbiddenError';
    this.body = body;
  }
}

/**
 * Error thrown when getCredits returns status 500.
 */
export class GetCreditsInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetCreditsInternalServerErrorError`);
    this.name = 'GetCreditsInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createCoinbaseCharge returns status 400.
 */
export class CreateCoinbaseChargeBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`CreateCoinbaseChargeBadRequestError`);
    this.name = 'CreateCoinbaseChargeBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createCoinbaseCharge returns status 401.
 */
export class CreateCoinbaseChargeUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`CreateCoinbaseChargeUnauthorizedError`);
    this.name = 'CreateCoinbaseChargeUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createCoinbaseCharge returns status 429.
 */
export class CreateCoinbaseChargeTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`CreateCoinbaseChargeTooManyRequestsError`);
    this.name = 'CreateCoinbaseChargeTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createCoinbaseCharge returns status 500.
 */
export class CreateCoinbaseChargeInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`CreateCoinbaseChargeInternalServerErrorError`);
    this.name = 'CreateCoinbaseChargeInternalServerErrorError';
    this.body = body;
  }
}

export class CreditsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Get remaining credits
   *
   * Get total credits purchased and used for the authenticated user
   * @throws {GetCreditsUnauthorizedError | GetCreditsForbiddenError | GetCreditsInternalServerErrorError | UnexpectedError}
   */
  async getCredits(): Promise<any> {
    const path = '/credits';
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
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new GetCreditsUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetCreditsUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 403: {
          try {
            const body = await response.json() as ForbiddenResponse;
            throw new GetCreditsForbiddenError(body);
          } catch (e) {
            if (e instanceof GetCreditsForbiddenError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetCreditsInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetCreditsInternalServerErrorError) throw e;
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
   * Create a Coinbase charge for crypto payment
   *
   * Create a Coinbase charge for crypto payment
   *
   * @param body 
   * @throws {CreateCoinbaseChargeBadRequestError | CreateCoinbaseChargeUnauthorizedError | CreateCoinbaseChargeTooManyRequestsError | CreateCoinbaseChargeInternalServerErrorError | UnexpectedError}
   */
  async createCoinbaseCharge(params: {
    body: CreateChargeRequest;
  }): Promise<CreateCoinbaseChargeResponse> {
    const path = '/credits/coinbase';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearer) {
      headers['Authorization'] = `Bearer ${this.security.bearer}`;
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as BadRequestResponse;
            throw new CreateCoinbaseChargeBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateCoinbaseChargeBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new CreateCoinbaseChargeUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateCoinbaseChargeUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new CreateCoinbaseChargeTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof CreateCoinbaseChargeTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new CreateCoinbaseChargeInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof CreateCoinbaseChargeInternalServerErrorError) throw e;
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