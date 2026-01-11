import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OfflineAcceptance } from './OfflineAcceptance';
import { OfflineAcceptanceSchema } from './OfflineAcceptance';
import type { OnlineAcceptance } from './OnlineAcceptance';
import { OnlineAcceptanceSchema } from './OnlineAcceptance';
/**
 * customer_acceptance
 *
 * 
 */
export interface CustomerAcceptance {
  /**
   * The time that the customer accepts the mandate.
   */
  acceptedAt?: number;
  /**
   * offline_acceptance
   *
   * 
   */
  offline?: OfflineAcceptance;
  /**
   * online_acceptance
   *
   * 
   */
  online?: OnlineAcceptance;
  /**
   * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
   */
  type: string;
}

export const CustomerAcceptanceSchema: TypedSchema<CustomerAcceptance> = typed<CustomerAcceptance>(object({
  acceptedAt: optional(number()),
  get offline() { return optional(OfflineAcceptanceSchema) },
  get online() { return optional(OnlineAcceptanceSchema) },
  type: string(),
}));