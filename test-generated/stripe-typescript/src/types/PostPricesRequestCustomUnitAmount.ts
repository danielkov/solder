import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * custom_unit_amount
 *
 * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
 */
export interface PostPricesRequestCustomUnitAmount {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
  preset?: number;
}

export const PostPricesRequestCustomUnitAmountSchema: TypedSchema<PostPricesRequestCustomUnitAmount> = typed<PostPricesRequestCustomUnitAmount>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
  preset: optional(number()),
}));