import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * shipping_address_collection_params
 *
 * Configuration for collecting the customer's shipping address.
 */
export interface PostPaymentLinksRequestShippingAddressCollection {
  allowedCountries: Array<string>;
}

export const PostPaymentLinksRequestShippingAddressCollectionSchema: TypedSchema<PostPaymentLinksRequestShippingAddressCollection> = typed<PostPaymentLinksRequestShippingAddressCollection>(object({
  allowedCountries: array(string()),
}));