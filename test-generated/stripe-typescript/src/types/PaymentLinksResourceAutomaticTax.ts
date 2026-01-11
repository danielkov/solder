import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * PaymentLinksResourceAutomaticTax
 *
 * 
 */
export interface PaymentLinksResourceAutomaticTax {
  /**
   * If `true`, tax will be calculated automatically using the customer's location.
   */
  enabled: boolean;
  /**
   * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
   */
  liability?: ConnectAccountReference;
}

export const PaymentLinksResourceAutomaticTaxSchema: TypedSchema<PaymentLinksResourceAutomaticTax> = typed<PaymentLinksResourceAutomaticTax>(object({
  enabled: boolean(),
  get liability() { return optional(ConnectAccountReferenceSchema) },
}));