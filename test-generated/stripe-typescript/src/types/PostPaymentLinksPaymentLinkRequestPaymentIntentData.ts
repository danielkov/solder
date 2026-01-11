import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import type { PostPaymentLinksPaymentLinkRequestDescription } from './PostPaymentLinksPaymentLinkRequestDescription';
import { PostPaymentLinksPaymentLinkRequestDescriptionSchema } from './PostPaymentLinksPaymentLinkRequestDescription';
/**
 * payment_intent_data_update_params
 *
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export interface PostPaymentLinksPaymentLinkRequestPaymentIntentData {
  description?: PostPaymentLinksPaymentLinkRequestDescription;
  metadata?: PostAccountsRequestMetadata;
  statementDescriptor?: PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana;
  statementDescriptorSuffix?: PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana;
  transferGroup?: PostAccountsRequestPaymentsPricing;
}

export const PostPaymentLinksPaymentLinkRequestPaymentIntentDataSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestPaymentIntentData> = typed<PostPaymentLinksPaymentLinkRequestPaymentIntentData>(object({
  get description() { return optional(PostPaymentLinksPaymentLinkRequestDescriptionSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  get statementDescriptor() { return optional(PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema) },
  get statementDescriptorSuffix() { return optional(PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema) },
  get transferGroup() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));