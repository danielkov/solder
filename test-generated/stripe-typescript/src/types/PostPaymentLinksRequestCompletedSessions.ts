import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * completed_sessions_params
 */
export interface PostPaymentLinksRequestCompletedSessions {
  limit: number;
}

export const PostPaymentLinksRequestCompletedSessionsSchema: TypedSchema<PostPaymentLinksRequestCompletedSessions> = typed<PostPaymentLinksRequestCompletedSessions>(object({
  limit: number(),
}));