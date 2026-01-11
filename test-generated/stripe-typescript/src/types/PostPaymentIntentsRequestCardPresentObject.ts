import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestCardPresentObjectRouting } from './PostPaymentIntentsRequestCardPresentObjectRouting';
import { PostPaymentIntentsRequestCardPresentObjectRoutingSchema } from './PostPaymentIntentsRequestCardPresentObjectRouting';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestCardPresentObject {
  captureMethod?: string;
  requestExtendedAuthorization?: boolean;
  requestIncrementalAuthorizationSupport?: boolean;
  /**
   * routing_payment_method_options_param
   */
  routing?: PostPaymentIntentsRequestCardPresentObjectRouting;
}

export const PostPaymentIntentsRequestCardPresentObjectSchema: TypedSchema<PostPaymentIntentsRequestCardPresentObject> = typed<PostPaymentIntentsRequestCardPresentObject>(object({
  captureMethod: optional(string()),
  requestExtendedAuthorization: optional(boolean()),
  requestIncrementalAuthorizationSupport: optional(boolean()),
  get routing() { return optional(PostPaymentIntentsRequestCardPresentObjectRoutingSchema) },
}));