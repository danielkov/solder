import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionInvoiceSettings } from './PaymentPagesCheckoutSessionInvoiceSettings';
import { PaymentPagesCheckoutSessionInvoiceSettingsSchema } from './PaymentPagesCheckoutSessionInvoiceSettings';
/**
 * PaymentPagesCheckoutSessionInvoiceCreation
 *
 * 
 */
export interface PaymentPagesCheckoutSessionInvoiceCreation {
  /**
   * Indicates whether invoice creation is enabled for the Checkout Session.
   */
  enabled: boolean;
  /**
   * PaymentPagesCheckoutSessionInvoiceSettings
   *
   * 
   */
  invoiceData: PaymentPagesCheckoutSessionInvoiceSettings;
}

export const PaymentPagesCheckoutSessionInvoiceCreationSchema: TypedSchema<PaymentPagesCheckoutSessionInvoiceCreation> = typed<PaymentPagesCheckoutSessionInvoiceCreation>(object({
  enabled: boolean(),
  invoiceData: PaymentPagesCheckoutSessionInvoiceSettingsSchema,
}));