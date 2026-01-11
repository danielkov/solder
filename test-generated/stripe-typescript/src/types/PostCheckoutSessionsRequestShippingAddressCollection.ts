import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * shipping_address_collection_params
 *
 * When set, provides configuration for Checkout to collect a shipping address from a customer.
 */
export interface PostCheckoutSessionsRequestShippingAddressCollection {
  allowedCountries: Array<string>;
}

export const PostCheckoutSessionsRequestShippingAddressCollectionSchema: TypedSchema<PostCheckoutSessionsRequestShippingAddressCollection> = typed<PostCheckoutSessionsRequestShippingAddressCollection>(object({
  allowedCountries: array(string()),
}));