import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_update_params
 *
 * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export interface PostPaymentIntentsIntentRequestTransferData {
  amount?: number;
}

export const PostPaymentIntentsIntentRequestTransferDataSchema: TypedSchema<PostPaymentIntentsIntentRequestTransferData> = typed<PostPaymentIntentsIntentRequestTransferData>(object({
  amount: optional(number()),
}));