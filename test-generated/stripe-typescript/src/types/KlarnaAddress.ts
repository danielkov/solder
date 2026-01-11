import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * klarna_address
 *
 * 
 */
export interface KlarnaAddress {
  /**
   * The payer address country
   */
  country?: string;
}

export const KlarnaAddressSchema: TypedSchema<KlarnaAddress> = typed<KlarnaAddress>(object({
  country: optional(string()),
}));