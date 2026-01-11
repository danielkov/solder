import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment } from './ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment';
import { ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallmentSchema } from './ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment';
/**
 * ConfirmationTokensResourcePaymentMethodOptionsResourceCard
 *
 * This hash contains the card payment method options.
 */
export interface ConfirmationTokensResourcePaymentMethodOptionsResourceCard {
  /**
   * The `cvc_update` Token collected from the Payment Element.
   */
  cvcToken?: string;
  /**
   * ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment
   *
   * Installment configuration for payments.
   */
  installments?: ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment;
}

export const ConfirmationTokensResourcePaymentMethodOptionsResourceCardSchema: TypedSchema<ConfirmationTokensResourcePaymentMethodOptionsResourceCard> = typed<ConfirmationTokensResourcePaymentMethodOptionsResourceCard>(object({
  cvcToken: optional(string()),
  get installments() { return optional(ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallmentSchema) },
}));