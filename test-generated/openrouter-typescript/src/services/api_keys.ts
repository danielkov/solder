import type { BadRequestResponse, CreateKeysRequest, CreateKeysResponse, DeleteKeysResponse, GetCurrentKeyResponse, GetKeyResponse, InternalServerResponse, ListResponse, NotFoundResponse, TooManyRequestsResponse, UnauthorizedResponse, UpdateKeysRequest, UpdateKeysResponse } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when getCurrentKey returns status 401.
 */
export class GetCurrentKeyUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetCurrentKeyUnauthorizedError`);
    this.name = 'GetCurrentKeyUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getCurrentKey returns status 500.
 */
export class GetCurrentKeyInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetCurrentKeyInternalServerErrorError`);
    this.name = 'GetCurrentKeyInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when list returns status 401.
 */
export class ListUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`ListUnauthorizedError`);
    this.name = 'ListUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when list returns status 429.
 */
export class ListTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`ListTooManyRequestsError`);
    this.name = 'ListTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when list returns status 500.
 */
export class ListInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`ListInternalServerErrorError`);
    this.name = 'ListInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when createKeys returns status 400.
 */
export class CreateKeysBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`CreateKeysBadRequestError`);
    this.name = 'CreateKeysBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createKeys returns status 401.
 */
export class CreateKeysUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`CreateKeysUnauthorizedError`);
    this.name = 'CreateKeysUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createKeys returns status 429.
 */
export class CreateKeysTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`CreateKeysTooManyRequestsError`);
    this.name = 'CreateKeysTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when createKeys returns status 500.
 */
export class CreateKeysInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`CreateKeysInternalServerErrorError`);
    this.name = 'CreateKeysInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when getKey returns status 401.
 */
export class GetKeyUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`GetKeyUnauthorizedError`);
    this.name = 'GetKeyUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getKey returns status 404.
 */
export class GetKeyNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`GetKeyNotFoundError`);
    this.name = 'GetKeyNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when getKey returns status 429.
 */
export class GetKeyTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`GetKeyTooManyRequestsError`);
    this.name = 'GetKeyTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when getKey returns status 500.
 */
export class GetKeyInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`GetKeyInternalServerErrorError`);
    this.name = 'GetKeyInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteKeys returns status 401.
 */
export class DeleteKeysUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`DeleteKeysUnauthorizedError`);
    this.name = 'DeleteKeysUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteKeys returns status 404.
 */
export class DeleteKeysNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`DeleteKeysNotFoundError`);
    this.name = 'DeleteKeysNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteKeys returns status 429.
 */
export class DeleteKeysTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`DeleteKeysTooManyRequestsError`);
    this.name = 'DeleteKeysTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteKeys returns status 500.
 */
export class DeleteKeysInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`DeleteKeysInternalServerErrorError`);
    this.name = 'DeleteKeysInternalServerErrorError';
    this.body = body;
  }
}

/**
 * Error thrown when updateKeys returns status 400.
 */
