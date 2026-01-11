import { TypedSchema, array, number, object, typed } from '@speakeasy-api/tonic';

import type { Order } from './Order';
import { OrderSchema } from './Order';
/**
 * Paginated list of orders
 */
export interface OrderList {
  data: Array<Order>;
  page: number;
  pageSize: number;
  total: number;
}

export const OrderListSchema: TypedSchema<OrderList> = typed<OrderList>(object({
  data: array(OrderSchema),
  page: number(),
  pageSize: number(),
  total: number(),
}));