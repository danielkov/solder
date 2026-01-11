import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionSwishQrCode } from './PaymentIntentNextActionSwishQrCode';
import { PaymentIntentNextActionSwishQrCodeSchema } from './PaymentIntentNextActionSwishQrCode';
/**
 * PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode {
  /**
   * The URL to the hosted Swish instructions page, which allows customers to view the QR code.
   */
  hostedInstructionsUrl: string;
  /**
   * PaymentIntentNextActionSwishQRCode
   *
   * 
   */
  qrCode: PaymentIntentNextActionSwishQrCode;
}

export const PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode> = typed<PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode>(object({
  hostedInstructionsUrl: string(),
  qrCode: PaymentIntentNextActionSwishQrCodeSchema,
}));