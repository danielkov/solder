import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures
 *
 * This hash contains the features the Payment Element supports.
 */
export interface CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures {
  /**
   * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.

If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
   */
  paymentMethodAllowRedisplayFilters: Array<string>;
  /**
   * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
   */
  paymentMethodRedisplay: string;
  /**
   * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`. The maximum redisplay limit is `10`.
   */
  paymentMethodRedisplayLimit?: number;
  /**
   * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.

Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
   */
  paymentMethodRemove: string;
  /**
   * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.

If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
   */
  paymentMethodSave: string;
  /**
   * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.

When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
   */
  paymentMethodSaveUsage?: string;
}

export const CustomerSessionResourceComponentsResourcePaymentElementResourceFeaturesSchema: TypedSchema<CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures> = typed<CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures>(object({
  paymentMethodAllowRedisplayFilters: array(string()),
  paymentMethodRedisplay: string(),
  paymentMethodRedisplayLimit: optional(number()),
  paymentMethodRemove: string(),
  paymentMethodSave: string(),
  paymentMethodSaveUsage: optional(string()),
}));