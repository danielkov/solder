import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_data
 *
 * Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.
 */
export interface PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData {
  financialAccount?: string;
  type: string;
}

export const PostTreasuryOutboundTransfersRequestDestinationPaymentMethodDataSchema: TypedSchema<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData> = typed<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData>(object({
  financialAccount: optional(string()),
  type: string(),
}));