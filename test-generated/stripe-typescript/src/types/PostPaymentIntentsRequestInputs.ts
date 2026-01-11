import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestTax } from './DefaultPostPaymentIntentsRequestTax';
import { DefaultPostPaymentIntentsRequestTaxSchema } from './DefaultPostPaymentIntentsRequestTax';
/**
 * async_workflows_inputs_param
 */
export interface PostPaymentIntentsRequestInputs {
  /**
   * async_workflows_inputs_tax_param
   */
  tax?: DefaultPostPaymentIntentsRequestTax;
}

export const PostPaymentIntentsRequestInputsSchema: TypedSchema<PostPaymentIntentsRequestInputs> = typed<PostPaymentIntentsRequestInputs>(object({
  get tax() { return optional(DefaultPostPaymentIntentsRequestTaxSchema) },
}));