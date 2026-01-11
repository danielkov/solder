import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ConnectAccountReference } from './ConnectAccountReference';
import { ConnectAccountReferenceSchema } from './ConnectAccountReference';
/**
 * PaymentLinksResourceSubscriptionDataInvoiceSettings
 *
 * 
 */
export interface PaymentLinksResourceSubscriptionDataInvoiceSettings {
  /**
   * ConnectAccountReference
   *
   * 
   */
  issuer: ConnectAccountReference;
}

export const PaymentLinksResourceSubscriptionDataInvoiceSettingsSchema: TypedSchema<PaymentLinksResourceSubscriptionDataInvoiceSettings> = typed<PaymentLinksResourceSubscriptionDataInvoiceSettings>(object({
  issuer: ConnectAccountReferenceSchema,
}));