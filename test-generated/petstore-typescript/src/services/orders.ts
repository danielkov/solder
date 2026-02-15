import type { NewOrder, Order } from '../types';
import { UnexpectedError } from '../types/errors';
import type { SDKHooks, SDKRequestInit } from './client';

// Operation-specific error classes

export class OrdersService {
  constructor(private baseUrl: string, private hooks: SDKHooks) {}

  private async raise(error: globalThis.Error): Promise<never> {
    await this.hooks.onError?.(error);
    throw error;
  }

  /**
   * Place an order
   *
   * Creates a new order for pet adoption or purchase
   *
   * @param body 
   */
  async createOrder(params: {
    body: NewOrder;
  }): Promise<Order> {
    const path = '/orders';
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
      await this.raise(new UnexpectedError(response.status, await response.text()));
    }

    return response.json();
  }

}