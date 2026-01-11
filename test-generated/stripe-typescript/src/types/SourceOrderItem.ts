import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceOrderItem
 *
 * 
 */
export interface SourceOrderItem {
  /**
   * The amount (price) for this order item.
   */
  amount?: number;
  /**
   * This currency of this order item. Required when `amount` is present.
   */
  currency?: string;
  /**
   * Human-readable description for this order item.
   */
  description?: string;
  /**
   * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
   */
  parent?: string;
  /**
   * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
   */
  quantity?: number;
  /**
   * The type of this order item. Must be `sku`, `tax`, or `shipping`.
   */
  type?: string;
}

export const SourceOrderItemSchema: TypedSchema<SourceOrderItem> = typed<SourceOrderItem>(object({
  amount: optional(number()),
  currency: optional(string()),
  description: optional(string()),
  parent: optional(string()),
  quantity: optional(number()),
  type: optional(string()),
}));