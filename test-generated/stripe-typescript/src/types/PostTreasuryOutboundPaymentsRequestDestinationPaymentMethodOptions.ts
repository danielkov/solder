import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryOutboundPaymentsRequestUsBankAccount } from './PostTreasuryOutboundPaymentsRequestUsBankAccount';
import { PostTreasuryOutboundPaymentsRequestUsBankAccountSchema } from './PostTreasuryOutboundPaymentsRequestUsBankAccount';
/**
 * payment_method_options
 *
 * Payment method-specific configuration for this OutboundPayment.
 */
export interface PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions {
  usBankAccount?: PostTreasuryOutboundPaymentsRequestUsBankAccount;
}

export const PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptionsSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions> = typed<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions>(object({
  get usBankAccount() { return optional(PostTreasuryOutboundPaymentsRequestUsBankAccountSchema) },
}));