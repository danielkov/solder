import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { PortalResourceScheduleUpdateAtPeriodEndCondition } from './PortalResourceScheduleUpdateAtPeriodEndCondition';
import { PortalResourceScheduleUpdateAtPeriodEndConditionSchema } from './PortalResourceScheduleUpdateAtPeriodEndCondition';
/**
 * PortalResourceScheduleUpdateAtPeriodEnd
 *
 * 
 */
export interface PortalResourceScheduleUpdateAtPeriodEnd {
  /**
   * List of conditions. When any condition is true, an update will be scheduled at the end of the current period.
   */
  conditions: Array<PortalResourceScheduleUpdateAtPeriodEndCondition>;
}

export const PortalResourceScheduleUpdateAtPeriodEndSchema: TypedSchema<PortalResourceScheduleUpdateAtPeriodEnd> = typed<PortalResourceScheduleUpdateAtPeriodEnd>(object({
  conditions: array(PortalResourceScheduleUpdateAtPeriodEndConditionSchema),
}));