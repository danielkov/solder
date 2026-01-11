import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { KlarnaPayerDetails } from './KlarnaPayerDetails';
import { KlarnaPayerDetailsSchema } from './KlarnaPayerDetails';
/**
 * payment_method_details_klarna
 *
 * 
 */
export interface PaymentMethodDetailsKlarna {
  /**
   * The payer details for this transaction.
   */
  payerDetails?: KlarnaPayerDetails;
  /**
   * The Klarna payment method used for this transaction.
Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
   */
  paymentMethodCategory?: string;
  /**
   * Preferred language of the Klarna authorization page that the customer is redirected to.
Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, `en-FR`, `cs-CZ`, `en-CZ`, `ro-RO`, `en-RO`, `el-GR`, `en-GR`, `en-AU`, `en-NZ`, `en-CA`, `fr-CA`, `pl-PL`, `en-PL`, `pt-PT`, `en-PT`, `de-CH`, `fr-CH`, `it-CH`, or `en-CH`
   */
  preferredLocale?: string;
}

export const PaymentMethodDetailsKlarnaSchema: TypedSchema<PaymentMethodDetailsKlarna> = typed<PaymentMethodDetailsKlarna>(object({
  get payerDetails() { return optional(KlarnaPayerDetailsSchema) },
  paymentMethodCategory: optional(string()),
  preferredLocale: optional(string()),
}));