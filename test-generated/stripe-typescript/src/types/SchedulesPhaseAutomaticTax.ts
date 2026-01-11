import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * SchedulesPhaseAutomaticTax
 *
 * 
 */
export interface SchedulesPhaseAutomaticTax {
  /**
   * If Stripe disabled automatic tax, this enum describes why.
   */
  disabledReason?: string;
  /**
   * Whether Stripe automatically computes tax on invoices created during this phase.
   */
  enabled: boolean;
  /**
   * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
   */
  liability?: ConnectAccountReference;
}

export const SchedulesPhaseAutomaticTaxSchema: TypedSchema<SchedulesPhaseAutomaticTax> = typed<SchedulesPhaseAutomaticTax>(object({
  disabledReason: optional(string()),
  enabled: boolean(),
  get liability() { return optional(ConnectAccountReferenceSchema) },
}));