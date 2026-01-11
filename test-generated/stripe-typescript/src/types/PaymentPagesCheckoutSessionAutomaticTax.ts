import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * PaymentPagesCheckoutSessionAutomaticTax
 *
 * 
 */
export interface PaymentPagesCheckoutSessionAutomaticTax {
  /**
   * Indicates whether automatic tax is enabled for the session
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
   * The status of the most recent automated tax calculation for this session.
   */
  status?: string;
}

export const PaymentPagesCheckoutSessionAutomaticTaxSchema: TypedSchema<PaymentPagesCheckoutSessionAutomaticTax> = typed<PaymentPagesCheckoutSessionAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(ConnectAccountReferenceSchema) },
  provider: optional(string()),
  status: optional(string()),
}));