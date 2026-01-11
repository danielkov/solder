import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * tipping_config
 */
export interface PostTerminalReadersReaderCollectPaymentMethodRequestTipping {
  amountEligible?: number;
}

export const PostTerminalReadersReaderCollectPaymentMethodRequestTippingSchema: TypedSchema<PostTerminalReadersReaderCollectPaymentMethodRequestTipping> = typed<PostTerminalReadersReaderCollectPaymentMethodRequestTipping>(object({
  amountEligible: optional(number()),
}));