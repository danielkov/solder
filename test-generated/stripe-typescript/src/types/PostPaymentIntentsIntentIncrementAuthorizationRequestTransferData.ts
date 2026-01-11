import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_update_params
 *
 * The parameters used to automatically create a transfer after the payment is captured.
Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export interface PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData {
  amount?: number;
}

export const PostPaymentIntentsIntentIncrementAuthorizationRequestTransferDataSchema: TypedSchema<PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData> = typed<PostPaymentIntentsIntentIncrementAuthorizationRequestTransferData>(object({
  amount: optional(number()),
}));