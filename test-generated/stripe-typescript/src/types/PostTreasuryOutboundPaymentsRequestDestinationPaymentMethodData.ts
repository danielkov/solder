import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostPaymentIntentsRequestUsBankAccount } from './PostPaymentIntentsRequestUsBankAccount';
import { PostPaymentIntentsRequestUsBankAccountSchema } from './PostPaymentIntentsRequestUsBankAccount';
import type { PostTreasuryOutboundPaymentsRequestBillingDetails } from './PostTreasuryOutboundPaymentsRequestBillingDetails';
import { PostTreasuryOutboundPaymentsRequestBillingDetailsSchema } from './PostTreasuryOutboundPaymentsRequestBillingDetails';
/**
 * payment_method_data
 *
 * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
 */
export interface PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData {
  /**
   * billing_details_inner_params
   */
  billingDetails?: PostTreasuryOutboundPaymentsRequestBillingDetails;
  financialAccount?: string;
  metadata?: PostAccountsRequestMetadataObject;
  type: string;
  /**
   * payment_method_param
   */
  usBankAccount?: PostPaymentIntentsRequestUsBankAccount;
}

export const PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodDataSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData> = typed<PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData>(object({
  get billingDetails() { return optional(PostTreasuryOutboundPaymentsRequestBillingDetailsSchema) },
  financialAccount: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  type: string(),
  get usBankAccount() { return optional(PostPaymentIntentsRequestUsBankAccountSchema) },
}));