import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * online_param
 */
export interface PostPaymentIntentsRequestMandateDataObjectOnline {
  ipAddress: string;
  userAgent: string;
}

export const PostPaymentIntentsRequestMandateDataObjectOnlineSchema: TypedSchema<PostPaymentIntentsRequestMandateDataObjectOnline> = typed<PostPaymentIntentsRequestMandateDataObjectOnline>(object({
  ipAddress: string(),
  userAgent: string(),
}));