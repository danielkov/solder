import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodConfigResourcePaymentMethodProperties } from './PaymentMethodConfigResourcePaymentMethodProperties';
import { PaymentMethodConfigResourcePaymentMethodPropertiesSchema } from './PaymentMethodConfigResourcePaymentMethodProperties';
/**
 * PaymentMethodConfigResourcePaymentMethodConfiguration
 *
 * PaymentMethodConfigurations control which payment methods are displayed to your customers when you don't explicitly specify payment method types. You can have multiple configurations with different sets of payment methods for different scenarios.

There are two types of PaymentMethodConfigurations. Which is used depends on the [charge type](https://stripe.com/docs/connect/charges):

**Direct** configurations apply to payments created on your account, including Connect destination charges, Connect separate charges and transfers, and payments not involving Connect.

**Child** configurations apply to payments created on your connected accounts using direct charges, and charges with the on_behalf_of parameter.

Child configurations have a `parent` that sets default values and controls which settings connected accounts may override. You can specify a parent ID at payment time, and Stripe will automatically resolve the connected account’s associated child configuration. Parent configurations are [managed in the dashboard](https://dashboard.stripe.com/settings/payment_methods/connected_accounts) and are not available in this API.

Related guides:
- [Payment Method Configurations API](https://stripe.com/docs/connect/payment-method-configurations)
- [Multiple configurations on dynamic payment methods](https://stripe.com/docs/payments/multiple-payment-method-configs)
- [Multiple configurations for your Connect accounts](https://stripe.com/docs/connect/multiple-payment-method-configurations)
 */
export interface PaymentMethodConfiguration {
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  acssDebit?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * Whether the configuration can be used for new payments.
   */
  active: boolean;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  affirm?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  afterpayClearpay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  alipay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  alma?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  amazonPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  applePay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * For child configs, the Connect application associated with the configuration.
   */
  application?: string;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  auBecsDebit?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  bacsDebit?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  bancontact?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  billie?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  blik?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  boleto?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  card?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  cartesBancaires?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  cashapp?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  crypto?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  customerBalance?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  eps?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  fpx?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  giropay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  googlePay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  grabpay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  ideal?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * The default configuration is used whenever a payment method configuration is not specified.
   */
  isDefault: boolean;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  jcb?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  kakaoPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  klarna?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  konbini?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  krCard?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  link?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  mbWay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  mobilepay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  multibanco?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * The configuration's name.
   */
  name: string;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  naverPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  nzBankAccount?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  oxxo?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  p24?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * For child configs, the configuration's parent configuration.
   */
  parent?: string;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  payByBank?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  payco?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  paynow?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  paypal?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  pix?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  promptpay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  revolutPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  samsungPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  satispay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  sepaDebit?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  sofort?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  swish?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  twint?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  usBankAccount?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  wechatPay?: PaymentMethodConfigResourcePaymentMethodProperties;
  /**
   * PaymentMethodConfigResourcePaymentMethodProperties
   *
   * 
   */
  zip?: PaymentMethodConfigResourcePaymentMethodProperties;
}

export const PaymentMethodConfigurationSchema: TypedSchema<PaymentMethodConfiguration> = typed<PaymentMethodConfiguration>(object({
  get acssDebit() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  active: boolean(),
  get affirm() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get afterpayClearpay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get alipay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get alma() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get amazonPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get applePay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  application: optional(string()),
  get auBecsDebit() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get bacsDebit() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get bancontact() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get billie() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get blik() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get boleto() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get card() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get cartesBancaires() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get cashapp() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get crypto() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get customerBalance() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get eps() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get fpx() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get giropay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get googlePay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get grabpay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  id: string(),
  get ideal() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  isDefault: boolean(),
  get jcb() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get kakaoPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get klarna() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get konbini() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get krCard() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get link() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  livemode: boolean(),
  get mbWay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get mobilepay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get multibanco() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  name: string(),
  get naverPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get nzBankAccount() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  object: string(),
  get oxxo() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get p24() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  parent: optional(string()),
  get payByBank() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get payco() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get paynow() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get paypal() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get pix() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get promptpay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get revolutPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get samsungPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get satispay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get sepaDebit() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get sofort() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get swish() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get twint() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get usBankAccount() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get wechatPay() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
  get zip() { return optional(PaymentMethodConfigResourcePaymentMethodPropertiesSchema) },
}));