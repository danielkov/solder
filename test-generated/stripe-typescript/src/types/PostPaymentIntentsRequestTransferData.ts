import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * transfer_data_creation_params
 *
 * The parameters that you can use to automatically create a Transfer.
Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
 */
export interface PostPaymentIntentsRequestTransferData {
  amount?: number;
  destination: string;
}

export const PostPaymentIntentsRequestTransferDataSchema: TypedSchema<PostPaymentIntentsRequestTransferData> = typed<PostPaymentIntentsRequestTransferData>(object({
  amount: optional(number()),
  destination: string(),
}));