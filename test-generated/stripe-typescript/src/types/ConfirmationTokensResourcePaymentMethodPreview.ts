import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingDetails } from './BillingDetails';
import { BillingDetailsSchema } from './BillingDetails';
import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
import type { PaymentFlowsPrivatePaymentMethodsAlipay } from './PaymentFlowsPrivatePaymentMethodsAlipay';
import { PaymentFlowsPrivatePaymentMethodsAlipaySchema } from './PaymentFlowsPrivatePaymentMethodsAlipay';
import type { PaymentMethodAcssDebit } from './PaymentMethodAcssDebit';
import { PaymentMethodAcssDebitSchema } from './PaymentMethodAcssDebit';
import type { PaymentMethodAffirm } from './PaymentMethodAffirm';
import { PaymentMethodAffirmSchema } from './PaymentMethodAffirm';
import type { PaymentMethodAfterpayClearpay } from './PaymentMethodAfterpayClearpay';
import { PaymentMethodAfterpayClearpaySchema } from './PaymentMethodAfterpayClearpay';
import type { PaymentMethodAlma } from './PaymentMethodAlma';
import { PaymentMethodAlmaSchema } from './PaymentMethodAlma';
import type { PaymentMethodAmazonPay } from './PaymentMethodAmazonPay';
import { PaymentMethodAmazonPaySchema } from './PaymentMethodAmazonPay';
import type { PaymentMethodAuBecsDebit } from './PaymentMethodAuBecsDebit';
import { PaymentMethodAuBecsDebitSchema } from './PaymentMethodAuBecsDebit';
import type { PaymentMethodBacsDebit } from './PaymentMethodBacsDebit';
import { PaymentMethodBacsDebitSchema } from './PaymentMethodBacsDebit';
import type { PaymentMethodBancontact } from './PaymentMethodBancontact';
import { PaymentMethodBancontactSchema } from './PaymentMethodBancontact';
import type { PaymentMethodBillie } from './PaymentMethodBillie';
import { PaymentMethodBillieSchema } from './PaymentMethodBillie';
import type { PaymentMethodBlik } from './PaymentMethodBlik';
import { PaymentMethodBlikSchema } from './PaymentMethodBlik';
import type { PaymentMethodBoleto } from './PaymentMethodBoleto';
import { PaymentMethodBoletoSchema } from './PaymentMethodBoleto';
import type { PaymentMethodCard } from './PaymentMethodCard';
import { PaymentMethodCardSchema } from './PaymentMethodCard';
import type { PaymentMethodCardPresent } from './PaymentMethodCardPresent';
import { PaymentMethodCardPresentSchema } from './PaymentMethodCardPresent';
import type { PaymentMethodCashapp } from './PaymentMethodCashapp';
import { PaymentMethodCashappSchema } from './PaymentMethodCashapp';
import type { PaymentMethodCrypto } from './PaymentMethodCrypto';
import { PaymentMethodCryptoSchema } from './PaymentMethodCrypto';
import type { PaymentMethodCustomerBalance } from './PaymentMethodCustomerBalance';
import { PaymentMethodCustomerBalanceSchema } from './PaymentMethodCustomerBalance';
import type { PaymentMethodEps } from './PaymentMethodEps';
import { PaymentMethodEpsSchema } from './PaymentMethodEps';
import type { PaymentMethodFpx } from './PaymentMethodFpx';
import { PaymentMethodFpxSchema } from './PaymentMethodFpx';
import type { PaymentMethodGiropay } from './PaymentMethodGiropay';
import { PaymentMethodGiropaySchema } from './PaymentMethodGiropay';
import type { PaymentMethodGrabpay } from './PaymentMethodGrabpay';
import { PaymentMethodGrabpaySchema } from './PaymentMethodGrabpay';
import type { PaymentMethodIdeal } from './PaymentMethodIdeal';
import { PaymentMethodIdealSchema } from './PaymentMethodIdeal';
import type { PaymentMethodInteracPresent } from './PaymentMethodInteracPresent';
import { PaymentMethodInteracPresentSchema } from './PaymentMethodInteracPresent';
import type { PaymentMethodKakaoPay } from './PaymentMethodKakaoPay';
import { PaymentMethodKakaoPaySchema } from './PaymentMethodKakaoPay';
import type { PaymentMethodKlarna } from './PaymentMethodKlarna';
import { PaymentMethodKlarnaSchema } from './PaymentMethodKlarna';
import type { PaymentMethodKonbini } from './PaymentMethodKonbini';
import { PaymentMethodKonbiniSchema } from './PaymentMethodKonbini';
import type { PaymentMethodKrCard } from './PaymentMethodKrCard';
import { PaymentMethodKrCardSchema } from './PaymentMethodKrCard';
import type { PaymentMethodLink } from './PaymentMethodLink';
import { PaymentMethodLinkSchema } from './PaymentMethodLink';
import type { PaymentMethodMbWay } from './PaymentMethodMbWay';
import { PaymentMethodMbWaySchema } from './PaymentMethodMbWay';
import type { PaymentMethodMobilepay } from './PaymentMethodMobilepay';
import { PaymentMethodMobilepaySchema } from './PaymentMethodMobilepay';
import type { PaymentMethodMultibanco } from './PaymentMethodMultibanco';
import { PaymentMethodMultibancoSchema } from './PaymentMethodMultibanco';
import type { PaymentMethodNaverPay } from './PaymentMethodNaverPay';
import { PaymentMethodNaverPaySchema } from './PaymentMethodNaverPay';
import type { PaymentMethodNzBankAccount } from './PaymentMethodNzBankAccount';
import { PaymentMethodNzBankAccountSchema } from './PaymentMethodNzBankAccount';
import type { PaymentMethodOxxo } from './PaymentMethodOxxo';
import { PaymentMethodOxxoSchema } from './PaymentMethodOxxo';
import type { PaymentMethodP24 } from './PaymentMethodP24';
import { PaymentMethodP24Schema } from './PaymentMethodP24';
import type { PaymentMethodPayByBank } from './PaymentMethodPayByBank';
import { PaymentMethodPayByBankSchema } from './PaymentMethodPayByBank';
import type { PaymentMethodPayco } from './PaymentMethodPayco';
import { PaymentMethodPaycoSchema } from './PaymentMethodPayco';
import type { PaymentMethodPaynow } from './PaymentMethodPaynow';
import { PaymentMethodPaynowSchema } from './PaymentMethodPaynow';
import type { PaymentMethodPaypal } from './PaymentMethodPaypal';
import { PaymentMethodPaypalSchema } from './PaymentMethodPaypal';
import type { PaymentMethodPix } from './PaymentMethodPix';
import { PaymentMethodPixSchema } from './PaymentMethodPix';
import type { PaymentMethodPromptpay } from './PaymentMethodPromptpay';
import { PaymentMethodPromptpaySchema } from './PaymentMethodPromptpay';
import type { PaymentMethodRevolutPay } from './PaymentMethodRevolutPay';
import { PaymentMethodRevolutPaySchema } from './PaymentMethodRevolutPay';
import type { PaymentMethodSamsungPay } from './PaymentMethodSamsungPay';
import { PaymentMethodSamsungPaySchema } from './PaymentMethodSamsungPay';
import type { PaymentMethodSatispay } from './PaymentMethodSatispay';
import { PaymentMethodSatispaySchema } from './PaymentMethodSatispay';
import type { PaymentMethodSepaDebit } from './PaymentMethodSepaDebit';
import { PaymentMethodSepaDebitSchema } from './PaymentMethodSepaDebit';
import type { PaymentMethodSofort } from './PaymentMethodSofort';
import { PaymentMethodSofortSchema } from './PaymentMethodSofort';
import type { PaymentMethodSwish } from './PaymentMethodSwish';
import { PaymentMethodSwishSchema } from './PaymentMethodSwish';
import type { PaymentMethodTwint } from './PaymentMethodTwint';
import { PaymentMethodTwintSchema } from './PaymentMethodTwint';
import type { PaymentMethodUsBankAccount } from './PaymentMethodUsBankAccount';
import { PaymentMethodUsBankAccountSchema } from './PaymentMethodUsBankAccount';
import type { PaymentMethodWechatPay } from './PaymentMethodWechatPay';
import { PaymentMethodWechatPaySchema } from './PaymentMethodWechatPay';
import type { PaymentMethodZip } from './PaymentMethodZip';
import { PaymentMethodZipSchema } from './PaymentMethodZip';
/**
 * ConfirmationTokensResourcePaymentMethodPreview
 *
 * Details of the PaymentMethod collected by Payment Element
 */
