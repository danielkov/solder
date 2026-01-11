import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodConfigResourceDisplayPreference } from './PaymentMethodConfigResourceDisplayPreference';
import { PaymentMethodConfigResourceDisplayPreferenceSchema } from './PaymentMethodConfigResourceDisplayPreference';
/**
 * PaymentMethodConfigResourcePaymentMethodProperties
 *
 * 
 */
export interface PaymentMethodConfigResourcePaymentMethodProperties {
  /**
   * Whether this payment method may be offered at checkout. True if `display_preference` is `on` and the payment method's capability is active.
   */
  available: boolean;
  /**
   * PaymentMethodConfigResourceDisplayPreference
   *
   * 
   */
  displayPreference: PaymentMethodConfigResourceDisplayPreference;
}

export const PaymentMethodConfigResourcePaymentMethodPropertiesSchema: TypedSchema<PaymentMethodConfigResourcePaymentMethodProperties> = typed<PaymentMethodConfigResourcePaymentMethodProperties>(object({
  available: boolean(),
  displayPreference: PaymentMethodConfigResourceDisplayPreferenceSchema,
}));