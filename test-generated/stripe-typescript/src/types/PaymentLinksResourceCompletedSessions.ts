import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCompletedSessions
 *
 * 
 */
export interface PaymentLinksResourceCompletedSessions {
  /**
   * The current number of checkout sessions that have been completed on the payment link which count towards the `completed_sessions` restriction to be met.
   */
  count: number;
  /**
   * The maximum number of checkout sessions that can be completed for the `completed_sessions` restriction to be met.
   */
  limit: number;
}

export const PaymentLinksResourceCompletedSessionsSchema: TypedSchema<PaymentLinksResourceCompletedSessions> = typed<PaymentLinksResourceCompletedSessions>(object({
  count: number(),
  limit: number(),
}));