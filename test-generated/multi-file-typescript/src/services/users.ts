import type { Error, User, UserCreate, UserList, UserUpdate } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listUsers returns status 400.
 */
export class ListUsersBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListUsersBadRequestError`);
    this.name = 'ListUsersBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listUsers returns status 401.
 */
export class ListUsersUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListUsersUnauthorizedError`);
    this.name = 'ListUsersUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createUser returns status 400.
 */
export class CreateUserBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateUserBadRequestError`);
    this.name = 'CreateUserBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createUser returns status 401.
 */
export class CreateUserUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateUserUnauthorizedError`);
    this.name = 'CreateUserUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createUser returns status 409.
 */
export class CreateUserConflictError extends globalThis.Error {
  readonly status = 409;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateUserConflictError`);
    this.name = 'CreateUserConflictError';
    this.body = body;
  }
}

/**
 * Error thrown when getUserById returns status 401.
 */
export class GetUserByIdUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetUserByIdUnauthorizedError`);
    this.name = 'GetUserByIdUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getUserById returns status 404.
 */
export class GetUserByIdNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetUserByIdNotFoundError`);
    this.name = 'GetUserByIdNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when updateUser returns status 400.
 */
export class UpdateUserBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateUserBadRequestError`);
    this.name = 'UpdateUserBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when updateUser returns status 401.
 */
export class UpdateUserUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateUserUnauthorizedError`);
    this.name = 'UpdateUserUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when updateUser returns status 404.
 */
export class UpdateUserNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`UpdateUserNotFoundError`);
    this.name = 'UpdateUserNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteUser returns status 401.
 */
export class DeleteUserUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteUserUnauthorizedError`);
    this.name = 'DeleteUserUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteUser returns status 404.
 */
export class DeleteUserNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteUserNotFoundError`);
    this.name = 'DeleteUserNotFoundError';
    this.body = body;
  }
}

export class UsersService {
  constructor(private baseUrl: string, private security: SecurityConfig) {}

  /**
   * List all users
   *
   * Retrieve a paginated list of users
   *
   * @param page 
   * @param pageSize 
   * @param status 
   * @param role 
   * @param search 
   * @throws {ListUsersBadRequestError | ListUsersUnauthorizedError | UnexpectedError}
   */
  async listUsers(params: {
    page?: number;
    pageSize?: number;
    status?: string;
    role?: string;
    search?: string;
  }): Promise<UserList> {
    const path = '/users';
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.pageSize !== undefined) {
      queryParams.append('pageSize', String(params.pageSize));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.role !== undefined) {
      queryParams.append('role', String(params.role));
    }
    if (params.search !== undefined) {
      queryParams.append('search', String(params.search));
    }
    const queryString = queryParams.toString();
    const url = queryString ? `${this.baseUrl}${path}?${queryString}` : `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new ListUsersBadRequestError(body);
          } catch (e) {
            if (e instanceof ListUsersBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new ListUsersUnauthorizedError(body);
          } catch (e) {
            if (e instanceof ListUsersUnauthorizedError) throw e;
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
   * Create a new user
   *
   * Create a new user account
   *
   * @param body 
   * @throws {CreateUserBadRequestError | CreateUserUnauthorizedError | CreateUserConflictError | UnexpectedError}
   */
  async createUser(params: {
    body: UserCreate;
  }): Promise<User> {
    const path = '/users';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
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
            const body = await response.json() as Error;
            throw new CreateUserBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateUserBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new CreateUserUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateUserUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 409: {
          try {
            const body = await response.json() as Error;
            throw new CreateUserConflictError(body);
          } catch (e) {
            if (e instanceof CreateUserConflictError) throw e;
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
   * Get user by ID
   *
   * Retrieve a specific user by their ID
   * @throws {GetUserByIdUnauthorizedError | GetUserByIdNotFoundError | UnexpectedError}
   */
  async getUserById(): Promise<User> {
    const path = '/users/{userId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new GetUserByIdUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetUserByIdUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new GetUserByIdNotFoundError(body);
          } catch (e) {
            if (e instanceof GetUserByIdNotFoundError) throw e;
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
   * Update user
   *
   * Update an existing user
   *
   * @param body 
   * @throws {UpdateUserBadRequestError | UpdateUserUnauthorizedError | UpdateUserNotFoundError | UnexpectedError}
   */
  async updateUser(params: {
    body: UserUpdate;
  }): Promise<User> {
    const path = '/users/{userId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    headers['Content-Type'] = 'application/json';
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new UpdateUserBadRequestError(body);
          } catch (e) {
            if (e instanceof UpdateUserBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new UpdateUserUnauthorizedError(body);
          } catch (e) {
            if (e instanceof UpdateUserUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new UpdateUserNotFoundError(body);
          } catch (e) {
            if (e instanceof UpdateUserNotFoundError) throw e;
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
   * Delete user
   *
   * Delete a user account
   * @throws {DeleteUserUnauthorizedError | DeleteUserNotFoundError | UnexpectedError}
   */
  async deleteUser(): Promise<void> {
    const path = '/users/{userId}';
    const url = `${this.baseUrl}${path}`;
    
    const headers: Record<string, string> = {};
    if (this.security.bearerAuth) {
      headers['Authorization'] = `Bearer ${this.security.bearerAuth}`;
    }
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new DeleteUserUnauthorizedError(body);
          } catch (e) {
            if (e instanceof DeleteUserUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new DeleteUserNotFoundError(body);
          } catch (e) {
            if (e instanceof DeleteUserNotFoundError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        default:
          throw new UnexpectedError(response.status, await response.text());
      }
    }

    return;
  }

}