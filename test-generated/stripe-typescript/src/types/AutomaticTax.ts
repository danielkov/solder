import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * AutomaticTax
 *
 * 
 */
export interface AutomaticTax {
  /**
   * If Stripe disabled automatic tax, this enum describes why.
   */
  disabledReason?: string;
  /**
   * Whether Stripe automatically computes tax on this invoice. Note that incompatible invoice items (invoice items with manually specified [tax rates](https://stripe.com/docs/api/tax_rates), negative amounts, or `tax_behavior=unspecified`) cannot be added to automatic tax invoices.
   */
  enabled: boolean;
  /**
   * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
   */
  liability?: ConnectAccountReference;
  /**
   * The tax provider powering automatic tax.
   */
  provider?: string;
  /**
   * The status of the most recent automated tax calculation for this invoice.
   */
  status?: string;
}

export const AutomaticTaxSchema: TypedSchema<AutomaticTax> = typed<AutomaticTax>(object({
  disabledReason: optional(string()),
  enabled: boolean(),
  get liability() { return optional(ConnectAccountReferenceSchema) },
  provider: optional(string()),
  status: optional(string()),
}));