import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodUsBankAccountBlocked } from './PaymentMethodUsBankAccountBlocked';
import { PaymentMethodUsBankAccountBlockedSchema } from './PaymentMethodUsBankAccountBlocked';
/**
 * payment_method_us_bank_account_status_details
 *
 * 
 */
export interface PaymentMethodUsBankAccountStatusDetails {
  /**
   * payment_method_us_bank_account_blocked
   *
   * 
   */
  blocked?: PaymentMethodUsBankAccountBlocked;
}

export const PaymentMethodUsBankAccountStatusDetailsSchema: TypedSchema<PaymentMethodUsBankAccountStatusDetails> = typed<PaymentMethodUsBankAccountStatusDetails>(object({
  get blocked() { return optional(PaymentMethodUsBankAccountBlockedSchema) },
}));