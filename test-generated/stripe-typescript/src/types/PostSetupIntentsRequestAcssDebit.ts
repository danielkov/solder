import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostSetupIntentsRequestMandateOptions } from './PostSetupIntentsRequestMandateOptions';
import { PostSetupIntentsRequestMandateOptionsSchema } from './PostSetupIntentsRequestMandateOptions';
/**
 * setup_intent_payment_method_options_param
 */
export interface PostSetupIntentsRequestAcssDebit {
  currency?: string;
  /**
   * setup_intent_payment_method_options_mandate_options_param
   */
  mandateOptions?: PostSetupIntentsRequestMandateOptions;
  verificationMethod?: string;
}

export const PostSetupIntentsRequestAcssDebitSchema: TypedSchema<PostSetupIntentsRequestAcssDebit> = typed<PostSetupIntentsRequestAcssDebit>(object({
  currency: optional(string()),
  get mandateOptions() { return optional(PostSetupIntentsRequestMandateOptionsSchema) },
  verificationMethod: optional(string()),
}));