import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionSwishQRCode
 *
 * 
 */
export interface PaymentIntentNextActionSwishQrCode {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
  /**
   * The image_url_png string used to render QR code
   */
  imageUrlPng: string;
  /**
   * The image_url_svg string used to render QR code
   */
  imageUrlSvg: string;
}

export const PaymentIntentNextActionSwishQrCodeSchema: TypedSchema<PaymentIntentNextActionSwishQrCode> = typed<PaymentIntentNextActionSwishQrCode>(object({
  data: string(),
  imageUrlPng: string(),
  imageUrlSvg: string(),
}));