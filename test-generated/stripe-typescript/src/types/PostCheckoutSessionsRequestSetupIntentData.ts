import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * setup_intent_data_param
 *
 * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
 */
export interface PostCheckoutSessionsRequestSetupIntentData {
  description?: string;
  metadata?: PostAccountsRequestMetadataObject;
  onBehalfOf?: string;
}

export const PostCheckoutSessionsRequestSetupIntentDataSchema: TypedSchema<PostCheckoutSessionsRequestSetupIntentData> = typed<PostCheckoutSessionsRequestSetupIntentData>(object({
  description: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  onBehalfOf: optional(string()),
}));