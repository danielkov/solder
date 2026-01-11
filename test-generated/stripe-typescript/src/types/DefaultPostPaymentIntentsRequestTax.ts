import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * async_workflows_inputs_tax_param
 */
export interface DefaultPostPaymentIntentsRequestTax {
  calculation: PostAccountsRequestPaymentsPricing;
}

export const DefaultPostPaymentIntentsRequestTaxSchema: TypedSchema<DefaultPostPaymentIntentsRequestTax> = typed<DefaultPostPaymentIntentsRequestTax>(object({
  calculation: PostAccountsRequestPaymentsPricingSchema,
}));