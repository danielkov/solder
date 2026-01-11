import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
 */
export interface PostPaymentMethodConfigurationsRequestAffirm {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAffirmSchema: TypedSchema<PostPaymentMethodConfigurationsRequestAffirm> = typed<PostPaymentMethodConfigurationsRequestAffirm>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));