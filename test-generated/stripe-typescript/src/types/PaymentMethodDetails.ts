import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsAlipayDetails } from './PaymentFlowsPrivatePaymentMethodsAlipayDetails';
import { PaymentFlowsPrivatePaymentMethodsAlipayDetailsSchema } from './PaymentFlowsPrivatePaymentMethodsAlipayDetails';
import type { PaymentMethodDetailsAchCreditTransfer } from './PaymentMethodDetailsAchCreditTransfer';
import { PaymentMethodDetailsAchCreditTransferSchema } from './PaymentMethodDetailsAchCreditTransfer';
import type { PaymentMethodDetailsAchDebit } from './PaymentMethodDetailsAchDebit';
import { PaymentMethodDetailsAchDebitSchema } from './PaymentMethodDetailsAchDebit';
import type { PaymentMethodDetailsAcssDebit } from './PaymentMethodDetailsAcssDebit';
import { PaymentMethodDetailsAcssDebitSchema } from './PaymentMethodDetailsAcssDebit';
import type { PaymentMethodDetailsAffirm } from './PaymentMethodDetailsAffirm';
import { PaymentMethodDetailsAffirmSchema } from './PaymentMethodDetailsAffirm';
import type { PaymentMethodDetailsAfterpayClearpay } from './PaymentMethodDetailsAfterpayClearpay';
import { PaymentMethodDetailsAfterpayClearpaySchema } from './PaymentMethodDetailsAfterpayClearpay';
import type { PaymentMethodDetailsAlma } from './PaymentMethodDetailsAlma';
import { PaymentMethodDetailsAlmaSchema } from './PaymentMethodDetailsAlma';
import type { PaymentMethodDetailsAmazonPay } from './PaymentMethodDetailsAmazonPay';
import { PaymentMethodDetailsAmazonPaySchema } from './PaymentMethodDetailsAmazonPay';
import type { PaymentMethodDetailsAuBecsDebit } from './PaymentMethodDetailsAuBecsDebit';
import { PaymentMethodDetailsAuBecsDebitSchema } from './PaymentMethodDetailsAuBecsDebit';
import type { PaymentMethodDetailsBacsDebit } from './PaymentMethodDetailsBacsDebit';
import { PaymentMethodDetailsBacsDebitSchema } from './PaymentMethodDetailsBacsDebit';
import type { PaymentMethodDetailsBancontact } from './PaymentMethodDetailsBancontact';
import { PaymentMethodDetailsBancontactSchema } from './PaymentMethodDetailsBancontact';
import type { PaymentMethodDetailsBillie } from './PaymentMethodDetailsBillie';
import { PaymentMethodDetailsBillieSchema } from './PaymentMethodDetailsBillie';
import type { PaymentMethodDetailsBlik } from './PaymentMethodDetailsBlik';
import { PaymentMethodDetailsBlikSchema } from './PaymentMethodDetailsBlik';
import type { PaymentMethodDetailsBoleto } from './PaymentMethodDetailsBoleto';
import { PaymentMethodDetailsBoletoSchema } from './PaymentMethodDetailsBoleto';
import type { PaymentMethodDetailsCard } from './PaymentMethodDetailsCard';
import { PaymentMethodDetailsCardSchema } from './PaymentMethodDetailsCard';
import type { PaymentMethodDetailsCardPresent } from './PaymentMethodDetailsCardPresent';
import { PaymentMethodDetailsCardPresentSchema } from './PaymentMethodDetailsCardPresent';
import type { PaymentMethodDetailsCashapp } from './PaymentMethodDetailsCashapp';
import { PaymentMethodDetailsCashappSchema } from './PaymentMethodDetailsCashapp';
import type { PaymentMethodDetailsCrypto } from './PaymentMethodDetailsCrypto';
import { PaymentMethodDetailsCryptoSchema } from './PaymentMethodDetailsCrypto';
import type { PaymentMethodDetailsCustomerBalance } from './PaymentMethodDetailsCustomerBalance';
import { PaymentMethodDetailsCustomerBalanceSchema } from './PaymentMethodDetailsCustomerBalance';
import type { PaymentMethodDetailsEps } from './PaymentMethodDetailsEps';
import { PaymentMethodDetailsEpsSchema } from './PaymentMethodDetailsEps';
import type { PaymentMethodDetailsFpx } from './PaymentMethodDetailsFpx';
import { PaymentMethodDetailsFpxSchema } from './PaymentMethodDetailsFpx';
import type { PaymentMethodDetailsGiropay } from './PaymentMethodDetailsGiropay';
import { PaymentMethodDetailsGiropaySchema } from './PaymentMethodDetailsGiropay';
import type { PaymentMethodDetailsGrabpay } from './PaymentMethodDetailsGrabpay';
import { PaymentMethodDetailsGrabpaySchema } from './PaymentMethodDetailsGrabpay';
import type { PaymentMethodDetailsIdeal } from './PaymentMethodDetailsIdeal';
import { PaymentMethodDetailsIdealSchema } from './PaymentMethodDetailsIdeal';
import type { PaymentMethodDetailsInteracPresent } from './PaymentMethodDetailsInteracPresent';
import { PaymentMethodDetailsInteracPresentSchema } from './PaymentMethodDetailsInteracPresent';
import type { PaymentMethodDetailsKakaoPay } from './PaymentMethodDetailsKakaoPay';
import { PaymentMethodDetailsKakaoPaySchema } from './PaymentMethodDetailsKakaoPay';
import type { PaymentMethodDetailsKlarna } from './PaymentMethodDetailsKlarna';
import { PaymentMethodDetailsKlarnaSchema } from './PaymentMethodDetailsKlarna';
import type { PaymentMethodDetailsKonbini } from './PaymentMethodDetailsKonbini';
import { PaymentMethodDetailsKonbiniSchema } from './PaymentMethodDetailsKonbini';
import type { PaymentMethodDetailsKrCard } from './PaymentMethodDetailsKrCard';
import { PaymentMethodDetailsKrCardSchema } from './PaymentMethodDetailsKrCard';
import type { PaymentMethodDetailsLink } from './PaymentMethodDetailsLink';
import { PaymentMethodDetailsLinkSchema } from './PaymentMethodDetailsLink';
import type { PaymentMethodDetailsMbWay } from './PaymentMethodDetailsMbWay';
import { PaymentMethodDetailsMbWaySchema } from './PaymentMethodDetailsMbWay';
import type { PaymentMethodDetailsMobilepay } from './PaymentMethodDetailsMobilepay';
import { PaymentMethodDetailsMobilepaySchema } from './PaymentMethodDetailsMobilepay';
import type { PaymentMethodDetailsMultibanco } from './PaymentMethodDetailsMultibanco';
import { PaymentMethodDetailsMultibancoSchema } from './PaymentMethodDetailsMultibanco';
import type { PaymentMethodDetailsNaverPay } from './PaymentMethodDetailsNaverPay';
import { PaymentMethodDetailsNaverPaySchema } from './PaymentMethodDetailsNaverPay';
import type { PaymentMethodDetailsNzBankAccount } from './PaymentMethodDetailsNzBankAccount';
import { PaymentMethodDetailsNzBankAccountSchema } from './PaymentMethodDetailsNzBankAccount';
import type { PaymentMethodDetailsOxxo } from './PaymentMethodDetailsOxxo';
import { PaymentMethodDetailsOxxoSchema } from './PaymentMethodDetailsOxxo';
import type { PaymentMethodDetailsP24 } from './PaymentMethodDetailsP24';
import { PaymentMethodDetailsP24Schema } from './PaymentMethodDetailsP24';
import type { PaymentMethodDetailsPayByBank } from './PaymentMethodDetailsPayByBank';
import { PaymentMethodDetailsPayByBankSchema } from './PaymentMethodDetailsPayByBank';
import type { PaymentMethodDetailsPayco } from './PaymentMethodDetailsPayco';
import { PaymentMethodDetailsPaycoSchema } from './PaymentMethodDetailsPayco';
import type { PaymentMethodDetailsPaynow } from './PaymentMethodDetailsPaynow';
import { PaymentMethodDetailsPaynowSchema } from './PaymentMethodDetailsPaynow';
import type { PaymentMethodDetailsPaypal } from './PaymentMethodDetailsPaypal';
import { PaymentMethodDetailsPaypalSchema } from './PaymentMethodDetailsPaypal';
import type { PaymentMethodDetailsPix } from './PaymentMethodDetailsPix';
import { PaymentMethodDetailsPixSchema } from './PaymentMethodDetailsPix';
import type { PaymentMethodDetailsPromptpay } from './PaymentMethodDetailsPromptpay';
import { PaymentMethodDetailsPromptpaySchema } from './PaymentMethodDetailsPromptpay';
import type { PaymentMethodDetailsRevolutPay } from './PaymentMethodDetailsRevolutPay';
import { PaymentMethodDetailsRevolutPaySchema } from './PaymentMethodDetailsRevolutPay';
import type { PaymentMethodDetailsSamsungPay } from './PaymentMethodDetailsSamsungPay';
import { PaymentMethodDetailsSamsungPaySchema } from './PaymentMethodDetailsSamsungPay';
import type { PaymentMethodDetailsSatispay } from './PaymentMethodDetailsSatispay';
import { PaymentMethodDetailsSatispaySchema } from './PaymentMethodDetailsSatispay';
import type { PaymentMethodDetailsSepaDebit } from './PaymentMethodDetailsSepaDebit';
import { PaymentMethodDetailsSepaDebitSchema } from './PaymentMethodDetailsSepaDebit';
import type { PaymentMethodDetailsSofort } from './PaymentMethodDetailsSofort';
import { PaymentMethodDetailsSofortSchema } from './PaymentMethodDetailsSofort';
import type { PaymentMethodDetailsStripeAccount } from './PaymentMethodDetailsStripeAccount';
import { PaymentMethodDetailsStripeAccountSchema } from './PaymentMethodDetailsStripeAccount';
import type { PaymentMethodDetailsSwish } from './PaymentMethodDetailsSwish';
import { PaymentMethodDetailsSwishSchema } from './PaymentMethodDetailsSwish';
import type { PaymentMethodDetailsTwint } from './PaymentMethodDetailsTwint';
import { PaymentMethodDetailsTwintSchema } from './PaymentMethodDetailsTwint';
import type { PaymentMethodDetailsUsBankAccount } from './PaymentMethodDetailsUsBankAccount';
import { PaymentMethodDetailsUsBankAccountSchema } from './PaymentMethodDetailsUsBankAccount';
import type { PaymentMethodDetailsWechat } from './PaymentMethodDetailsWechat';
import { PaymentMethodDetailsWechatSchema } from './PaymentMethodDetailsWechat';
import type { PaymentMethodDetailsWechatPay } from './PaymentMethodDetailsWechatPay';
import { PaymentMethodDetailsWechatPaySchema } from './PaymentMethodDetailsWechatPay';
import type { PaymentMethodDetailsZip } from './PaymentMethodDetailsZip';
import { PaymentMethodDetailsZipSchema } from './PaymentMethodDetailsZip';
/**
 * payment_method_details
 *
 * 
 */
