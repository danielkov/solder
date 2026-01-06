import type { Error, SpecialEvent, SpecialEventCollection, SpecialEventFields } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listSpecialEvents returns status 400.
 */
export class ListSpecialEventsBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListSpecialEventsBadRequestError`);
    this.name = 'ListSpecialEventsBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listSpecialEvents returns status 404.
 */
export class ListSpecialEventsNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListSpecialEventsNotFoundError`);
    this.name = 'ListSpecialEventsNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when createSpecialEvent returns status 400.
 */
export class CreateSpecialEventBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateSpecialEventBadRequestError`);
    this.name = 'CreateSpecialEventBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createSpecialEvent returns status 404.
 */
export class CreateSpecialEventNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateSpecialEventNotFoundError`);
    this.name = 'CreateSpecialEventNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getSpecialEvent returns status 400.
 */
export class GetSpecialEventBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetSpecialEventBadRequestError`);
    this.name = 'GetSpecialEventBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when getSpecialEvent returns status 404.
 */
export class GetSpecialEventNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetSpecialEventNotFoundError`);
    this.name = 'GetSpecialEventNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteSpecialEvent returns status 400.
 */
export class DeleteSpecialEventBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteSpecialEventBadRequestError`);
    this.name = 'DeleteSpecialEventBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteSpecialEvent returns status 401.
 */
export class DeleteSpecialEventUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteSpecialEventUnauthorizedError`);
    this.name = 'DeleteSpecialEventUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteSpecialEvent returns status 404.
 */
export class DeleteSpecialEventNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteSpecialEventNotFoundError`);
    this.name = 'DeleteSpecialEventNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updateSpecialEvent returns status 400.
 */
export class UpdateSpecialEventBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateSpecialEventBadRequestError`);
    this.name = 'UpdateSpecialEventBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when updateSpecialEvent returns status 404.
 */
export class UpdateSpecialEventNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateSpecialEventNotFoundError`);
    this.name = 'UpdateSpecialEventNotFoundError';
    this.body = body;
  }
}

export class EventsService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * List special events
   *
   * Return a list of upcoming special events at the museum.
   *
   * @param startDate 
   * @param endDate 
   * @param page 
   * @param limit 
   * @throws {ListSpecialEventsBadRequestError | ListSpecialEventsNotFoundError | UnexpectedError}
   */
  async listSpecialEvents(params: {
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
  }): Promise<SpecialEventCollection> {
    const path = '/special-events';
    const queryParams = new URLSearchParams();
    if (params.startDate !== undefined) {
      queryParams.append('startDate', String(params.startDate));
    }
    if (params.endDate !== undefined) {
      queryParams.append('endDate', String(params.endDate));
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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new ListSpecialEventsBadRequestError(body);
          } catch (e) {
            if (e instanceof ListSpecialEventsBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new ListSpecialEventsNotFoundError(body);
          } catch (e) {
            if (e instanceof ListSpecialEventsNotFoundError) throw e;
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
   * Create special events
   *
   * Creates a new special event for the museum.
   *
   * @param body 
   * @throws {CreateSpecialEventBadRequestError | CreateSpecialEventNotFoundError | UnexpectedError}
   */
  async createSpecialEvent(params: {
    body: SpecialEvent;
  }): Promise<SpecialEvent> {
    const path = '/special-events';
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
            throw new CreateSpecialEventBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateSpecialEventBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new CreateSpecialEventNotFoundError(body);
          } catch (e) {
            if (e instanceof CreateSpecialEventNotFoundError) throw e;
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
   * Get special event
   *
   * Get details about a special event.
   *
   * @param eventId 
   * @throws {GetSpecialEventBadRequestError | GetSpecialEventNotFoundError | UnexpectedError}
   */
  async getSpecialEvent(params: {
    eventId: string;
  }): Promise<SpecialEvent> {
    const path = `/special-events/{eventId}`.replace('{eventId}', String(params.eventId));
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
            throw new GetSpecialEventBadRequestError(body);
          } catch (e) {
            if (e instanceof GetSpecialEventBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new GetSpecialEventNotFoundError(body);
          } catch (e) {
            if (e instanceof GetSpecialEventNotFoundError) throw e;
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
   * Delete special event
   *
   * Delete a special event from the collection. Allows museum to cancel planned events.
   *
   * @param eventId 
   * @throws {DeleteSpecialEventBadRequestError | DeleteSpecialEventUnauthorizedError | DeleteSpecialEventNotFoundError | UnexpectedError}
   */
  async deleteSpecialEvent(params: {
    eventId: string;
  }): Promise<void> {
    const path = `/special-events/{eventId}`.replace('{eventId}', String(params.eventId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new DeleteSpecialEventBadRequestError(body);
          } catch (e) {
            if (e instanceof DeleteSpecialEventBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new DeleteSpecialEventUnauthorizedError(body);
          } catch (e) {
            if (e instanceof DeleteSpecialEventUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new DeleteSpecialEventNotFoundError(body);
          } catch (e) {
            if (e instanceof DeleteSpecialEventNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
      }
    }

    return;
  }

  /**
   * Update special event
   *
   * Update the details of a special event.
   *
   * @param eventId 
   * @param body 
   * @throws {UpdateSpecialEventBadRequestError | UpdateSpecialEventNotFoundError | UnexpectedError}
   */
  async updateSpecialEvent(params: {
    eventId: string;
    body: SpecialEventFields;
  }): Promise<SpecialEvent> {
    const path = `/special-events/{eventId}`.replace('{eventId}', String(params.eventId));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    
    const response = await fetch(url, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new UpdateSpecialEventBadRequestError(body);
          } catch (e) {
            if (e instanceof UpdateSpecialEventBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new UpdateSpecialEventNotFoundError(body);
          } catch (e) {
            if (e instanceof UpdateSpecialEventNotFoundError) throw e;
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