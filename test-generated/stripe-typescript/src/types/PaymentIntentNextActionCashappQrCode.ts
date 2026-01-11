import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionCashappQRCode
 *
 * 
 */
export interface PaymentIntentNextActionCashappQrCode {
  /**
   * The date (unix timestamp) when the QR code expires.
   */
  expiresAt: number;
  /**
   * The image_url_png string used to render QR code
   */
  imageUrlPng: string;
  /**
   * The image_url_svg string used to render QR code
   */
  imageUrlSvg: string;
}

export const PaymentIntentNextActionCashappQrCodeSchema: TypedSchema<PaymentIntentNextActionCashappQrCode> = typed<PaymentIntentNextActionCashappQrCode>(object({
  expiresAt: number(),
  imageUrlPng: string(),
  imageUrlSvg: string(),
}));