import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsKonbiniStore } from './PaymentMethodDetailsKonbiniStore';
import { PaymentMethodDetailsKonbiniStoreSchema } from './PaymentMethodDetailsKonbiniStore';
/**
 * payment_method_details_konbini
 *
 * 
 */
export interface PaymentMethodDetailsKonbini {
  /**
   * If the payment succeeded, this contains the details of the convenience store where the payment was completed.
   */
  store?: PaymentMethodDetailsKonbiniStore;
}

export const PaymentMethodDetailsKonbiniSchema: TypedSchema<PaymentMethodDetailsKonbini> = typed<PaymentMethodDetailsKonbini>(object({
  get store() { return optional(PaymentMethodDetailsKonbiniStoreSchema) },
}));