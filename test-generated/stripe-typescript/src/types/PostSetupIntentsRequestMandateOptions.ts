import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * setup_intent_payment_method_options_mandate_options_param
 */
export interface PostSetupIntentsRequestMandateOptions {
  customMandateUrl?: PostAccountsRequestSupportUrl;
  defaultFor?: Array<string>;
  intervalDescription?: string;
  paymentSchedule?: string;
  transactionType?: string;
}

export const PostSetupIntentsRequestMandateOptionsSchema: TypedSchema<PostSetupIntentsRequestMandateOptions> = typed<PostSetupIntentsRequestMandateOptions>(object({
  get customMandateUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
  defaultFor: optional(array(string())),
  intervalDescription: optional(string()),
  paymentSchedule: optional(string()),
  transactionType: optional(string()),
}));