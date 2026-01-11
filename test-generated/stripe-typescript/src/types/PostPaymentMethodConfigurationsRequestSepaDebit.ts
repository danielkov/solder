import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * The [Single Euro Payments Area (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) is an initiative of the European Union to simplify payments within and across member countries. SEPA established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region, check this [page](https://stripe.com/docs/payments/sepa-debit) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestSepaDebit {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestSepaDebitSchema: TypedSchema<PostPaymentMethodConfigurationsRequestSepaDebit> = typed<PostPaymentMethodConfigurationsRequestSepaDebit>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));