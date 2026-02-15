import type { Error, User, UserCreate, UserList, UserUpdate } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

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
            await this.raise(new ListUsersBadRequestError(body));
          } catch (e) {
            if (e instanceof ListUsersBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new ListUsersUnauthorizedError(body));
          } catch (e) {
            if (e instanceof ListUsersUnauthorizedError) throw e;
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
            await this.raise(new CreateUserBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateUserBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new CreateUserUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateUserUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 409: {
          try {
            const body = await response.json() as Error;
            await this.raise(new CreateUserConflictError(body));
          } catch (e) {
            if (e instanceof CreateUserConflictError) throw e;
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
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetUserByIdUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetUserByIdUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetUserByIdNotFoundError(body));
          } catch (e) {
            if (e instanceof GetUserByIdNotFoundError) throw e;
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
    
    const request: SDKRequestInit = {
      method: 'PUT',
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
            await this.raise(new UpdateUserBadRequestError(body));
          } catch (e) {
            if (e instanceof UpdateUserBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new UpdateUserUnauthorizedError(body));
          } catch (e) {
            if (e instanceof UpdateUserUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new UpdateUserNotFoundError(body));
          } catch (e) {
            if (e instanceof UpdateUserNotFoundError) throw e;
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
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeleteUserUnauthorizedError(body));
          } catch (e) {
            if (e instanceof DeleteUserUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeleteUserNotFoundError(body));
          } catch (e) {
            if (e instanceof DeleteUserNotFoundError) throw e;
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