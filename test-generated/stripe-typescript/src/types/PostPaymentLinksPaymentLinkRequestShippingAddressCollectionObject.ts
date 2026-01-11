import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * shipping_address_collection_params
 */
export interface PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject {
  allowedCountries: Array<string>;
}

export const PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObjectSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject> = typed<PostPaymentLinksPaymentLinkRequestShippingAddressCollectionObject>(object({
  allowedCountries: array(string()),
}));