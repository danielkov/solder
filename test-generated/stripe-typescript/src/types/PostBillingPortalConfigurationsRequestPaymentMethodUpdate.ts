import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * payment_method_update_param
 */
export interface PostBillingPortalConfigurationsRequestPaymentMethodUpdate {
  enabled: boolean;
  paymentMethodConfiguration?: PostAccountsRequestPaymentsPricing;
}

export const PostBillingPortalConfigurationsRequestPaymentMethodUpdateSchema: TypedSchema<PostBillingPortalConfigurationsRequestPaymentMethodUpdate> = typed<PostBillingPortalConfigurationsRequestPaymentMethodUpdate>(object({
  enabled: boolean(),
  get paymentMethodConfiguration() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));