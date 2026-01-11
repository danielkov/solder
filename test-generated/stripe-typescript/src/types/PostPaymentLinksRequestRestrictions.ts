import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostPaymentLinksRequestCompletedSessions } from './PostPaymentLinksRequestCompletedSessions';
import { PostPaymentLinksRequestCompletedSessionsSchema } from './PostPaymentLinksRequestCompletedSessions';
/**
 * restrictions_params
 *
 * Settings that restrict the usage of a payment link.
 */
export interface PostPaymentLinksRequestRestrictions {
  /**
   * completed_sessions_params
   */
  completedSessions: PostPaymentLinksRequestCompletedSessions;
}

export const PostPaymentLinksRequestRestrictionsSchema: TypedSchema<PostPaymentLinksRequestRestrictions> = typed<PostPaymentLinksRequestRestrictions>(object({
  completedSessions: PostPaymentLinksRequestCompletedSessionsSchema,
}));