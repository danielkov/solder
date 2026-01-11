import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * QuotesResourceAutomaticTax
 *
 * 
 */
export interface QuotesResourceAutomaticTax {
  /**
   * Automatically calculate taxes
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
   * The status of the most recent automated tax calculation for this quote.
   */
  status?: string;
}

export const QuotesResourceAutomaticTaxSchema: TypedSchema<QuotesResourceAutomaticTax> = typed<QuotesResourceAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(ConnectAccountReferenceSchema) },
  provider: optional(string()),
  status: optional(string()),
}));