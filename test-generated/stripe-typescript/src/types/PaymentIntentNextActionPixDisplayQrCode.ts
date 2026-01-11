import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionPixDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionPixDisplayQrCode {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data?: string;
  /**
   * The date (unix timestamp) when the PIX expires.
   */
  expiresAt?: number;
  /**
   * The URL to the hosted pix instructions page, which allows customers to view the pix QR code.
   */
  hostedInstructionsUrl?: string;
  /**
   * The image_url_png string used to render png QR code
   */
  imageUrlPng?: string;
  /**
   * The image_url_svg string used to render svg QR code
   */
  imageUrlSvg?: string;
}

export const PaymentIntentNextActionPixDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionPixDisplayQrCode> = typed<PaymentIntentNextActionPixDisplayQrCode>(object({
  data: optional(string()),
  expiresAt: optional(number()),
  hostedInstructionsUrl: optional(string()),
  imageUrlPng: optional(string()),
  imageUrlSvg: optional(string()),
}));