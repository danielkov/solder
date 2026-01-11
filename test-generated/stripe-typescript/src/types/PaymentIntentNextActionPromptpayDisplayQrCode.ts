import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionPromptpayDisplayQrCode
 *
 * 
 */
export interface PaymentIntentNextActionPromptpayDisplayQrCode {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
  /**
   * The URL to the hosted PromptPay instructions page, which allows customers to view the PromptPay QR code.
   */
  hostedInstructionsUrl: string;
  /**
   * The PNG path used to render the QR code, can be used as the source in an HTML img tag
   */
  imageUrlPng: string;
  /**
   * The SVG path used to render the QR code, can be used as the source in an HTML img tag
   */
  imageUrlSvg: string;
}

export const PaymentIntentNextActionPromptpayDisplayQrCodeSchema: TypedSchema<PaymentIntentNextActionPromptpayDisplayQrCode> = typed<PaymentIntentNextActionPromptpayDisplayQrCode>(object({
  data: string(),
  hostedInstructionsUrl: string(),
  imageUrlPng: string(),
  imageUrlSvg: string(),
}));