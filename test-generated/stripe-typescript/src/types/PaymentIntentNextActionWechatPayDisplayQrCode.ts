import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionWechatPayDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionWechatPayDisplayQrCode {
  /**
   * The data being used to generate QR code
   */
  data: string;
  /**
   * The URL to the hosted WeChat Pay instructions page, which allows customers to view the WeChat Pay QR code.
   */
  hostedInstructionsUrl: string;
  /**
   * The base64 image data for a pre-generated QR code
   */
  imageDataUrl: string;
  /**
   * The image_url_png string used to render QR code
   */
  imageUrlPng: string;
  /**
   * The image_url_svg string used to render QR code
   */
  imageUrlSvg: string;
}

export const PaymentIntentNextActionWechatPayDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionWechatPayDisplayQrCode> = typed<PaymentIntentNextActionWechatPayDisplayQrCode>(object({
  data: string(),
  hostedInstructionsUrl: string(),
  imageDataUrl: string(),
  imageUrlPng: string(),
  imageUrlSvg: string(),
}));