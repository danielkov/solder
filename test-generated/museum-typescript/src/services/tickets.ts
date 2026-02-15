import type { BuyMuseumTickets, Error, MuseumTicketsConfirmation, TicketCodeImage } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when buyMuseumTickets returns status 400.
 */
export class BuyMuseumTicketsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`BuyMuseumTicketsBadRequestError`);
    this.name = 'BuyMuseumTicketsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when buyMuseumTickets returns status 404.
 */
export class BuyMuseumTicketsNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`BuyMuseumTicketsNotFoundError`);
    this.name = 'BuyMuseumTicketsNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getTicketCode returns status 400.
 */
export class GetTicketCodeBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetTicketCodeBadRequestError`);
    this.name = 'GetTicketCodeBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getTicketCode returns status 404.
 */
export class GetTicketCodeNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetTicketCodeNotFoundError`);
    this.name = 'GetTicketCodeNotFoundError';
    this.body = body;
  }
}

export class TicketsService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Buy museum tickets
   *
   * Purchase museum tickets for general entry or special events.
   *
   * @param body 
   * @throws {BuyMuseumTicketsBadRequestError | BuyMuseumTicketsNotFoundError | UnexpectedError}
   */
  async buyMuseumTickets(params: {
    body: BuyMuseumTickets;
  }): Promise<MuseumTicketsConfirmation> {
    const path = '/tickets';
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
            const body = await response.json() as Error;
            await this.raise(new BuyMuseumTicketsBadRequestError(body));
          } catch (e) {
            if (e instanceof BuyMuseumTicketsBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new BuyMuseumTicketsNotFoundError(body));
          } catch (e) {
            if (e instanceof BuyMuseumTicketsNotFoundError) throw e;
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
   * Get ticket QR code
   *
   * Return an image of your ticket with scannable QR code. Used for event entry.
   *
   * @param ticketId 
   * @throws {GetTicketCodeBadRequestError | GetTicketCodeNotFoundError | UnexpectedError}
   */
  async getTicketCode(params: {
    ticketId: string;
  }): Promise<TicketCodeImage> {
    const path = `/tickets/{ticketId}/qr`.replace('{ticketId}', String(params.ticketId));
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
            const body = await response.json() as Error;
            await this.raise(new GetTicketCodeBadRequestError(body));
          } catch (e) {
            if (e instanceof GetTicketCodeBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetTicketCodeNotFoundError(body));
          } catch (e) {
            if (e instanceof GetTicketCodeNotFoundError) throw e;
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