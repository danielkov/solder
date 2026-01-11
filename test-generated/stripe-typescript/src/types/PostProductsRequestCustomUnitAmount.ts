import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * custom_unit_amount
 */
export interface PostProductsRequestCustomUnitAmount {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
  preset?: number;
}

export const PostProductsRequestCustomUnitAmountSchema: TypedSchema<PostProductsRequestCustomUnitAmount> = typed<PostProductsRequestCustomUnitAmount>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
  preset: optional(number()),
}));