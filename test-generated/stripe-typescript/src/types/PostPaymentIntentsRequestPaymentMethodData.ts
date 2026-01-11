import { TypedSchema, object, optional, string, typed, unknown } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostPaymentIntentsRequestAcssDebit } from './PostPaymentIntentsRequestAcssDebit';
import { PostPaymentIntentsRequestAcssDebitSchema } from './PostPaymentIntentsRequestAcssDebit';
import type { PostPaymentIntentsRequestAuBecsDebit } from './PostPaymentIntentsRequestAuBecsDebit';
import { PostPaymentIntentsRequestAuBecsDebitSchema } from './PostPaymentIntentsRequestAuBecsDebit';
import type { PostPaymentIntentsRequestBacsDebit } from './PostPaymentIntentsRequestBacsDebit';
import { PostPaymentIntentsRequestBacsDebitSchema } from './PostPaymentIntentsRequestBacsDebit';
import type { PostPaymentIntentsRequestBillingDetails } from './PostPaymentIntentsRequestBillingDetails';
import { PostPaymentIntentsRequestBillingDetailsSchema } from './PostPaymentIntentsRequestBillingDetails';
import type { PostPaymentIntentsRequestBoleto } from './PostPaymentIntentsRequestBoleto';
import { PostPaymentIntentsRequestBoletoSchema } from './PostPaymentIntentsRequestBoleto';
import type { PostPaymentIntentsRequestEps } from './PostPaymentIntentsRequestEps';
import { PostPaymentIntentsRequestEpsSchema } from './PostPaymentIntentsRequestEps';
import type { PostPaymentIntentsRequestFpx } from './PostPaymentIntentsRequestFpx';
import { PostPaymentIntentsRequestFpxSchema } from './PostPaymentIntentsRequestFpx';
import type { PostPaymentIntentsRequestIdeal } from './PostPaymentIntentsRequestIdeal';
import { PostPaymentIntentsRequestIdealSchema } from './PostPaymentIntentsRequestIdeal';
import type { PostPaymentIntentsRequestKlarna } from './PostPaymentIntentsRequestKlarna';
import { PostPaymentIntentsRequestKlarnaSchema } from './PostPaymentIntentsRequestKlarna';
import type { PostPaymentIntentsRequestNaverPay } from './PostPaymentIntentsRequestNaverPay';
import { PostPaymentIntentsRequestNaverPaySchema } from './PostPaymentIntentsRequestNaverPay';
import type { PostPaymentIntentsRequestNzBankAccount } from './PostPaymentIntentsRequestNzBankAccount';
import { PostPaymentIntentsRequestNzBankAccountSchema } from './PostPaymentIntentsRequestNzBankAccount';
import type { PostPaymentIntentsRequestP24 } from './PostPaymentIntentsRequestP24';
import { PostPaymentIntentsRequestP24Schema } from './PostPaymentIntentsRequestP24';
import type { PostPaymentIntentsRequestRadarOptions } from './PostPaymentIntentsRequestRadarOptions';
import { PostPaymentIntentsRequestRadarOptionsSchema } from './PostPaymentIntentsRequestRadarOptions';
import type { PostPaymentIntentsRequestSepaDebit } from './PostPaymentIntentsRequestSepaDebit';
import { PostPaymentIntentsRequestSepaDebitSchema } from './PostPaymentIntentsRequestSepaDebit';
import type { PostPaymentIntentsRequestSofort } from './PostPaymentIntentsRequestSofort';
import { PostPaymentIntentsRequestSofortSchema } from './PostPaymentIntentsRequestSofort';
import type { PostPaymentIntentsRequestUsBankAccount } from './PostPaymentIntentsRequestUsBankAccount';
import { PostPaymentIntentsRequestUsBankAccountSchema } from './PostPaymentIntentsRequestUsBankAccount';
/**
 * payment_method_data_params
 *
 * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
property on the PaymentIntent.
 */
