import type { CancelOrderRequest, Error, Order, OrderCreate, OrderList } from '../types';
import { UnexpectedError } from '../types/errors';
import { SecurityConfig } from './client';

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
  constructor(private baseUrl: string, private security: SecurityConfig) {}

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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new ListOrdersBadRequestError(body);
          } catch (e) {
            if (e instanceof ListOrdersBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new ListOrdersUnauthorizedError(body);
          } catch (e) {
            if (e instanceof ListOrdersUnauthorizedError) throw e;
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
            throw new CreateOrderBadRequestError(body);
          } catch (e) {
            if (e instanceof CreateOrderBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new CreateOrderUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CreateOrderUnauthorizedError) throw e;
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
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new GetOrderByIdUnauthorizedError(body);
          } catch (e) {
            if (e instanceof GetOrderByIdUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new GetOrderByIdNotFoundError(body);
          } catch (e) {
            if (e instanceof GetOrderByIdNotFoundError) throw e;
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
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      switch (response.status) {
        case 400: {
          try {
            const body = await response.json() as Error;
            throw new DeleteOrderBadRequestError(body);
          } catch (e) {
            if (e instanceof DeleteOrderBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new DeleteOrderUnauthorizedError(body);
          } catch (e) {
            if (e instanceof DeleteOrderUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new DeleteOrderNotFoundError(body);
          } catch (e) {
            if (e instanceof DeleteOrderNotFoundError) throw e;
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
            throw new CancelOrderBadRequestError(body);
          } catch (e) {
            if (e instanceof CancelOrderBadRequestError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 401: {
          try {
            const body = await response.json() as Error;
            throw new CancelOrderUnauthorizedError(body);
          } catch (e) {
            if (e instanceof CancelOrderUnauthorizedError) throw e;
            throw new UnexpectedError(response.status, await response.text());
          }
        }
        case 404: {
          try {
            const body = await response.json() as Error;
            throw new CancelOrderNotFoundError(body);
          } catch (e) {
            if (e instanceof CancelOrderNotFoundError) throw e;
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