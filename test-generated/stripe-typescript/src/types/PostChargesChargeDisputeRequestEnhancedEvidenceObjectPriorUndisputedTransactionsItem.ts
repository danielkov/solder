import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddressSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress';
/**
 * visa_compelling_evidence3_prior_undisputed_transaction
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem {
  charge: string;
  customerAccountId?: PostAccountsRequestPaymentsPricing;
  customerDeviceFingerprint?: PostAccountsRequestPaymentsPricing;
  customerDeviceId?: PostAccountsRequestPaymentsPricing;
  customerEmailAddress?: PostAccountsRequestPaymentsPricing;
  customerPurchaseIp?: PostAccountsRequestPaymentsPricing;
  productDescription?: PostAccountsRequestPaymentsPricing;
  /**
   * shipping_address
   */
  shippingAddress?: PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddress;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItemSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem>(object({
  charge: string(),
  get customerAccountId() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerDeviceFingerprint() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerDeviceId() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerEmailAddress() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get customerPurchaseIp() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get productDescription() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get shippingAddress() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceObjectShippingAddressSchema) },
}));