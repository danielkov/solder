import type { NewOrder, Order } from '../types';
import { UnexpectedError } from '../types/errors';


// Operation-specific error classes

export class OrdersService {
  constructor(private baseUrl: string, ) {}

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
    
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params.body),
    });

    if (!response.ok) {
      throw new UnexpectedError(response.status, await response.text());
    }

    return response.json();
  }

}