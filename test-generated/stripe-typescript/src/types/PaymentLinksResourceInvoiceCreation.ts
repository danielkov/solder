import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceInvoiceSettings } from './PaymentLinksResourceInvoiceSettings';
import { PaymentLinksResourceInvoiceSettingsSchema } from './PaymentLinksResourceInvoiceSettings';
/**
 * PaymentLinksResourceInvoiceCreation
 *
 * 
 */
export interface PaymentLinksResourceInvoiceCreation {
  /**
   * Enable creating an invoice on successful payment.
   */
  enabled: boolean;
  /**
   * Configuration for the invoice. Default invoice values will be used if unspecified.
   */
  invoiceData?: PaymentLinksResourceInvoiceSettings;
}

export const PaymentLinksResourceInvoiceCreationSchema: TypedSchema<PaymentLinksResourceInvoiceCreation> = typed<PaymentLinksResourceInvoiceCreation>(object({
  enabled: boolean(),
  get invoiceData() { return optional(PaymentLinksResourceInvoiceSettingsSchema) },
}));