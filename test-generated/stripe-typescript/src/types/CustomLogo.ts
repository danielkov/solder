import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_logo
 *
 * 
 */
export interface CustomLogo {
  /**
   * Content type of the Dashboard-only CustomPaymentMethodType logo.
   */
  contentType?: string;
  /**
   * URL of the Dashboard-only CustomPaymentMethodType logo.
   */
  url: string;
}

export const CustomLogoSchema: TypedSchema<CustomLogo> = typed<CustomLogo>(object({
  contentType: optional(string()),
  url: string(),
}));