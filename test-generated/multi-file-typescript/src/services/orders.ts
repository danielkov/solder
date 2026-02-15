import type { CancelOrderRequest, Error, Order, OrderCreate, OrderList } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit, SecurityConfig } from './client';

// Operation-specific error classes

/**
 * Error thrown when listOrders returns status 400.
 */
export class ListOrdersBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListOrdersBadRequestError`);
    this.name = 'ListOrdersBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when listOrders returns status 401.
 */
export class ListOrdersUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`ListOrdersUnauthorizedError`);
    this.name = 'ListOrdersUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when createOrder returns status 400.
 */
export class CreateOrderBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateOrderBadRequestError`);
    this.name = 'CreateOrderBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when createOrder returns status 401.
 */
export class CreateOrderUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`CreateOrderUnauthorizedError`);
    this.name = 'CreateOrderUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getOrderById returns status 401.
 */
export class GetOrderByIdUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetOrderByIdUnauthorizedError`);
    this.name = 'GetOrderByIdUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when getOrderById returns status 404.
 */
export class GetOrderByIdNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`GetOrderByIdNotFoundError`);
    this.name = 'GetOrderByIdNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteOrder returns status 400.
 */
export class DeleteOrderBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteOrderBadRequestError`);
    this.name = 'DeleteOrderBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteOrder returns status 401.
 */
export class DeleteOrderUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteOrderUnauthorizedError`);
    this.name = 'DeleteOrderUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when deleteOrder returns status 404.
 */
export class DeleteOrderNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`DeleteOrderNotFoundError`);
    this.name = 'DeleteOrderNotFoundError';
    this.body = body;
  }
}

/**
 * Error thrown when cancelOrder returns status 400.
 */
export class CancelOrderBadRequestError extends globalThis.Error {
  readonly status = 400;
  readonly body: Error;

  constructor(body: Error) {
    super(`CancelOrderBadRequestError`);
    this.name = 'CancelOrderBadRequestError';
    this.body = body;
  }
}

/**
 * Error thrown when cancelOrder returns status 401.
 */
export class CancelOrderUnauthorizedError extends globalThis.Error {
  readonly status = 401;
  readonly body: Error;

  constructor(body: Error) {
    super(`CancelOrderUnauthorizedError`);
    this.name = 'CancelOrderUnauthorizedError';
    this.body = body;
  }
}

/**
 * Error thrown when cancelOrder returns status 404.
 */
export class CancelOrderNotFoundError extends globalThis.Error {
  readonly status = 404;
  readonly body: Error;

  constructor(body: Error) {
    super(`CancelOrderNotFoundError`);
    this.name = 'CancelOrderNotFoundError';
    this.body = body;
  }
}

export class OrdersService {
  constructor(private baseUrl: string, private security: SecurityConfig, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * List all orders
   *
   * Retrieve a paginated list of orders
   *
   * @param page 
   * @param pageSize 
   * @param userId 
   * @param status 
   * @param paymentStatus 
   * @param startDate 
   * @param endDate 
   * @throws {ListOrdersBadRequestError | ListOrdersUnauthorizedError | UnexpectedError}
   */
  async listOrders(params: {
    page?: number;
    pageSize?: number;
    userId?: string;
    status?: string;
    paymentStatus?: string;
    startDate?: string;
    endDate?: string;
  }): Promise<OrderList> {
    const path = '/orders';
    const queryParams = new URLSearchParams();
    if (params.page !== undefined) {
      queryParams.append('page', String(params.page));
    }
    if (params.pageSize !== undefined) {
      queryParams.append('pageSize', String(params.pageSize));
    }
    if (params.userId !== undefined) {
      queryParams.append('userId', String(params.userId));
    }
    if (params.status !== undefined) {
      queryParams.append('status', String(params.status));
    }
    if (params.paymentStatus !== undefined) {
      queryParams.append('paymentStatus', String(params.paymentStatus));
    }
    if (params.startDate !== undefined) {
      queryParams.append('startDate', String(params.startDate));
    }
    if (params.endDate !== undefined) {
      queryParams.append('endDate', String(params.endDate));
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
            await this.raise(new ListOrdersBadRequestError(body));
          } catch (e) {
            if (e instanceof ListOrdersBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new ListOrdersUnauthorizedError(body));
          } catch (e) {
            if (e instanceof ListOrdersUnauthorizedError) throw e;
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
   * Create a new order
   *
   * Place a new order
   *
   * @param body 
   * @throws {CreateOrderBadRequestError | CreateOrderUnauthorizedError | UnexpectedError}
   */
  async createOrder(params: {
    body: OrderCreate;
  }): Promise<Order> {
    const path = '/orders';
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
            await this.raise(new CreateOrderBadRequestError(body));
          } catch (e) {
            if (e instanceof CreateOrderBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new CreateOrderUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CreateOrderUnauthorizedError) throw e;
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
   * Get order by ID
   *
   * Retrieve a specific order by its ID
   * @throws {GetOrderByIdUnauthorizedError | GetOrderByIdNotFoundError | UnexpectedError}
   */
  async getOrderById(): Promise<Order> {
    const path = '/orders/{orderId}';
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
            await this.raise(new GetOrderByIdUnauthorizedError(body));
          } catch (e) {
            if (e instanceof GetOrderByIdUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new GetOrderByIdNotFoundError(body));
          } catch (e) {
            if (e instanceof GetOrderByIdNotFoundError) throw e;
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
   * Delete order
   *
   * Delete an order (only allowed for pending orders)
   * @throws {DeleteOrderBadRequestError | DeleteOrderUnauthorizedError | DeleteOrderNotFoundError | UnexpectedError}
   */
  async deleteOrder(): Promise<void> {
    const path = '/orders/{orderId}';
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
        case 400: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeleteOrderBadRequestError(body));
          } catch (e) {
            if (e instanceof DeleteOrderBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeleteOrderUnauthorizedError(body));
          } catch (e) {
            if (e instanceof DeleteOrderUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new DeleteOrderNotFoundError(body));
          } catch (e) {
            if (e instanceof DeleteOrderNotFoundError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        default:
          await this.raise(new UnexpectedError(response.status, await response.text()));
      }
    }

    return;
  }

  /**
   * Cancel an order
   *
   * Cancel an existing order (not allowed for shipped or delivered orders)
   *
   * @param body 
   * @throws {CancelOrderBadRequestError | CancelOrderUnauthorizedError | CancelOrderNotFoundError | UnexpectedError}
   */
  async cancelOrder(params: {
    body: CancelOrderRequest;
  }): Promise<Order> {
    const path = '/orders/{orderId}/cancel';
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
            await this.raise(new CancelOrderBadRequestError(body));
          } catch (e) {
            if (e instanceof CancelOrderBadRequestError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            await this.raise(new CancelOrderUnauthorizedError(body));
          } catch (e) {
            if (e instanceof CancelOrderUnauthorizedError) throw e;
            await this.raise(new UnexpectedError(response.status, await response.text()));
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            await this.raise(new CancelOrderNotFoundError(body));
          } catch (e) {
            if (e instanceof CancelOrderNotFoundError) throw e;
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