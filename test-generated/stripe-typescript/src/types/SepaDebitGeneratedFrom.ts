import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { SetupAttemptOrRef } from './SetupAttemptOrRef';
import { SetupAttemptOrRefSchema } from './SetupAttemptOrRef';
/**
 * sepa_debit_generated_from
 *
 * 
 */
export interface SepaDebitGeneratedFrom {
  /**
   * The ID of the Charge that generated this PaymentMethod, if any.
   */
  charge?: ChargeOrRef;
  /**
   * The ID of the SetupAttempt that generated this PaymentMethod, if any.
   */
  setupAttempt?: SetupAttemptOrRef;
}

export const SepaDebitGeneratedFromSchema: TypedSchema<SepaDebitGeneratedFrom> = typed<SepaDebitGeneratedFrom>(object({
  get charge() { return optional(ChargeOrRefSchema) },
  get setupAttempt() { return optional(SetupAttemptOrRefSchema) },
}));