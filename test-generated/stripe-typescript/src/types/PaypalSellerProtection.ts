import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * paypal_seller_protection
 *
 * 
 */
export interface PaypalSellerProtection {
  /**
   * An array of conditions that are covered for the transaction, if applicable.
   */
  disputeCategories?: Array<string>;
  /**
   * Indicates whether the transaction is eligible for PayPal's seller protection.
   */
  status: string;
}

export const PaypalSellerProtectionSchema: TypedSchema<PaypalSellerProtection> = typed<PaypalSellerProtection>(object({
  disputeCategories: optional(array(string())),
  status: string(),
}));