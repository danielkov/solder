import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalResourceScheduleUpdateAtPeriodEndCondition
 *
 * 
 */
export interface PortalResourceScheduleUpdateAtPeriodEndCondition {
  /**
   * The type of condition.
   */
  type: string;
}

export const PortalResourceScheduleUpdateAtPeriodEndConditionSchema: TypedSchema<PortalResourceScheduleUpdateAtPeriodEndCondition> = typed<PortalResourceScheduleUpdateAtPeriodEndCondition>(object({
  type: string(),
}));