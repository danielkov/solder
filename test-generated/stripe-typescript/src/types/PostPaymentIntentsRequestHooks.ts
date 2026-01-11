import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestInputs } from './PostPaymentIntentsRequestInputs';
import { PostPaymentIntentsRequestInputsSchema } from './PostPaymentIntentsRequestInputs';
/**
 * async_workflows_param
 *
 * Automations to be run during the PaymentIntent lifecycle
 */
export interface PostPaymentIntentsRequestHooks {
  /**
   * async_workflows_inputs_param
   */
  inputs?: PostPaymentIntentsRequestInputs;
}

export const PostPaymentIntentsRequestHooksSchema: TypedSchema<PostPaymentIntentsRequestHooks> = typed<PostPaymentIntentsRequestHooks>(object({
  get inputs() { return optional(PostPaymentIntentsRequestInputsSchema) },
}));