export class UpdateKeysBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: BadRequestResponse;

  constructor(body: BadRequestResponse) {
    super(`UpdateKeysBadRequestError`);
    this.name = 'UpdateKeysBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when updateKeys returns status 401.
 */
export class UpdateKeysUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: UnauthorizedResponse;

  constructor(body: UnauthorizedResponse) {
    super(`UpdateKeysUnauthorizedError`);
    this.name = 'UpdateKeysUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when updateKeys returns status 404.
 */
export class UpdateKeysNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: NotFoundResponse;

  constructor(body: NotFoundResponse) {
    super(`UpdateKeysNotFoundError`);
    this.name = 'UpdateKeysNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updateKeys returns status 429.
 */
export class UpdateKeysTooManyRequestsError extends globalThis.Error {
  readonly status = 429;
  readonly body: TooManyRequestsResponse;

  constructor(body: TooManyRequestsResponse) {
    super(`UpdateKeysTooManyRequestsError`);
    this.name = 'UpdateKeysTooManyRequestsError';
    this.body = body;
  }
}

/**
 * Error thrown when updateKeys returns status 500.
 */
export class UpdateKeysInternalServerErrorError extends globalThis.Error {
  readonly status = 500;
  readonly body: InternalServerResponse;

  constructor(body: InternalServerResponse) {
    super(`UpdateKeysInternalServerErrorError`);
    this.name = 'UpdateKeysInternalServerErrorError';
    this.body = body;
  }
}

export class ApiKeysService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * Get current API key
   *
   * Get information on the API key associated with the current authentication session
   * @throws {GetCurrentKeyUnauthorizedError | GetCurrentKeyInternalServerErrorError | UnexpectedError}
   */
  async getCurrentKey(): Promise<GetCurrentKeyResponse> {
    const path = '/key';
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
            throw new GetCurrentKeyUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetCurrentKeyUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetCurrentKeyInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetCurrentKeyInternalServerErrorError) throw e;
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
   * List API keys
   *
   * @param includeDisabled 
   * @param offset 
   * @throws {ListUnauthorizedError | ListTooManyRequestsError | ListInternalServerErrorError | UnexpectedError}
   */
  async list(params: {
    includeDisabled?: string;
    offset?: string;
  }): Promise<ListResponse> {
    const path = '/keys';
    const queryParams = new URLSearchParams();
    if (params.includeDisabled !== undefined) {
      queryParams.append('include_disabled', String(params.includeDisabled));
    }
    if (params.offset !== undefined) {
      queryParams.append('offset', String(params.offset));
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
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new ListUnauthorizedError(body);
          } catch (e) {
            if (e instanceof ListUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new ListTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof ListTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new ListInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof ListInternalServerErrorError) throw e;
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
   * Create a new API key
   *
   * @param body 
   * @throws {CreateKeysBadRequestError | CreateKeysUnauthorizedError | CreateKeysTooManyRequestsError | CreateKeysInternalServerErrorError | UnexpectedError}
   */
  async createKeys(params: {
    body: CreateKeysRequest;
  }): Promise<CreateKeysResponse> {
    const path = '/keys';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
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
            throw new CreateKeysBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateKeysBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new CreateKeysUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateKeysUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new CreateKeysTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof CreateKeysTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new CreateKeysInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof CreateKeysInternalServerErrorError) throw e;
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
   * Get a single API key
   *
   * @param hash 
   * @throws {GetKeyUnauthorizedError | GetKeyNotFoundError | GetKeyTooManyRequestsError | GetKeyInternalServerErrorError | UnexpectedError}
   */
  async getKey(params: {
    hash: string;
  }): Promise<GetKeyResponse> {
    const path = `/keys/{hash}`.replace('{hash}', String(params.hash));
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
            throw new GetKeyUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetKeyUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new GetKeyNotFoundError(body);
          } catch (e) {
            if (e instanceof GetKeyNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new GetKeyTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof GetKeyTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new GetKeyInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof GetKeyInternalServerErrorError) throw e;
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
   * Delete an API key
   *
   * @param hash 
   * @throws {DeleteKeysUnauthorizedError | DeleteKeysNotFoundError | DeleteKeysTooManyRequestsError | DeleteKeysInternalServerErrorError | UnexpectedError}
   */
  async deleteKeys(params: {
    hash: string;
  }): Promise<DeleteKeysResponse> {
    const path = `/keys/{hash}`.replace('{hash}', String(params.hash));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new DeleteKeysUnauthorizedError(body);
          } catch (e) {
            if (e instanceof DeleteKeysUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new DeleteKeysNotFoundError(body);
          } catch (e) {
            if (e instanceof DeleteKeysNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new DeleteKeysTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof DeleteKeysTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new DeleteKeysInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof DeleteKeysInternalServerErrorError) throw e;
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
   * Update an API key
   *
   * @param hash 
   * @param body 
   * @throws {UpdateKeysBadRequestError | UpdateKeysUnauthorizedError | UpdateKeysNotFoundError | UpdateKeysTooManyRequestsError | UpdateKeysInternalServerErrorError | UnexpectedError}
   */
  async updateKeys(params: {
    hash: string;
    body: UpdateKeysRequest;
  }): Promise<UpdateKeysResponse> {
    const path = `/keys/{hash}`.replace('{hash}', String(params.hash));
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.apiKey) {
      headers['Authorization'] = `Bearer ${this.security.apiKey}`;
    }
    
    const response = await fetch(url, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as BadRequestResponse;
            throw new UpdateKeysBadRequestError(body);
          } catch (e) {
            if (e instanceof UpdateKeysBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as UnauthorizedResponse;
            throw new UpdateKeysUnauthorizedError(body);
          } catch (e) {
            if (e instanceof UpdateKeysUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as NotFoundResponse;
            throw new UpdateKeysNotFoundError(body);
          } catch (e) {
            if (e instanceof UpdateKeysNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 429: {
          try {
            const body = await response.json() as TooManyRequestsResponse;
            throw new UpdateKeysTooManyRequestsError(body);
          } catch (e) {
            if (e instanceof UpdateKeysTooManyRequestsError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 500: {
          try {
            const body = await response.json() as InternalServerResponse;
            throw new UpdateKeysInternalServerErrorError(body);
          } catch (e) {
            if (e instanceof UpdateKeysInternalServerErrorError) throw e;
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