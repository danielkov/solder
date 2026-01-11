import { TypedSchema, array, object, optional, string, typed, unknown } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostChargesRequestRadarOptions } from './PostChargesRequestRadarOptions';
import { PostChargesRequestRadarOptionsSchema } from './PostChargesRequestRadarOptions';
import type { PostPaymentMethodsRequestAcssDebit } from './PostPaymentMethodsRequestAcssDebit';
import { PostPaymentMethodsRequestAcssDebitSchema } from './PostPaymentMethodsRequestAcssDebit';
import type { PostPaymentMethodsRequestAuBecsDebit } from './PostPaymentMethodsRequestAuBecsDebit';
import { PostPaymentMethodsRequestAuBecsDebitSchema } from './PostPaymentMethodsRequestAuBecsDebit';
import type { PostPaymentMethodsRequestBacsDebit } from './PostPaymentMethodsRequestBacsDebit';
import { PostPaymentMethodsRequestBacsDebitSchema } from './PostPaymentMethodsRequestBacsDebit';
import type { PostPaymentMethodsRequestBillingDetails } from './PostPaymentMethodsRequestBillingDetails';
import { PostPaymentMethodsRequestBillingDetailsSchema } from './PostPaymentMethodsRequestBillingDetails';
import type { PostPaymentMethodsRequestBoleto } from './PostPaymentMethodsRequestBoleto';
import { PostPaymentMethodsRequestBoletoSchema } from './PostPaymentMethodsRequestBoleto';
import type { PostPaymentMethodsRequestCard } from './PostPaymentMethodsRequestCard';
import { PostPaymentMethodsRequestCardSchema } from './PostPaymentMethodsRequestCard';
import type { PostPaymentMethodsRequestCustom } from './PostPaymentMethodsRequestCustom';
import { PostPaymentMethodsRequestCustomSchema } from './PostPaymentMethodsRequestCustom';
import type { PostPaymentMethodsRequestEps } from './PostPaymentMethodsRequestEps';
import { PostPaymentMethodsRequestEpsSchema } from './PostPaymentMethodsRequestEps';
import type { PostPaymentMethodsRequestFpx } from './PostPaymentMethodsRequestFpx';
import { PostPaymentMethodsRequestFpxSchema } from './PostPaymentMethodsRequestFpx';
import type { PostPaymentMethodsRequestIdeal } from './PostPaymentMethodsRequestIdeal';
import { PostPaymentMethodsRequestIdealSchema } from './PostPaymentMethodsRequestIdeal';
import type { PostPaymentMethodsRequestKlarna } from './PostPaymentMethodsRequestKlarna';
import { PostPaymentMethodsRequestKlarnaSchema } from './PostPaymentMethodsRequestKlarna';
import type { PostPaymentMethodsRequestNaverPay } from './PostPaymentMethodsRequestNaverPay';
import { PostPaymentMethodsRequestNaverPaySchema } from './PostPaymentMethodsRequestNaverPay';
import type { PostPaymentMethodsRequestNzBankAccount } from './PostPaymentMethodsRequestNzBankAccount';
import { PostPaymentMethodsRequestNzBankAccountSchema } from './PostPaymentMethodsRequestNzBankAccount';
import type { PostPaymentMethodsRequestP24 } from './PostPaymentMethodsRequestP24';
import { PostPaymentMethodsRequestP24Schema } from './PostPaymentMethodsRequestP24';
import type { PostPaymentMethodsRequestSepaDebit } from './PostPaymentMethodsRequestSepaDebit';
import { PostPaymentMethodsRequestSepaDebitSchema } from './PostPaymentMethodsRequestSepaDebit';
import type { PostPaymentMethodsRequestSofort } from './PostPaymentMethodsRequestSofort';
import { PostPaymentMethodsRequestSofortSchema } from './PostPaymentMethodsRequestSofort';
import type { PostPaymentMethodsRequestUsBankAccount } from './PostPaymentMethodsRequestUsBankAccount';
import { PostPaymentMethodsRequestUsBankAccountSchema } from './PostPaymentMethodsRequestUsBankAccount';
export interface PostPaymentMethodsRequest {
  /**
   * payment_method_param
   *
   * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
   */
  acssDebit?: PostPaymentMethodsRequestAcssDebit;
  /**
   * param
   *
   * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
   */
  affirm?: any;
  /**
   * param
   *
   * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
   */
  afterpayClearpay?: any;
  /**
   * param
   *
   * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
   */
  alipay?: any;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
   */
  allowRedisplay?: string;
  /**
   * param
   *
   * If this is a Alma PaymentMethod, this hash contains details about the Alma payment method.
   */
  alma?: any;
  /**
   * param
   *
   * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
   */
  amazonPay?: any;
  /**
   * param
   *
   * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
   */
  auBecsDebit?: PostPaymentMethodsRequestAuBecsDebit;
  /**
   * param
   *
   * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
   */
  bacsDebit?: PostPaymentMethodsRequestBacsDebit;
  /**
   * param
   *
   * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
   */
  bancontact?: any;
  /**
   * param
   *
   * If this is a `billie` PaymentMethod, this hash contains details about the Billie payment method.
   */
  billie?: any;
  /**
   * billing_details_inner_params
   *
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billingDetails?: PostPaymentMethodsRequestBillingDetails;
  /**
   * param
   *
   * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
   */
  blik?: any;
  /**
   * param
   *
   * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
   */
  boleto?: PostPaymentMethodsRequestBoleto;
  /**
   * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When providing a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
   */
  card?: PostPaymentMethodsRequestCard;
  /**
   * param
   *
   * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
   */
  cashapp?: any;
  /**
   * param
   *
   * If this is a Crypto PaymentMethod, this hash contains details about the Crypto payment method.
   */
  crypto?: any;
  /**
   * create_param
   *
   * If this is a `custom` PaymentMethod, this hash contains details about the Custom payment method.
   */
  custom?: PostPaymentMethodsRequestCustom;
  /**
   * The `Customer` to whom the original PaymentMethod is attached.
   */
  customer?: string;
  /**
   * param
   *
   * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
   */
  customerBalance?: any;
  /**
   * param
   *
   * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
   */
  eps?: PostPaymentMethodsRequestEps;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * param
   *
   * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
   */
  fpx?: PostPaymentMethodsRequestFpx;
  /**
   * param
   *
   * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
   */
  giropay?: any;
  /**
   * param
   *
   * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
   */
  grabpay?: any;
  /**
   * param
   *
   * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
   */
  ideal?: PostPaymentMethodsRequestIdeal;
  /**
   * param
   *
   * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
   */
  interacPresent?: any;
  /**
   * param
   *
   * If this is a `kakao_pay` PaymentMethod, this hash contains details about the Kakao Pay payment method.
   */
  kakaoPay?: any;
  /**
   * param
   *
   * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
   */
  klarna?: PostPaymentMethodsRequestKlarna;
  /**
   * param
   *
   * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
   */
  konbini?: any;
  /**
   * param
   *
   * If this is a `kr_card` PaymentMethod, this hash contains details about the Korean Card payment method.
   */
  krCard?: any;
  /**
   * param
   *
   * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
   */
  link?: any;
  /**
   * param
   *
   * If this is a MB WAY PaymentMethod, this hash contains details about the MB WAY payment method.
   */
  mbWay?: any;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * param
   *
   * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
   */
  mobilepay?: any;
  /**
   * param
   *
   * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
   */
  multibanco?: any;
  /**
   * param
   *
   * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
   */
  naverPay?: PostPaymentMethodsRequestNaverPay;
  /**
   * param
   *
   * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
   */
  nzBankAccount?: PostPaymentMethodsRequestNzBankAccount;
  /**
   * param
   *
   * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
   */
  oxxo?: any;
  /**
   * param
   *
   * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
   */
  p24?: PostPaymentMethodsRequestP24;
  /**
   * param
   *
   * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
   */
  payByBank?: any;
  /**
   * param
   *
   * If this is a `payco` PaymentMethod, this hash contains details about the PAYCO payment method.
   */
  payco?: any;
  /**
   * The PaymentMethod to share.
   */
  paymentMethod?: string;
  /**
   * param
   *
   * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
   */
  paynow?: any;
  /**
   * param
   *
   * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
   */
  paypal?: any;
  /**
   * param
   *
   * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
   */
  pix?: any;
  /**
   * param
   *
   * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
   */
  promptpay?: any;
  /**
   * radar_options_with_hidden_options
   *
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: PostChargesRequestRadarOptions;
  /**
   * param
   *
   * If this is a `revolut_pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
   */
  revolutPay?: any;
  /**
   * param
   *
   * If this is a `samsung_pay` PaymentMethod, this hash contains details about the SamsungPay payment method.
   */
  samsungPay?: any;
  /**
   * param
   *
   * If this is a `satispay` PaymentMethod, this hash contains details about the Satispay payment method.
   */
  satispay?: any;
  /**
   * param
   *
   * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
   */
  sepaDebit?: PostPaymentMethodsRequestSepaDebit;
  /**
   * param
   *
   * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
   */
  sofort?: PostPaymentMethodsRequestSofort;
  /**
   * param
   *
   * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
   */
  swish?: any;
  /**
   * param
   *
   * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
   */
  twint?: any;
  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
  type?: string;
  /**
   * payment_method_param
   *
   * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
   */
  usBankAccount?: PostPaymentMethodsRequestUsBankAccount;
  /**
   * param
   *
   * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
   */
  wechatPay?: any;
  /**
   * param
   *
   * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
   */
  zip?: any;
}

