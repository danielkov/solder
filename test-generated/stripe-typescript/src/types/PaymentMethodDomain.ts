import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDomainResourcePaymentMethodStatus } from './PaymentMethodDomainResourcePaymentMethodStatus';
import { PaymentMethodDomainResourcePaymentMethodStatusSchema } from './PaymentMethodDomainResourcePaymentMethodStatus';
/**
 * PaymentMethodDomainResourcePaymentMethodDomain
 *
 * A payment method domain represents a web domain that you have registered with Stripe.
Stripe Elements use registered payment method domains to control where certain payment methods are shown.

Related guide: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
 */
export interface PaymentMethodDomain {
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  amazonPay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  applePay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The domain name that this payment method domain object represents.
   */
  domainName: string;
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
   */
  enabled: boolean;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  googlePay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  klarna: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  link: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatus
   *
   * Indicates the status of a specific payment method on a payment method domain.
   */
  paypal: PaymentMethodDomainResourcePaymentMethodStatus;
}

export const PaymentMethodDomainSchema: TypedSchema<PaymentMethodDomain> = typed<PaymentMethodDomain>(object({
  amazonPay: PaymentMethodDomainResourcePaymentMethodStatusSchema,
  applePay: PaymentMethodDomainResourcePaymentMethodStatusSchema,
  created: number(),
  domainName: string(),
  enabled: boolean(),
  googlePay: PaymentMethodDomainResourcePaymentMethodStatusSchema,
  id: string(),
  klarna: PaymentMethodDomainResourcePaymentMethodStatusSchema,
  link: PaymentMethodDomainResourcePaymentMethodStatusSchema,
  livemode: boolean(),
  object: string(),
  paypal: PaymentMethodDomainResourcePaymentMethodStatusSchema,
}));