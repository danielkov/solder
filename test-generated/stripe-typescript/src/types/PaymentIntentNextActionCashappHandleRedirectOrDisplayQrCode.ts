import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionCashappQrCode } from './PaymentIntentNextActionCashappQrCode';
import { PaymentIntentNextActionCashappQrCodeSchema } from './PaymentIntentNextActionCashappQrCode';
/**
 * PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode {
  /**
   * The URL to the hosted Cash App Pay instructions page, which allows customers to view the QR code, and supports QR code refreshing on expiration.
   */
  hostedInstructionsUrl: string;
  /**
   * The url for mobile redirect based auth
   */
  mobileAuthUrl: string;
  /**
   * PaymentIntentNextActionCashappQRCode
   *
   * 
   */
  qrCode: PaymentIntentNextActionCashappQrCode;
}

export const PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode> = typed<PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode>(object({
  hostedInstructionsUrl: string(),
  mobileAuthUrl: string(),
  qrCode: PaymentIntentNextActionCashappQrCodeSchema,
}));