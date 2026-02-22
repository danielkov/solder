import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * completed_sessions_params
 */
export interface PostPaymentLinksRequestCompletedSessions {
  limit: number;
}

export const PostPaymentLinksRequestCompletedSessionsSchema: TypedSchema<PostPaymentLinksRequestCompletedSessions> = typed<PostPaymentLinksRequestCompletedSessions>(object({ limit: number() }));
