import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionKonbiniStores } from './PaymentIntentNextActionKonbiniStores';
import { PaymentIntentNextActionKonbiniStoresSchema } from './PaymentIntentNextActionKonbiniStores';
/**
 * payment_intent_next_action_konbini
 *
 * 
 */
export interface PaymentIntentNextActionKonbini {
  /**
   * The timestamp at which the pending Konbini payment expires.
   */
  expiresAt: number;
  /**
   * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
   */
  hostedVoucherUrl?: string;
  /**
   * payment_intent_next_action_konbini_stores
   *
   * 
   */
  stores: PaymentIntentNextActionKonbiniStores;
}

export const PaymentIntentNextActionKonbiniSchema: TypedSchema<PaymentIntentNextActionKonbini> = typed<PaymentIntentNextActionKonbini>(object({
  expiresAt: number(),
  hostedVoucherUrl: optional(string()),
  stores: PaymentIntentNextActionKonbiniStoresSchema,
}));