export interface PostPaymentIntentsRequestPaymentMethodData {
  /**
   * payment_method_param
   */
  acssDebit?: PostPaymentIntentsRequestAcssDebit;
  /**
   * param
   */
  affirm?: any;
  /**
   * param
   */
  afterpayClearpay?: any;
  /**
   * param
   */
  alipay?: any;
  allowRedisplay?: string;
  /**
   * param
   */
  alma?: any;
  /**
   * param
   */
  amazonPay?: any;
  /**
   * param
   */
  auBecsDebit?: PostPaymentIntentsRequestAuBecsDebit;
  /**
   * param
   */
  bacsDebit?: PostPaymentIntentsRequestBacsDebit;
  /**
   * param
   */
  bancontact?: any;
  /**
   * param
   */
  billie?: any;
  /**
   * billing_details_inner_params
   */
  billingDetails?: PostPaymentIntentsRequestBillingDetails;
  /**
   * param
   */
  blik?: any;
  /**
   * param
   */
  boleto?: PostPaymentIntentsRequestBoleto;
  /**
   * param
   */
  cashapp?: any;
  /**
   * param
   */
  crypto?: any;
  /**
   * param
   */
  customerBalance?: any;
  /**
   * param
   */
  eps?: PostPaymentIntentsRequestEps;
  /**
   * param
   */
  fpx?: PostPaymentIntentsRequestFpx;
  /**
   * param
   */
  giropay?: any;
  /**
   * param
   */
  grabpay?: any;
  /**
   * param
   */
  ideal?: PostPaymentIntentsRequestIdeal;
  /**
   * param
   */
  interacPresent?: any;
  /**
   * param
   */
  kakaoPay?: any;
  /**
   * param
   */
  klarna?: PostPaymentIntentsRequestKlarna;
  /**
   * param
   */
  konbini?: any;
  /**
   * param
   */
  krCard?: any;
  /**
   * param
   */
  link?: any;
  /**
   * param
   */
  mbWay?: any;
  metadata?: PostAccountsRequestMetadataObject;
  /**
   * param
   */
  mobilepay?: any;
  /**
   * param
   */
  multibanco?: any;
  /**
   * param
   */
  naverPay?: PostPaymentIntentsRequestNaverPay;
  /**
   * param
   */
  nzBankAccount?: PostPaymentIntentsRequestNzBankAccount;
  /**
   * param
   */
  oxxo?: any;
  /**
   * param
   */
  p24?: PostPaymentIntentsRequestP24;
  /**
   * param
   */
  payByBank?: any;
  /**
   * param
   */
  payco?: any;
  /**
   * param
   */
  paynow?: any;
  /**
   * param
   */
  paypal?: any;
  /**
   * param
   */
  pix?: any;
  /**
   * param
   */
  promptpay?: any;
  /**
   * radar_options_with_hidden_options
   */
  radarOptions?: PostPaymentIntentsRequestRadarOptions;
  /**
   * param
   */
  revolutPay?: any;
  /**
   * param
   */
  samsungPay?: any;
  /**
   * param
   */
  satispay?: any;
  /**
   * param
   */
  sepaDebit?: PostPaymentIntentsRequestSepaDebit;
  /**
   * param
   */
  sofort?: PostPaymentIntentsRequestSofort;
  /**
   * param
   */
  swish?: any;
  /**
   * param
   */
  twint?: any;
  type: string;
  /**
   * payment_method_param
   */
  usBankAccount?: PostPaymentIntentsRequestUsBankAccount;
  /**
   * param
   */
  wechatPay?: any;
  /**
   * param
   */
  zip?: any;
}

export const PostPaymentIntentsRequestPaymentMethodDataSchema: TypedSchema<PostPaymentIntentsRequestPaymentMethodData> = typed<PostPaymentIntentsRequestPaymentMethodData>(object({
  get acssDebit() { return optional(PostPaymentIntentsRequestAcssDebitSchema) },
  affirm: optional(unknown()),
  afterpayClearpay: optional(unknown()),
  alipay: optional(unknown()),
  allowRedisplay: optional(string()),
  alma: optional(unknown()),
  amazonPay: optional(unknown()),
  get auBecsDebit() { return optional(PostPaymentIntentsRequestAuBecsDebitSchema) },
  get bacsDebit() { return optional(PostPaymentIntentsRequestBacsDebitSchema) },
  bancontact: optional(unknown()),
  billie: optional(unknown()),
  get billingDetails() { return optional(PostPaymentIntentsRequestBillingDetailsSchema) },
  blik: optional(unknown()),
  get boleto() { return optional(PostPaymentIntentsRequestBoletoSchema) },
  cashapp: optional(unknown()),
  crypto: optional(unknown()),
  customerBalance: optional(unknown()),
  get eps() { return optional(PostPaymentIntentsRequestEpsSchema) },
  get fpx() { return optional(PostPaymentIntentsRequestFpxSchema) },
  giropay: optional(unknown()),
  grabpay: optional(unknown()),
  get ideal() { return optional(PostPaymentIntentsRequestIdealSchema) },
  interacPresent: optional(unknown()),
  kakaoPay: optional(unknown()),
  get klarna() { return optional(PostPaymentIntentsRequestKlarnaSchema) },
  konbini: optional(unknown()),
  krCard: optional(unknown()),
  link: optional(unknown()),
  mbWay: optional(unknown()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  mobilepay: optional(unknown()),
  multibanco: optional(unknown()),
  get naverPay() { return optional(PostPaymentIntentsRequestNaverPaySchema) },
  get nzBankAccount() { return optional(PostPaymentIntentsRequestNzBankAccountSchema) },
  oxxo: optional(unknown()),
  get p24() { return optional(PostPaymentIntentsRequestP24Schema) },
  payByBank: optional(unknown()),
  payco: optional(unknown()),
  paynow: optional(unknown()),
  paypal: optional(unknown()),
  pix: optional(unknown()),
  promptpay: optional(unknown()),
  get radarOptions() { return optional(PostPaymentIntentsRequestRadarOptionsSchema) },
  revolutPay: optional(unknown()),
  samsungPay: optional(unknown()),
  satispay: optional(unknown()),
  get sepaDebit() { return optional(PostPaymentIntentsRequestSepaDebitSchema) },
  get sofort() { return optional(PostPaymentIntentsRequestSofortSchema) },
  swish: optional(unknown()),
  twint: optional(unknown()),
  type: string(),
  get usBankAccount() { return optional(PostPaymentIntentsRequestUsBankAccountSchema) },
  wechatPay: optional(unknown()),
  zip: optional(unknown()),
}));