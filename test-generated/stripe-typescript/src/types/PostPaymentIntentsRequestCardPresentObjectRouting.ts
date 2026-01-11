import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * routing_payment_method_options_param
 */
export interface PostPaymentIntentsRequestCardPresentObjectRouting {
  requestedPriority?: string;
}

export const PostPaymentIntentsRequestCardPresentObjectRoutingSchema: TypedSchema<PostPaymentIntentsRequestCardPresentObjectRouting> = typed<PostPaymentIntentsRequestCardPresentObjectRouting>(object({
  requestedPriority: optional(string()),
}));