import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * An item in an order
 */
export interface OrderItem {
  /**
   * ID of the product
   */
  productId: string;
  /**
   * Name of the product at time of order
   */
  productName?: string;
  /**
   * Quantity ordered
   */
  quantity: number;
  /**
   * Total price for this item (quantity × unitPrice)
   */
  totalPrice?: number;
  /**
   * Price per unit at time of order
   */
  unitPrice: number;
}

export const OrderItemSchema: TypedSchema<OrderItem> = typed<OrderItem>(object({
  productId: string(),
  productName: optional(string()),
  quantity: number(),
  totalPrice: optional(number()),
  unitPrice: number(),
}));