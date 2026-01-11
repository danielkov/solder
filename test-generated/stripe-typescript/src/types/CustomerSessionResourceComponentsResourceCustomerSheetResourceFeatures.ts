import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures
 *
 * This hash contains the features the customer sheet supports.
 */
export interface CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures {
  /**
   * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the customer sheet displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.

If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
   */
  paymentMethodAllowRedisplayFilters?: Array<string>;
  /**
   * Controls whether the customer sheet displays the option to remove a saved payment method."

Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
   */
  paymentMethodRemove?: string;
}

export const CustomerSessionResourceComponentsResourceCustomerSheetResourceFeaturesSchema: TypedSchema<CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures> = typed<CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures>(object({
  paymentMethodAllowRedisplayFilters: optional(array(string())),
  paymentMethodRemove: optional(string()),
}));