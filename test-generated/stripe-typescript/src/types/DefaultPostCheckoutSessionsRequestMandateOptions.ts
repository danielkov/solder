import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestReferencePrefix } from './PostCheckoutSessionsRequestReferencePrefix';
import { PostCheckoutSessionsRequestReferencePrefixSchema } from './PostCheckoutSessionsRequestReferencePrefix';
/**
 * payment_method_options_mandate_options_param
 */
export interface DefaultPostCheckoutSessionsRequestMandateOptions {
  referencePrefix?: PostCheckoutSessionsRequestReferencePrefix;
}

export const DefaultPostCheckoutSessionsRequestMandateOptionsSchema: TypedSchema<DefaultPostCheckoutSessionsRequestMandateOptions> = typed<DefaultPostCheckoutSessionsRequestMandateOptions>(object({
  get referencePrefix() { return optional(PostCheckoutSessionsRequestReferencePrefixSchema) },
}));