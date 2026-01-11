import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceCompletedSessions } from './PaymentLinksResourceCompletedSessions';
import { PaymentLinksResourceCompletedSessionsSchema } from './PaymentLinksResourceCompletedSessions';
/**
 * PaymentLinksResourceRestrictions
 *
 * 
 */
export interface PaymentLinksResourceRestrictions {
  /**
   * PaymentLinksResourceCompletedSessions
   *
   * 
   */
  completedSessions: PaymentLinksResourceCompletedSessions;
}

export const PaymentLinksResourceRestrictionsSchema: TypedSchema<PaymentLinksResourceRestrictions> = typed<PaymentLinksResourceRestrictions>(object({
  completedSessions: PaymentLinksResourceCompletedSessionsSchema,
}));