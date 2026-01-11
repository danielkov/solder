import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { ConfirmationTokensResourcePaymentMethodOptionsResourceCard } from './ConfirmationTokensResourcePaymentMethodOptionsResourceCard';
import { ConfirmationTokensResourcePaymentMethodOptionsResourceCardSchema } from './ConfirmationTokensResourcePaymentMethodOptionsResourceCard';
/**
 * ConfirmationTokensResourcePaymentMethodOptions
 *
 * Payment-method-specific configuration
 */
export interface ConfirmationTokensResourcePaymentMethodOptions {
  /**
   * This hash contains the card payment method options.
   */
  card?: ConfirmationTokensResourcePaymentMethodOptionsResourceCard;
}

export const ConfirmationTokensResourcePaymentMethodOptionsSchema: TypedSchema<ConfirmationTokensResourcePaymentMethodOptions> = typed<ConfirmationTokensResourcePaymentMethodOptions>(object({
  get card() { return optional(ConfirmationTokensResourcePaymentMethodOptionsResourceCardSchema) },
}));