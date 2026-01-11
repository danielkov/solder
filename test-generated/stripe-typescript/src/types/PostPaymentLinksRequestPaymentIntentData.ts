import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * payment_intent_data_params
 *
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export interface PostPaymentLinksRequestPaymentIntentData {
  captureMethod?: string;
  description?: string;
  metadata?: PostAccountsRequestMetadataObject;
  setupFutureUsage?: string;
  statementDescriptor?: string;
  statementDescriptorSuffix?: string;
  transferGroup?: string;
}

export const PostPaymentLinksRequestPaymentIntentDataSchema: TypedSchema<PostPaymentLinksRequestPaymentIntentData> = typed<PostPaymentLinksRequestPaymentIntentData>(object({
  captureMethod: optional(string()),
  description: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  setupFutureUsage: optional(string()),
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  transferGroup: optional(string()),
}));