import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddressSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress';
/**
 * visa_compelling_evidence3_disputed_transaction
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction {
  customerAccountId?: PostAccountsRequestPaymentsPricing;
  customerDeviceFingerprint?: PostAccountsRequestPaymentsPricing;
  customerDeviceId?: PostAccountsRequestPaymentsPricing;
  customerEmailAddress?: PostAccountsRequestPaymentsPricing;
  customerPurchaseIp?: PostAccountsRequestPaymentsPricing;
  merchandiseOrServices?: string;
  productDescription?: PostAccountsRequestPaymentsPricing;
  /**
   * shipping_address
   */
  shippingAddress?: PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransactionSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction>(object({
  get customerAccountId() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerDeviceFingerprint() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerDeviceId() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerEmailAddress() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerPurchaseIp() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  merchandiseOrServices: optional(string()),
  get productDescription() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get shippingAddress() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddressSchema) },
}));