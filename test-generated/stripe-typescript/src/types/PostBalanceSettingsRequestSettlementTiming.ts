import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
/**
 * settlement_timing
 */
export interface PostBalanceSettingsRequestSettlementTiming {
  delayDaysOverride?: PostBalanceSettingsRequestDelayDaysOverride;
}

export const PostBalanceSettingsRequestSettlementTimingSchema: TypedSchema<PostBalanceSettingsRequestSettlementTiming> = typed<PostBalanceSettingsRequestSettlementTiming>(object({
  get delayDaysOverride() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
}));