export interface ConfirmationTokensResourcePaymentMethodPreview {
  /**
   * payment_method_acss_debit
   *
   * 
   */
  acssDebit?: PaymentMethodAcssDebit;
  /**
   * payment_method_affirm
   *
   * 
   */
  affirm?: PaymentMethodAffirm;
  /**
   * payment_method_afterpay_clearpay
   *
   * 
   */
  afterpayClearpay?: PaymentMethodAfterpayClearpay;
  /**
   * PaymentFlowsPrivatePaymentMethodsAlipay
   *
   * 
   */
  alipay?: PaymentFlowsPrivatePaymentMethodsAlipay;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: string;
  /**
   * payment_method_alma
   *
   * 
   */
  alma?: PaymentMethodAlma;
  /**
   * payment_method_amazon_pay
   *
   * 
   */
  amazonPay?: PaymentMethodAmazonPay;
  /**
   * payment_method_au_becs_debit
   *
   * 
   */
  auBecsDebit?: PaymentMethodAuBecsDebit;
  /**
   * payment_method_bacs_debit
   *
   * 
   */
  bacsDebit?: PaymentMethodBacsDebit;
  /**
   * payment_method_bancontact
   *
   * 
   */
  bancontact?: PaymentMethodBancontact;
  /**
   * payment_method_billie
   *
   * 
   */
  billie?: PaymentMethodBillie;
  /**
   * billing_details
   *
   * 
   */
  billingDetails: BillingDetails;
  /**
   * payment_method_blik
   *
   * 
   */
  blik?: PaymentMethodBlik;
  /**
   * payment_method_boleto
   *
   * 
   */
  boleto?: PaymentMethodBoleto;
  /**
   * payment_method_card
   *
   * 
   */
  card?: PaymentMethodCard;
  /**
   * payment_method_card_present
   *
   * 
   */
  cardPresent?: PaymentMethodCardPresent;
  /**
   * payment_method_cashapp
   *
   * 
   */
  cashapp?: PaymentMethodCashapp;
  /**
   * payment_method_crypto
   *
   * 
   */
  crypto?: PaymentMethodCrypto;
  /**
   * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
   */
  customer?: CustomerOrRef;
  /**
   * payment_method_customer_balance
   *
   * 
   */
  customerBalance?: PaymentMethodCustomerBalance;
  /**
   * payment_method_eps
   *
   * 
   */
  eps?: PaymentMethodEps;
  /**
   * payment_method_fpx
   *
   * 
   */
  fpx?: PaymentMethodFpx;
  /**
   * payment_method_giropay
   *
   * 
   */
  giropay?: PaymentMethodGiropay;
  /**
   * payment_method_grabpay
   *
   * 
   */
  grabpay?: PaymentMethodGrabpay;
  /**
   * payment_method_ideal
   *
   * 
   */
  ideal?: PaymentMethodIdeal;
  /**
   * payment_method_interac_present
   *
   * 
   */
  interacPresent?: PaymentMethodInteracPresent;
  /**
   * payment_method_kakao_pay
   *
   * 
   */
  kakaoPay?: PaymentMethodKakaoPay;
  /**
   * payment_method_klarna
   *
   * 
   */
  klarna?: PaymentMethodKlarna;
  /**
   * payment_method_konbini
   *
   * 
   */
  konbini?: PaymentMethodKonbini;
  /**
   * payment_method_kr_card
   *
   * 
   */
  krCard?: PaymentMethodKrCard;
  /**
   * payment_method_link
   *
   * 
   */
  link?: PaymentMethodLink;
  /**
   * payment_method_mb_way
   *
   * 
   */
  mbWay?: PaymentMethodMbWay;
  /**
   * payment_method_mobilepay
   *
   * 
   */
  mobilepay?: PaymentMethodMobilepay;
  /**
   * payment_method_multibanco
   *
   * 
   */
  multibanco?: PaymentMethodMultibanco;
  /**
   * payment_method_naver_pay
   *
   * 
   */
  naverPay?: PaymentMethodNaverPay;
  /**
   * payment_method_nz_bank_account
   *
   * 
   */
  nzBankAccount?: PaymentMethodNzBankAccount;
  /**
   * payment_method_oxxo
   *
   * 
   */
  oxxo?: PaymentMethodOxxo;
  /**
   * payment_method_p24
   *
   * 
   */
  p24?: PaymentMethodP24;
  /**
   * payment_method_pay_by_bank
   *
   * 
   */
  payByBank?: PaymentMethodPayByBank;
  /**
   * payment_method_payco
   *
   * 
   */
  payco?: PaymentMethodPayco;
  /**
   * payment_method_paynow
   *
   * 
   */
  paynow?: PaymentMethodPaynow;
  /**
   * payment_method_paypal
   *
   * 
   */
  paypal?: PaymentMethodPaypal;
  /**
   * payment_method_pix
   *
   * 
   */
  pix?: PaymentMethodPix;
  /**
   * payment_method_promptpay
   *
   * 
   */
  promptpay?: PaymentMethodPromptpay;
  /**
   * payment_method_revolut_pay
   *
   * 
   */
  revolutPay?: PaymentMethodRevolutPay;
  /**
   * payment_method_samsung_pay
   *
   * 
   */
  samsungPay?: PaymentMethodSamsungPay;
  /**
   * payment_method_satispay
   *
   * 
   */
  satispay?: PaymentMethodSatispay;
  /**
   * payment_method_sepa_debit
   *
   * 
   */
  sepaDebit?: PaymentMethodSepaDebit;
  /**
   * payment_method_sofort
   *
   * 
   */
  sofort?: PaymentMethodSofort;
  /**
   * payment_method_swish
   *
   * 
   */
  swish?: PaymentMethodSwish;
  /**
   * payment_method_twint
   *
   * 
   */
  twint?: PaymentMethodTwint;
  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
  type: string;
  /**
   * payment_method_us_bank_account
   *
   * 
   */
  usBankAccount?: PaymentMethodUsBankAccount;
  /**
   * payment_method_wechat_pay
   *
   * 
   */
  wechatPay?: PaymentMethodWechatPay;
  /**
   * payment_method_zip
   *
   * 
   */
  zip?: PaymentMethodZip;
}

