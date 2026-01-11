import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BankConnectionsResourceOwnershipRefresh
 *
 * 
 */
export interface BankConnectionsResourceOwnershipRefresh {
  /**
   * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
   */
  lastAttemptedAt: number;
  /**
   * Time at which the next ownership refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
   */
  nextRefreshAvailableAt?: number;
  /**
   * The status of the last refresh attempt.
   */
  status: string;
}

export const BankConnectionsResourceOwnershipRefreshSchema: TypedSchema<BankConnectionsResourceOwnershipRefresh> = typed<BankConnectionsResourceOwnershipRefresh>(object({
  lastAttemptedAt: number(),
  nextRefreshAvailableAt: optional(number()),
  status: string(),
}));