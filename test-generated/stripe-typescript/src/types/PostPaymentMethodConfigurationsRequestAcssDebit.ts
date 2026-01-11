import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
 */
export interface PostPaymentMethodConfigurationsRequestAcssDebit {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAcssDebitSchema: TypedSchema<PostPaymentMethodConfigurationsRequestAcssDebit> = typed<PostPaymentMethodConfigurationsRequestAcssDebit>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));