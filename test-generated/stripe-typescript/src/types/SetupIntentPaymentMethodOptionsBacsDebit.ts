import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit } from './SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit';
import { SetupIntentPaymentMethodOptionsMandateOptionsBacsDebitSchema } from './SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit';
/**
 * setup_intent_payment_method_options_bacs_debit
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsBacsDebit {
  /**
   * setup_intent_payment_method_options_mandate_options_bacs_debit
   *
   * 
   */
  mandateOptions?: SetupIntentPaymentMethodOptionsMandateOptionsBacsDebit;
}

export const SetupIntentPaymentMethodOptionsBacsDebitSchema: TypedSchema<SetupIntentPaymentMethodOptionsBacsDebit> = typed<SetupIntentPaymentMethodOptionsBacsDebit>(object({
  get mandateOptions() { return optional(SetupIntentPaymentMethodOptionsMandateOptionsBacsDebitSchema) },
}));