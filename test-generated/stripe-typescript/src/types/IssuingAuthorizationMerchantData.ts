import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationMerchantData
 *
 * 
 */
export interface IssuingAuthorizationMerchantData {
  /**
   * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
   */
  category: string;
  /**
   * The merchant category code for the seller’s business
   */
  categoryCode: string;
  /**
   * City where the seller is located
   */
  city?: string;
  /**
   * Country where the seller is located
   */
  country?: string;
  /**
   * Name of the seller
   */
  name?: string;
  /**
   * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
   */
  networkId: string;
  /**
   * Postal code where the seller is located
   */
  postalCode?: string;
  /**
   * State where the seller is located
   */
  state?: string;
  /**
   * The seller's tax identification number. Currently populated for French merchants only.
   */
  taxId?: string;
  /**
   * An ID assigned by the seller to the location of the sale.
   */
  terminalId?: string;
  /**
   * URL provided by the merchant on a 3DS request
   */
  url?: string;
}

export const IssuingAuthorizationMerchantDataSchema: TypedSchema<IssuingAuthorizationMerchantData> = typed<IssuingAuthorizationMerchantData>(object({
  category: string(),
  categoryCode: string(),
  city: optional(string()),
  country: optional(string()),
  name: optional(string()),
  networkId: string(),
  postalCode: optional(string()),
  state: optional(string()),
  taxId: optional(string()),
  terminalId: optional(string()),
  url: optional(string()),
}));