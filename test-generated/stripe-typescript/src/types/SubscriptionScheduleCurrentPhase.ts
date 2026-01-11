import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionScheduleCurrentPhase
 *
 * 
 */
export interface SubscriptionScheduleCurrentPhase {
  /**
   * The end of this phase of the subscription schedule.
   */
  endDate: number;
  /**
   * The start of this phase of the subscription schedule.
   */
  startDate: number;
}

export const SubscriptionScheduleCurrentPhaseSchema: TypedSchema<SubscriptionScheduleCurrentPhase> = typed<SubscriptionScheduleCurrentPhase>(object({
  endDate: number(),
  startDate: number(),
}));