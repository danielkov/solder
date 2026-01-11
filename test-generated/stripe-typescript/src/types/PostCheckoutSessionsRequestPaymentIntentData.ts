import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestShipping } from './PostCheckoutSessionsRequestShipping';
import { PostCheckoutSessionsRequestShippingSchema } from './PostCheckoutSessionsRequestShipping';
import type { PostCheckoutSessionsRequestTransferData } from './PostCheckoutSessionsRequestTransferData';
import { PostCheckoutSessionsRequestTransferDataSchema } from './PostCheckoutSessionsRequestTransferData';
/**
 * payment_intent_data_params
 *
 * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
 */
export interface PostCheckoutSessionsRequestPaymentIntentData {
  applicationFeeAmount?: number;
  captureMethod?: string;
  description?: string;
  metadata?: PostAccountsRequestMetadataObject;
  onBehalfOf?: string;
  receiptEmail?: string;
  setupFutureUsage?: string;
  /**
   * shipping
   */
  shipping?: PostCheckoutSessionsRequestShipping;
  statementDescriptor?: string;
  statementDescriptorSuffix?: string;
  /**
   * transfer_data_params
   */
  transferData?: PostCheckoutSessionsRequestTransferData;
  transferGroup?: string;
}

export const PostCheckoutSessionsRequestPaymentIntentDataSchema: TypedSchema<PostCheckoutSessionsRequestPaymentIntentData> = typed<PostCheckoutSessionsRequestPaymentIntentData>(object({
  applicationFeeAmount: optional(number()),
  captureMethod: optional(string()),
  description: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  onBehalfOf: optional(string()),
  receiptEmail: optional(string()),
  setupFutureUsage: optional(string()),
  get shipping() { return optional(PostCheckoutSessionsRequestShippingSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostCheckoutSessionsRequestTransferDataSchema) },
  transferGroup: optional(string()),
}));