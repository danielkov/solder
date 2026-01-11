import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit } from './SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit';
import { SetupIntentPaymentMethodOptionsMandateOptionsSepaDebitSchema } from './SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit';
/**
 * setup_intent_payment_method_options_sepa_debit
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsSepaDebit {
  /**
   * setup_intent_payment_method_options_mandate_options_sepa_debit
   *
   * 
   */
  mandateOptions?: SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit;
}

export const SetupIntentPaymentMethodOptionsSepaDebitSchema: TypedSchema<SetupIntentPaymentMethodOptionsSepaDebit> = typed<SetupIntentPaymentMethodOptionsSepaDebit>(object({
  get mandateOptions() { return optional(SetupIntentPaymentMethodOptionsMandateOptionsSepaDebitSchema) },
}));