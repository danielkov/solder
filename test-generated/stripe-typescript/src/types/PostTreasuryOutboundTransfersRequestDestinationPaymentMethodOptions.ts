import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTreasuryOutboundPaymentsRequestUsBankAccount } from './PostTreasuryOutboundPaymentsRequestUsBankAccount';
import { PostTreasuryOutboundPaymentsRequestUsBankAccountSchema } from './PostTreasuryOutboundPaymentsRequestUsBankAccount';
/**
 * payment_method_options
 *
 * Hash describing payment method configuration details.
 */
export interface PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions {
  usBankAccount?: PostTreasuryOutboundPaymentsRequestUsBankAccount;
}

export const PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptionsSchema: TypedSchema<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions> = typed<PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions>(object({
  get usBankAccount() { return optional(PostTreasuryOutboundPaymentsRequestUsBankAccountSchema) },
}));