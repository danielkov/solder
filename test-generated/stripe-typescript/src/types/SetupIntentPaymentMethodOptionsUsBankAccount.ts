import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LinkedAccountOptionsCommon } from './LinkedAccountOptionsCommon';
import { LinkedAccountOptionsCommonSchema } from './LinkedAccountOptionsCommon';
import type { PaymentMethodOptionsUsBankAccountMandateOptions } from './PaymentMethodOptionsUsBankAccountMandateOptions';
import { PaymentMethodOptionsUsBankAccountMandateOptionsSchema } from './PaymentMethodOptionsUsBankAccountMandateOptions';
/**
 * setup_intent_payment_method_options_us_bank_account
 *
 * 
 */
export interface SetupIntentPaymentMethodOptionsUsBankAccount {
  /**
   * linked_account_options_common
   *
   * 
   */
  financialConnections?: LinkedAccountOptionsCommon;
  /**
   * payment_method_options_us_bank_account_mandate_options
   *
   * 
   */
  mandateOptions?: PaymentMethodOptionsUsBankAccountMandateOptions;
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const SetupIntentPaymentMethodOptionsUsBankAccountSchema: TypedSchema<SetupIntentPaymentMethodOptionsUsBankAccount> = typed<SetupIntentPaymentMethodOptionsUsBankAccount>(object({
  get financialConnections() { return optional(LinkedAccountOptionsCommonSchema) },
  get mandateOptions() { return optional(PaymentMethodOptionsUsBankAccountMandateOptionsSchema) },
  verificationMethod: optional(string()),
}));