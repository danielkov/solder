import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit } from './SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit';
import { SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitSchema } from './SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit';
/**
 * setup_intent_payment_method_options_acss_debit
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsAcssDebit {
  /**
   * Currency supported by the bank account
   */
  currency?: string;
  /**
   * setup_intent_payment_method_options_mandate_options_acss_debit
   *
   * 
   */
  mandateOptions?: SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit;
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const SetupIntentPaymentMethodOptionsAcssDebitSchema: TypedSchema<SetupIntentPaymentMethodOptionsAcssDebit> = typed<SetupIntentPaymentMethodOptionsAcssDebit>(object({
  currency: optional(string()),
  get mandateOptions() { return optional(SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitSchema) },
  verificationMethod: optional(string()),
}));