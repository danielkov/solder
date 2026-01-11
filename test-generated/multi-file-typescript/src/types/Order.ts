import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { OrderItem } from './OrderItem';
import { OrderItemSchema } from './OrderItem';
/**
 * A customer order
 */
export interface Order {
  /**
   * A physical address
   */
  billingAddress?: Address;
  /**
   * Timestamp when the order was completed
   */
  completedAt?: string;
  /**
   * Timestamp when the order was created
   */
  createdAt?: string;
  currency?: string;
  /**
   * Unique identifier for the order
   */
  id: string;
  /**
   * List of items in the order
   */
  items: Array<OrderItem>;
  /**
   * Additional notes or instructions
   */
  notes?: string;
  /**
   * Human-readable order number
   */
  orderNumber?: string;
  /**
   * Payment method used
   */
  paymentMethod?: string;
  /**
   * Payment status
   */
  paymentStatus?: string;
  /**
   * A physical address
   */
  shippingAddress?: Address;
  /**
   * Shipping cost
   */
  shippingCost?: number;
  /**
   * Current status of the order
   */
  status: string;
  /**
   * Subtotal before tax and shipping
   */
  subtotal?: number;
  /**
   * Tax amount
   */
  tax?: number;
  /**
   * Total order amount including tax and shipping
   */
  totalAmount: number;
  /**
   * Shipping tracking number
   */
  trackingNumber?: string;
  /**
   * Timestamp when the order was last updated
   */
  updatedAt?: string;
  /**
   * ID of the user who placed the order
   */
  userId: string;
}

export const OrderSchema: TypedSchema<Order> = typed<Order>(object({
  get billingAddress() { return optional(AddressSchema) },
  completedAt: optional(string()),
  createdAt: optional(string()),
  currency: optional(string()),
  id: string(),
  items: array(OrderItemSchema),
  notes: optional(string()),
  orderNumber: optional(string()),
  paymentMethod: optional(string()),
  paymentStatus: optional(string()),
  get shippingAddress() { return optional(AddressSchema) },
  shippingCost: optional(number()),
  status: string(),
  subtotal: optional(number()),
  tax: optional(number()),
  totalAmount: number(),
  trackingNumber: optional(string()),
  updatedAt: optional(string()),
  userId: string(),
}));