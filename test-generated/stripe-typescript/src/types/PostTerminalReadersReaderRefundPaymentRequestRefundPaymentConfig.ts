import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * refund_payment_config
 *
 * Configuration overrides for this refund, such as customer cancellation settings.
 */
export interface PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig {
  enableCustomerCancellation?: boolean;
}

export const PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfigSchema: TypedSchema<PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig> = typed<PostTerminalReadersReaderRefundPaymentRequestRefundPaymentConfig>(object({
  enableCustomerCancellation: optional(boolean()),
}));