export const PostPaymentMethodsRequestSchema: TypedSchema<PostPaymentMethodsRequest> = typed<PostPaymentMethodsRequest>(object({
  get acssDebit() { return optional(PostPaymentMethodsRequestAcssDebitSchema) },
  affirm: optional(unknown()),
  afterpayClearpay: optional(unknown()),
  alipay: optional(unknown()),
  allowRedisplay: optional(string()),
  alma: optional(unknown()),
  amazonPay: optional(unknown()),
  get auBecsDebit() { return optional(PostPaymentMethodsRequestAuBecsDebitSchema) },
  get bacsDebit() { return optional(PostPaymentMethodsRequestBacsDebitSchema) },
  bancontact: optional(unknown()),
  billie: optional(unknown()),
  get billingDetails() { return optional(PostPaymentMethodsRequestBillingDetailsSchema) },
  blik: optional(unknown()),
  get boleto() { return optional(PostPaymentMethodsRequestBoletoSchema) },
  get card() { return optional(PostPaymentMethodsRequestCardSchema) },
  cashapp: optional(unknown()),
  crypto: optional(unknown()),
  get custom() { return optional(PostPaymentMethodsRequestCustomSchema) },
  customer: optional(string()),
  customerBalance: optional(unknown()),
  get eps() { return optional(PostPaymentMethodsRequestEpsSchema) },
  expand: optional(array(string())),
  get fpx() { return optional(PostPaymentMethodsRequestFpxSchema) },
  giropay: optional(unknown()),
  grabpay: optional(unknown()),
  get ideal() { return optional(PostPaymentMethodsRequestIdealSchema) },
  interacPresent: optional(unknown()),
  kakaoPay: optional(unknown()),
  get klarna() { return optional(PostPaymentMethodsRequestKlarnaSchema) },
  konbini: optional(unknown()),
  krCard: optional(unknown()),
  link: optional(unknown()),
  mbWay: optional(unknown()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  mobilepay: optional(unknown()),
  multibanco: optional(unknown()),
  get naverPay() { return optional(PostPaymentMethodsRequestNaverPaySchema) },
  get nzBankAccount() { return optional(PostPaymentMethodsRequestNzBankAccountSchema) },
  oxxo: optional(unknown()),
  get p24() { return optional(PostPaymentMethodsRequestP24Schema) },
  payByBank: optional(unknown()),
  payco: optional(unknown()),
  paymentMethod: optional(string()),
  paynow: optional(unknown()),
  paypal: optional(unknown()),
  pix: optional(unknown()),
  promptpay: optional(unknown()),
  get radarOptions() { return optional(PostChargesRequestRadarOptionsSchema) },
  revolutPay: optional(unknown()),
  samsungPay: optional(unknown()),
  satispay: optional(unknown()),
  get sepaDebit() { return optional(PostPaymentMethodsRequestSepaDebitSchema) },
  get sofort() { return optional(PostPaymentMethodsRequestSofortSchema) },
  swish: optional(unknown()),
  twint: optional(unknown()),
  type: optional(string()),
  get usBankAccount() { return optional(PostPaymentMethodsRequestUsBankAccountSchema) },
  wechatPay: optional(unknown()),
  zip: optional(unknown()),
}));