import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * CustomUnitAmount
 *
 * 
 */
export interface CustomUnitAmount {
  /**
   * The maximum unit amount the customer can specify for this item.
   */
  maximum?: number;
  /**
   * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
   */
  minimum?: number;
  /**
   * The starting unit amount which can be updated by the customer.
   */
  preset?: number;
}

export const CustomUnitAmountSchema: TypedSchema<CustomUnitAmount> = typed<CustomUnitAmount>(object({
  maximum: optional(number()),
  minimum: optional(number()),
  preset: optional(number()),
}));