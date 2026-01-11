import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount } from './PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount';
import { PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccountSchema } from './PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount';
/**
 * source_params
 *
 * Initiating payment method details for the object.
 */
export interface PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails {
  type: string;
  /**
   * us_bank_account_source_params
   */
  usBankAccount?: PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount;
}

export const PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetailsSchema: TypedSchema<PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails> = typed<PostTestHelpersTreasuryReceivedCreditsRequestInitiatingPaymentMethodDetails>(object({
  type: string(),
  get usBankAccount() { return optional(PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccountSchema) },
}));