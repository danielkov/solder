import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OrderStatus } from './OrderStatus';
import { OrderStatusSchema } from './OrderStatus';
export interface Order {
  completedDate?: string;
  id: string;
  orderDate: string;
  ownerId: string;
  petId: string;
  quantity?: number;
  /**
   * Order status
   */
  status: OrderStatus;
}

export const OrderSchema: TypedSchema<Order> = typed<Order>(object({
  completedDate: optional(string()),
  id: string(),
  orderDate: string(),
  ownerId: string(),
  petId: string(),
  quantity: optional(number()),
  status: OrderStatusSchema,
}));