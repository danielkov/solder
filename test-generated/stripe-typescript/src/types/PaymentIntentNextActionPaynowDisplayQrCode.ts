import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionPaynowDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionPaynowDisplayQrCode {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
  /**
   * The URL to the hosted PayNow instructions page, which allows customers to view the PayNow QR code.
   */
  hostedInstructionsUrl?: string;
  /**
   * The image_url_png string used to render QR code
   */
  imageUrlPng: string;
  /**
   * The image_url_svg string used to render QR code
   */
  imageUrlSvg: string;
}

export const PaymentIntentNextActionPaynowDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionPaynowDisplayQrCode> = typed<PaymentIntentNextActionPaynowDisplayQrCode>(object({
  data: string(),
  hostedInstructionsUrl: optional(string()),
  imageUrlPng: string(),
  imageUrlSvg: string(),
}));