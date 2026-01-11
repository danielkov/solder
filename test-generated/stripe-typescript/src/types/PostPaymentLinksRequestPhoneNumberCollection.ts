import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * phone_number_collection_params
 *
 * Controls phone number collection settings during checkout.

We recommend that you review your privacy policy and check with your legal contacts.
 */
export interface PostPaymentLinksRequestPhoneNumberCollection {
  enabled: boolean;
}

export const PostPaymentLinksRequestPhoneNumberCollectionSchema: TypedSchema<PostPaymentLinksRequestPhoneNumberCollection> = typed<PostPaymentLinksRequestPhoneNumberCollection>(object({
  enabled: boolean(),
}));