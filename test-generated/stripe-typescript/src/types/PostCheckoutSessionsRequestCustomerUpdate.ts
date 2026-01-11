import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * customer_update_params
 *
 * Controls what fields on Customer can be updated by the Checkout Session. Can only be provided when `customer` is provided.
 */
export interface PostCheckoutSessionsRequestCustomerUpdate {
  address?: string;
  name?: string;
  shipping?: string;
}

export const PostCheckoutSessionsRequestCustomerUpdateSchema: TypedSchema<PostCheckoutSessionsRequestCustomerUpdate> = typed<PostCheckoutSessionsRequestCustomerUpdate>(object({
  address: optional(string()),
  name: optional(string()),
  shipping: optional(string()),
}));