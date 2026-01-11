import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentMethodsPaymentMethodRequestCard } from './PostPaymentMethodsPaymentMethodRequestCard';
import { PostPaymentMethodsPaymentMethodRequestCardSchema } from './PostPaymentMethodsPaymentMethodRequestCard';
import type { PostPaymentMethodsPaymentMethodRequestUsBankAccount } from './PostPaymentMethodsPaymentMethodRequestUsBankAccount';
import { PostPaymentMethodsPaymentMethodRequestUsBankAccountSchema } from './PostPaymentMethodsPaymentMethodRequestUsBankAccount';
import type { PostPaymentMethodsRequestBillingDetails } from './PostPaymentMethodsRequestBillingDetails';
import { PostPaymentMethodsRequestBillingDetailsSchema } from './PostPaymentMethodsRequestBillingDetails';
export interface PostPaymentMethodsPaymentMethodRequest {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
   */
  allowRedisplay?: string;
  /**
   * billing_details_inner_params
   *
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billingDetails?: PostPaymentMethodsRequestBillingDetails;
  /**
   * update_api_param
   *
   * If this is a `card` PaymentMethod, this hash contains the user's card details.
   */
  card?: PostPaymentMethodsPaymentMethodRequestCard;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * update_param
   *
   * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
   */
  usBankAccount?: PostPaymentMethodsPaymentMethodRequestUsBankAccount;
}

export const PostPaymentMethodsPaymentMethodRequestSchema: TypedSchema<PostPaymentMethodsPaymentMethodRequest> = typed<PostPaymentMethodsPaymentMethodRequest>(object({
  allowRedisplay: optional(string()),
  get billingDetails() { return optional(PostPaymentMethodsRequestBillingDetailsSchema) },
  get card() { return optional(PostPaymentMethodsPaymentMethodRequestCardSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get usBankAccount() { return optional(PostPaymentMethodsPaymentMethodRequestUsBankAccountSchema) },
}));