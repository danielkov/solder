import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_capture_params
 *
 * The parameters that you can use to automatically create a transfer after the payment
is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export interface PostPaymentIntentsIntentCaptureRequestTransferData {
  amount?: number;
}

export const PostPaymentIntentsIntentCaptureRequestTransferDataSchema: TypedSchema<PostPaymentIntentsIntentCaptureRequestTransferData> = typed<PostPaymentIntentsIntentCaptureRequestTransferData>(object({
  amount: optional(number()),
}));