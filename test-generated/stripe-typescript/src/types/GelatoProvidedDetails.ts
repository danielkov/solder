import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoProvidedDetails
 *
 * 
 */
export interface GelatoProvidedDetails {
  /**
   * Email of user being verified
   */
  email?: string;
  /**
   * Phone number of user being verified
   */
  phone?: string;
}

export const GelatoProvidedDetailsSchema: TypedSchema<GelatoProvidedDetails> = typed<GelatoProvidedDetails>(object({
  email: optional(string()),
  phone: optional(string()),
}));