export const ConfirmationTokensResourcePaymentMethodPreviewSchema: TypedSchema<ConfirmationTokensResourcePaymentMethodPreview> = typed<ConfirmationTokensResourcePaymentMethodPreview>(object({
  get acssDebit() { return optional(PaymentMethodAcssDebitSchema) },
  get affirm() { return optional(PaymentMethodAffirmSchema) },
  get afterpayClearpay() { return optional(PaymentMethodAfterpayClearpaySchema) },
  get alipay() { return optional(PaymentFlowsPrivatePaymentMethodsAlipaySchema) },
  allowRedisplay: optional(string()),
  get alma() { return optional(PaymentMethodAlmaSchema) },
  get amazonPay() { return optional(PaymentMethodAmazonPaySchema) },
  get auBecsDebit() { return optional(PaymentMethodAuBecsDebitSchema) },
  get bacsDebit() { return optional(PaymentMethodBacsDebitSchema) },
  get bancontact() { return optional(PaymentMethodBancontactSchema) },
  get billie() { return optional(PaymentMethodBillieSchema) },
  billingDetails: BillingDetailsSchema,
  get blik() { return optional(PaymentMethodBlikSchema) },
  get boleto() { return optional(PaymentMethodBoletoSchema) },
  get card() { return optional(PaymentMethodCardSchema) },
  get cardPresent() { return optional(PaymentMethodCardPresentSchema) },
  get cashapp() { return optional(PaymentMethodCashappSchema) },
  get crypto() { return optional(PaymentMethodCryptoSchema) },
  get customer() { return optional(CustomerOrRefSchema) },
  get customerBalance() { return optional(PaymentMethodCustomerBalanceSchema) },
  get eps() { return optional(PaymentMethodEpsSchema) },
  get fpx() { return optional(PaymentMethodFpxSchema) },
  get giropay() { return optional(PaymentMethodGiropaySchema) },
  get grabpay() { return optional(PaymentMethodGrabpaySchema) },
  get ideal() { return optional(PaymentMethodIdealSchema) },
  get interacPresent() { return optional(PaymentMethodInteracPresentSchema) },
  get kakaoPay() { return optional(PaymentMethodKakaoPaySchema) },
  get klarna() { return optional(PaymentMethodKlarnaSchema) },
  get konbini() { return optional(PaymentMethodKonbiniSchema) },
  get krCard() { return optional(PaymentMethodKrCardSchema) },
  get link() { return optional(PaymentMethodLinkSchema) },
  get mbWay() { return optional(PaymentMethodMbWaySchema) },
  get mobilepay() { return optional(PaymentMethodMobilepaySchema) },
  get multibanco() { return optional(PaymentMethodMultibancoSchema) },
  get naverPay() { return optional(PaymentMethodNaverPaySchema) },
  get nzBankAccount() { return optional(PaymentMethodNzBankAccountSchema) },
  get oxxo() { return optional(PaymentMethodOxxoSchema) },
  get p24() { return optional(PaymentMethodP24Schema) },
  get payByBank() { return optional(PaymentMethodPayByBankSchema) },
  get payco() { return optional(PaymentMethodPaycoSchema) },
  get paynow() { return optional(PaymentMethodPaynowSchema) },
  get paypal() { return optional(PaymentMethodPaypalSchema) },
  get pix() { return optional(PaymentMethodPixSchema) },
  get promptpay() { return optional(PaymentMethodPromptpaySchema) },
  get revolutPay() { return optional(PaymentMethodRevolutPaySchema) },
  get samsungPay() { return optional(PaymentMethodSamsungPaySchema) },
  get satispay() { return optional(PaymentMethodSatispaySchema) },
  get sepaDebit() { return optional(PaymentMethodSepaDebitSchema) },
  get sofort() { return optional(PaymentMethodSofortSchema) },
  get swish() { return optional(PaymentMethodSwishSchema) },
  get twint() { return optional(PaymentMethodTwintSchema) },
  type: string(),
  get usBankAccount() { return optional(PaymentMethodUsBankAccountSchema) },
  get wechatPay() { return optional(PaymentMethodWechatPaySchema) },
  get zip() { return optional(PaymentMethodZipSchema) },
}));