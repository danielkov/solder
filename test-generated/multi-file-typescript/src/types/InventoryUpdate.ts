import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Update product inventory
 */
export interface InventoryUpdate {
  /**
   * How to update the inventory (set absolute value, add, or subtract)
   */
  operation?: string;
  /**
   * New inventory quantity
   */
  quantity: number;
}

export const InventoryUpdateSchema: TypedSchema<InventoryUpdate> = typed<InventoryUpdate>(object({
  operation: optional(string()),
  quantity: number(),
}));