import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * phone_number_collection_params
 *
 * Controls phone number collection settings for the session.

We recommend that you review your privacy policy and check with your legal contacts
before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
 */
export interface PostCheckoutSessionsRequestPhoneNumberCollection {
  enabled: boolean;
}

export const PostCheckoutSessionsRequestPhoneNumberCollectionSchema: TypedSchema<PostCheckoutSessionsRequestPhoneNumberCollection> = typed<PostCheckoutSessionsRequestPhoneNumberCollection>(object({
  enabled: boolean(),
}));