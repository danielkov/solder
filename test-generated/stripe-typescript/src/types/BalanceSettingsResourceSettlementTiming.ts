import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * BalanceSettingsResourceSettlementTiming
 *
 * 
 */
export interface BalanceSettingsResourceSettlementTiming {
  /**
   * The number of days charge funds are held before becoming available.
   */
  delayDays: number;
  /**
   * The number of days charge funds are held before becoming available. If present, overrides the default, or minimum available, for the account.
   */
  delayDaysOverride?: number;
}

export const BalanceSettingsResourceSettlementTimingSchema: TypedSchema<BalanceSettingsResourceSettlementTiming> = typed<BalanceSettingsResourceSettlementTiming>(object({
  delayDays: number(),
  delayDaysOverride: optional(number()),
}));