import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * mandate_options_param
 */
export interface PostCheckoutSessionsRequestMandateOptions {
  customMandateUrl?: PostAccountsRequestSupportUrl;
  defaultFor?: Array<string>;
  intervalDescription?: string;
  paymentSchedule?: string;
  transactionType?: string;
}

export const PostCheckoutSessionsRequestMandateOptionsSchema: TypedSchema<PostCheckoutSessionsRequestMandateOptions> = typed<PostCheckoutSessionsRequestMandateOptions>(object({
  get customMandateUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
  defaultFor: optional(array(string())),
  intervalDescription: optional(string()),
  paymentSchedule: optional(string()),
  transactionType: optional(string()),
}));