export interface PaymentMethodDetails {
  /**
   * payment_method_details_ach_credit_transfer
   *
   * 
   */
  achCreditTransfer?: PaymentMethodDetailsAchCreditTransfer;
  /**
   * payment_method_details_ach_debit
   *
   * 
   */
  achDebit?: PaymentMethodDetailsAchDebit;
  /**
   * payment_method_details_acss_debit
   *
   * 
   */
  acssDebit?: PaymentMethodDetailsAcssDebit;
  /**
   * payment_method_details_affirm
   *
   * 
   */
  affirm?: PaymentMethodDetailsAffirm;
  /**
   * payment_method_details_afterpay_clearpay
   *
   * 
   */
  afterpayClearpay?: PaymentMethodDetailsAfterpayClearpay;
  /**
   * PaymentFlowsPrivatePaymentMethodsAlipayDetails
   *
   * 
   */
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipayDetails;
  /**
   * payment_method_details_alma
   *
   * 
   */
  alma?: PaymentMethodDetailsAlma;
  /**
   * payment_method_details_amazon_pay
   *
   * 
   */
  amazonPay?: PaymentMethodDetailsAmazonPay;
  /**
   * payment_method_details_au_becs_debit
   *
   * 
   */
  auBecsDebit?: PaymentMethodDetailsAuBecsDebit;
  /**
   * payment_method_details_bacs_debit
   *
   * 
   */
  bacsDebit?: PaymentMethodDetailsBacsDebit;
  /**
   * payment_method_details_bancontact
   *
   * 
   */
  bancontact?: PaymentMethodDetailsBancontact;
  /**
   * payment_method_details_billie
   *
   * 
   */
  billie?: PaymentMethodDetailsBillie;
  /**
   * payment_method_details_blik
   *
   * 
   */
  blik?: PaymentMethodDetailsBlik;
  /**
   * payment_method_details_boleto
   *
   * 
   */
  boleto?: PaymentMethodDetailsBoleto;
  /**
   * payment_method_details_card
   *
   * 
   */
  card?: PaymentMethodDetailsCard;
  /**
   * payment_method_details_card_present
   *
   * 
   */
  cardPresent?: PaymentMethodDetailsCardPresent;
  /**
   * payment_method_details_cashapp
   *
   * 
   */
  cashapp?: PaymentMethodDetailsCashapp;
  /**
   * payment_method_details_crypto
   *
   * 
   */
  crypto?: PaymentMethodDetailsCrypto;
  /**
   * payment_method_details_customer_balance
   *
   * 
   */
  customerBalance?: PaymentMethodDetailsCustomerBalance;
  /**
   * payment_method_details_eps
   *
   * 
   */
  eps?: PaymentMethodDetailsEps;
  /**
   * payment_method_details_fpx
   *
   * 
   */
  fpx?: PaymentMethodDetailsFpx;
  /**
   * payment_method_details_giropay
   *
   * 
   */
  giropay?: PaymentMethodDetailsGiropay;
  /**
   * payment_method_details_grabpay
   *
   * 
   */
  grabpay?: PaymentMethodDetailsGrabpay;
  /**
   * payment_method_details_ideal
   *
   * 
   */
  ideal?: PaymentMethodDetailsIdeal;
  /**
   * payment_method_details_interac_present
   *
   * 
   */
  interacPresent?: PaymentMethodDetailsInteracPresent;
  /**
   * payment_method_details_kakao_pay
   *
   * 
   */
  kakaoPay?: PaymentMethodDetailsKakaoPay;
  /**
   * payment_method_details_klarna
   *
   * 
   */
  klarna?: PaymentMethodDetailsKlarna;
  /**
   * payment_method_details_konbini
   *
   * 
   */
  konbini?: PaymentMethodDetailsKonbini;
  /**
   * payment_method_details_kr_card
   *
   * 
   */
  krCard?: PaymentMethodDetailsKrCard;
  /**
   * payment_method_details_link
   *
   * 
   */
  link?: PaymentMethodDetailsLink;
  /**
   * payment_method_details_mb_way
   *
   * 
   */
  mbWay?: PaymentMethodDetailsMbWay;
  /**
   * payment_method_details_mobilepay
   *
   * 
   */
  mobilepay?: PaymentMethodDetailsMobilepay;
  /**
   * payment_method_details_multibanco
   *
   * 
   */
  multibanco?: PaymentMethodDetailsMultibanco;
  /**
   * payment_method_details_naver_pay
   *
   * 
   */
  naverPay?: PaymentMethodDetailsNaverPay;
  /**
   * payment_method_details_nz_bank_account
   *
   * 
   */
  nzBankAccount?: PaymentMethodDetailsNzBankAccount;
  /**
   * payment_method_details_oxxo
   *
   * 
   */
  oxxo?: PaymentMethodDetailsOxxo;
  /**
   * payment_method_details_p24
   *
   * 
   */
  p24?: PaymentMethodDetailsP24;
  /**
   * payment_method_details_pay_by_bank
   *
   * 
   */
  payByBank?: PaymentMethodDetailsPayByBank;
  /**
   * payment_method_details_payco
   *
   * 
   */
  payco?: PaymentMethodDetailsPayco;
  /**
   * payment_method_details_paynow
   *
   * 
   */
  paynow?: PaymentMethodDetailsPaynow;
  /**
   * payment_method_details_paypal
   *
   * 
   */
  paypal?: PaymentMethodDetailsPaypal;
  /**
   * payment_method_details_pix
   *
   * 
   */
  pix?: PaymentMethodDetailsPix;
  /**
   * payment_method_details_promptpay
   *
   * 
   */
  promptpay?: PaymentMethodDetailsPromptpay;
  /**
   * payment_method_details_revolut_pay
   *
   * 
   */
  revolutPay?: PaymentMethodDetailsRevolutPay;
  /**
   * payment_method_details_samsung_pay
   *
   * 
   */
  samsungPay?: PaymentMethodDetailsSamsungPay;
  /**
   * payment_method_details_satispay
   *
   * 
   */
  satispay?: PaymentMethodDetailsSatispay;
  /**
   * payment_method_details_sepa_debit
   *
   * 
   */
  sepaDebit?: PaymentMethodDetailsSepaDebit;
  /**
   * payment_method_details_sofort
   *
   * 
   */
  sofort?: PaymentMethodDetailsSofort;
  /**
   * payment_method_details_stripe_account
   *
   * 
   */
  stripeAccount?: PaymentMethodDetailsStripeAccount;
  /**
   * payment_method_details_swish
   *
   * 
   */
  swish?: PaymentMethodDetailsSwish;
  /**
   * payment_method_details_twint
   *
   * 
   */
  twint?: PaymentMethodDetailsTwint;
  /**
   * The type of transaction-specific details of the payment method used in the payment. See [PaymentMethod.type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type) for the full list of possible types.
An additional hash is included on `payment_method_details` with a name matching this value.
It contains information specific to the payment method.
   */
  type: string;
  /**
   * payment_method_details_us_bank_account
   *
   * 
   */
  usBankAccount?: PaymentMethodDetailsUsBankAccount;
  /**
   * payment_method_details_wechat
   *
   * 
   */
  wechat?: PaymentMethodDetailsWechat;
  /**
   * payment_method_details_wechat_pay
   *
   * 
   */
  wechatPay?: PaymentMethodDetailsWechatPay;
  /**
   * payment_method_details_zip
   *
   * 
   */
  zip?: PaymentMethodDetailsZip;
}

