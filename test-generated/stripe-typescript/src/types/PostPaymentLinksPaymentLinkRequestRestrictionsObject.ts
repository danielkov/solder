import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostPaymentLinksRequestCompletedSessions } from './PostPaymentLinksRequestCompletedSessions';
import { PostPaymentLinksRequestCompletedSessionsSchema } from './PostPaymentLinksRequestCompletedSessions';
/**
 * restrictions_params
 */
export interface PostPaymentLinksPaymentLinkRequestRestrictionsObject {
  /**
   * completed_sessions_params
   */
  completedSessions: PostPaymentLinksRequestCompletedSessions;
}

export const PostPaymentLinksPaymentLinkRequestRestrictionsObjectSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestRestrictionsObject> = typed<PostPaymentLinksPaymentLinkRequestRestrictionsObject>(object({
  completedSessions: PostPaymentLinksRequestCompletedSessionsSchema,
}));