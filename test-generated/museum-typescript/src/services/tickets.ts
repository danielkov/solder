import type { BuyMuseumTickets, Error, MuseumTicketsConfirmation, TicketCodeImage } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig) {}

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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new BuyMuseumTicketsBadRequestError(body);
          } catch (e) {
            if (e instanceof BuyMuseumTicketsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new BuyMuseumTicketsNotFoundError(body);
          } catch (e) {
            if (e instanceof BuyMuseumTicketsNotFoundError) throw e;
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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new GetTicketCodeBadRequestError(body);
          } catch (e) {
            if (e instanceof GetTicketCodeBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new GetTicketCodeNotFoundError(body);
          } catch (e) {
            if (e instanceof GetTicketCodeNotFoundError) throw e;
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