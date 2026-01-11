import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_konbini_store
 *
 * 
 */
export interface PaymentMethodDetailsKonbiniStore {
  /**
   * The name of the convenience store chain where the payment was completed.
   */
  chain?: string;
}

export const PaymentMethodDetailsKonbiniStoreSchema: TypedSchema<PaymentMethodDetailsKonbiniStore> = typed<PaymentMethodDetailsKonbiniStore>(object({
  chain: optional(string()),
}));