export const PaymentMethodDetailsSchema: TypedSchema<PaymentMethodDetails> = typed<PaymentMethodDetails>(object({
  get achCreditTransfer() { return optional(PaymentMethodDetailsAchCreditTransferSchema) },
  get achDebit() { return optional(PaymentMethodDetailsAchDebitSchema) },
  get acssDebit() { return optional(PaymentMethodDetailsAcssDebitSchema) },
  get affirm() { return optional(PaymentMethodDetailsAffirmSchema) },
  get afterpayClearpay() { return optional(PaymentMethodDetailsAfterpayClearpaySchema) },
  get alipay() { return optional(PaymentFlowsPrivatePaymentMethodsAlipayDetailsSchema) },
  get alma() { return optional(PaymentMethodDetailsAlmaSchema) },
  get amazonPay() { return optional(PaymentMethodDetailsAmazonPaySchema) },
  get auBecsDebit() { return optional(PaymentMethodDetailsAuBecsDebitSchema) },
  get bacsDebit() { return optional(PaymentMethodDetailsBacsDebitSchema) },
  get bancontact() { return optional(PaymentMethodDetailsBancontactSchema) },
  get billie() { return optional(PaymentMethodDetailsBillieSchema) },
  get blik() { return optional(PaymentMethodDetailsBlikSchema) },
  get boleto() { return optional(PaymentMethodDetailsBoletoSchema) },
  get card() { return optional(PaymentMethodDetailsCardSchema) },
  get cardPresent() { return optional(PaymentMethodDetailsCardPresentSchema) },
  get cashapp() { return optional(PaymentMethodDetailsCashappSchema) },
  get crypto() { return optional(PaymentMethodDetailsCryptoSchema) },
  get customerBalance() { return optional(PaymentMethodDetailsCustomerBalanceSchema) },
  get eps() { return optional(PaymentMethodDetailsEpsSchema) },
  get fpx() { return optional(PaymentMethodDetailsFpxSchema) },
  get giropay() { return optional(PaymentMethodDetailsGiropaySchema) },
  get grabpay() { return optional(PaymentMethodDetailsGrabpaySchema) },
  get ideal() { return optional(PaymentMethodDetailsIdealSchema) },
  get interacPresent() { return optional(PaymentMethodDetailsInteracPresentSchema) },
  get kakaoPay() { return optional(PaymentMethodDetailsKakaoPaySchema) },
  get klarna() { return optional(PaymentMethodDetailsKlarnaSchema) },
  get konbini() { return optional(PaymentMethodDetailsKonbiniSchema) },
  get krCard() { return optional(PaymentMethodDetailsKrCardSchema) },
  get link() { return optional(PaymentMethodDetailsLinkSchema) },
  get mbWay() { return optional(PaymentMethodDetailsMbWaySchema) },
  get mobilepay() { return optional(PaymentMethodDetailsMobilepaySchema) },
  get multibanco() { return optional(PaymentMethodDetailsMultibancoSchema) },
  get naverPay() { return optional(PaymentMethodDetailsNaverPaySchema) },
  get nzBankAccount() { return optional(PaymentMethodDetailsNzBankAccountSchema) },
  get oxxo() { return optional(PaymentMethodDetailsOxxoSchema) },
  get p24() { return optional(PaymentMethodDetailsP24Schema) },
  get payByBank() { return optional(PaymentMethodDetailsPayByBankSchema) },
  get payco() { return optional(PaymentMethodDetailsPaycoSchema) },
  get paynow() { return optional(PaymentMethodDetailsPaynowSchema) },
  get paypal() { return optional(PaymentMethodDetailsPaypalSchema) },
  get pix() { return optional(PaymentMethodDetailsPixSchema) },
  get promptpay() { return optional(PaymentMethodDetailsPromptpaySchema) },
  get revolutPay() { return optional(PaymentMethodDetailsRevolutPaySchema) },
  get samsungPay() { return optional(PaymentMethodDetailsSamsungPaySchema) },
  get satispay() { return optional(PaymentMethodDetailsSatispaySchema) },
  get sepaDebit() { return optional(PaymentMethodDetailsSepaDebitSchema) },
  get sofort() { return optional(PaymentMethodDetailsSofortSchema) },
  get stripeAccount() { return optional(PaymentMethodDetailsStripeAccountSchema) },
  get swish() { return optional(PaymentMethodDetailsSwishSchema) },
  get twint() { return optional(PaymentMethodDetailsTwintSchema) },
  type: string(),
  get usBankAccount() { return optional(PaymentMethodDetailsUsBankAccountSchema) },
  get wechat() { return optional(PaymentMethodDetailsWechatSchema) },
  get wechatPay() { return optional(PaymentMethodDetailsWechatPaySchema) },
  get zip() { return optional(PaymentMethodDetailsZipSchema) },
}));