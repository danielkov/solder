import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceTaxAssociationTransactionAttempts } from './TaxProductResourceTaxAssociationTransactionAttempts';
import { TaxProductResourceTaxAssociationTransactionAttemptsSchema } from './TaxProductResourceTaxAssociationTransactionAttempts';
/**
 * TaxProductResourceTaxAssociation
 *
 * A Tax Association exposes the Tax Transactions that Stripe attempted to create on your behalf based on the PaymentIntent input
 */
export interface TaxAssociation {
  /**
   * The [Tax Calculation](https://stripe.com/docs/api/tax/calculations/object) that was included in PaymentIntent.
   */
  calculation: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The [PaymentIntent](https://stripe.com/docs/api/payment_intents/object) that this Tax Association is tracking.
   */
  paymentIntent: string;
  /**
   * Information about the tax transactions linked to this payment intent
   */
  taxTransactionAttempts?: Array<TaxProductResourceTaxAssociationTransactionAttempts>;
}

export const TaxAssociationSchema: TypedSchema<TaxAssociation> = typed<TaxAssociation>(object({
  calculation: string(),
  id: string(),
  object: string(),
  paymentIntent: string(),
  get taxTransactionAttempts() { return optional(array(TaxProductResourceTaxAssociationTransactionAttemptsSchema)) },
}));