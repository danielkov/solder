import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionKonbiniFamilymart } from './PaymentIntentNextActionKonbiniFamilymart';
import { PaymentIntentNextActionKonbiniFamilymartSchema } from './PaymentIntentNextActionKonbiniFamilymart';
import type { PaymentIntentNextActionKonbiniLawson } from './PaymentIntentNextActionKonbiniLawson';
import { PaymentIntentNextActionKonbiniLawsonSchema } from './PaymentIntentNextActionKonbiniLawson';
import type { PaymentIntentNextActionKonbiniMinistop } from './PaymentIntentNextActionKonbiniMinistop';
import { PaymentIntentNextActionKonbiniMinistopSchema } from './PaymentIntentNextActionKonbiniMinistop';
import type { PaymentIntentNextActionKonbiniSeicomart } from './PaymentIntentNextActionKonbiniSeicomart';
import { PaymentIntentNextActionKonbiniSeicomartSchema } from './PaymentIntentNextActionKonbiniSeicomart';
/**
 * payment_intent_next_action_konbini_stores
 *
 * 
 */
export interface PaymentIntentNextActionKonbiniStores {
  /**
   * FamilyMart instruction details.
   */
  familymart?: PaymentIntentNextActionKonbiniFamilymart;
  /**
   * Lawson instruction details.
   */
  lawson?: PaymentIntentNextActionKonbiniLawson;
  /**
   * Ministop instruction details.
   */
  ministop?: PaymentIntentNextActionKonbiniMinistop;
  /**
   * Seicomart instruction details.
   */
  seicomart?: PaymentIntentNextActionKonbiniSeicomart;
}

export const PaymentIntentNextActionKonbiniStoresSchema: TypedSchema<PaymentIntentNextActionKonbiniStores> = typed<PaymentIntentNextActionKonbiniStores>(object({
  get familymart() { return optional(PaymentIntentNextActionKonbiniFamilymartSchema) },
  get lawson() { return optional(PaymentIntentNextActionKonbiniLawsonSchema) },
  get ministop() { return optional(PaymentIntentNextActionKonbiniMinistopSchema) },
  get seicomart() { return optional(PaymentIntentNextActionKonbiniSeicomartSchema) },
}));