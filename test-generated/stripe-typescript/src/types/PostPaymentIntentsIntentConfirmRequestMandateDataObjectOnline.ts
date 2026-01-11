import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * online_param
 */
export interface PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline {
  ipAddress?: string;
  userAgent?: string;
}

export const PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnlineSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline> = typed<PostPaymentIntentsIntentConfirmRequestMandateDataObjectOnline>(object({
  ipAddress: optional(string()),
  userAgent: optional(string()),
}));