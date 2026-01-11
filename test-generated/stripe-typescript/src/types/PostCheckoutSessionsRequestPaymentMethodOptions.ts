import { TypedSchema, object, optional, typed, unknown } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAcssDebit } from './PostCheckoutSessionsRequestAcssDebit';
import { PostCheckoutSessionsRequestAcssDebitSchema } from './PostCheckoutSessionsRequestAcssDebit';
import type { PostCheckoutSessionsRequestAffirm } from './PostCheckoutSessionsRequestAffirm';
import { PostCheckoutSessionsRequestAffirmSchema } from './PostCheckoutSessionsRequestAffirm';
import type { PostCheckoutSessionsRequestAlipay } from './PostCheckoutSessionsRequestAlipay';
import { PostCheckoutSessionsRequestAlipaySchema } from './PostCheckoutSessionsRequestAlipay';
import type { PostCheckoutSessionsRequestAlma } from './PostCheckoutSessionsRequestAlma';
import { PostCheckoutSessionsRequestAlmaSchema } from './PostCheckoutSessionsRequestAlma';
import type { PostCheckoutSessionsRequestAmazonPay } from './PostCheckoutSessionsRequestAmazonPay';
import { PostCheckoutSessionsRequestAmazonPaySchema } from './PostCheckoutSessionsRequestAmazonPay';
import type { PostCheckoutSessionsRequestAuBecsDebit } from './PostCheckoutSessionsRequestAuBecsDebit';
import { PostCheckoutSessionsRequestAuBecsDebitSchema } from './PostCheckoutSessionsRequestAuBecsDebit';
import type { PostCheckoutSessionsRequestBacsDebit } from './PostCheckoutSessionsRequestBacsDebit';
import { PostCheckoutSessionsRequestBacsDebitSchema } from './PostCheckoutSessionsRequestBacsDebit';
import type { PostCheckoutSessionsRequestBancontact } from './PostCheckoutSessionsRequestBancontact';
import { PostCheckoutSessionsRequestBancontactSchema } from './PostCheckoutSessionsRequestBancontact';
import type { PostCheckoutSessionsRequestBoleto } from './PostCheckoutSessionsRequestBoleto';
import { PostCheckoutSessionsRequestBoletoSchema } from './PostCheckoutSessionsRequestBoleto';
import type { PostCheckoutSessionsRequestCard } from './PostCheckoutSessionsRequestCard';
import { PostCheckoutSessionsRequestCardSchema } from './PostCheckoutSessionsRequestCard';
import type { PostCheckoutSessionsRequestCashapp } from './PostCheckoutSessionsRequestCashapp';
import { PostCheckoutSessionsRequestCashappSchema } from './PostCheckoutSessionsRequestCashapp';
import type { PostCheckoutSessionsRequestCustomerBalance } from './PostCheckoutSessionsRequestCustomerBalance';
import { PostCheckoutSessionsRequestCustomerBalanceSchema } from './PostCheckoutSessionsRequestCustomerBalance';
import type { PostCheckoutSessionsRequestDemoPay } from './PostCheckoutSessionsRequestDemoPay';
import { PostCheckoutSessionsRequestDemoPaySchema } from './PostCheckoutSessionsRequestDemoPay';
import type { PostCheckoutSessionsRequestKlarna } from './PostCheckoutSessionsRequestKlarna';
import { PostCheckoutSessionsRequestKlarnaSchema } from './PostCheckoutSessionsRequestKlarna';
import type { PostCheckoutSessionsRequestKonbini } from './PostCheckoutSessionsRequestKonbini';
import { PostCheckoutSessionsRequestKonbiniSchema } from './PostCheckoutSessionsRequestKonbini';
import type { PostCheckoutSessionsRequestP24 } from './PostCheckoutSessionsRequestP24';
import { PostCheckoutSessionsRequestP24Schema } from './PostCheckoutSessionsRequestP24';
import type { PostCheckoutSessionsRequestPaypal } from './PostCheckoutSessionsRequestPaypal';
import { PostCheckoutSessionsRequestPaypalSchema } from './PostCheckoutSessionsRequestPaypal';
import type { PostCheckoutSessionsRequestPix } from './PostCheckoutSessionsRequestPix';
import { PostCheckoutSessionsRequestPixSchema } from './PostCheckoutSessionsRequestPix';
import type { PostCheckoutSessionsRequestSwish } from './PostCheckoutSessionsRequestSwish';
import { PostCheckoutSessionsRequestSwishSchema } from './PostCheckoutSessionsRequestSwish';
import type { PostCheckoutSessionsRequestUsBankAccount } from './PostCheckoutSessionsRequestUsBankAccount';
import { PostCheckoutSessionsRequestUsBankAccountSchema } from './PostCheckoutSessionsRequestUsBankAccount';
import type { PostCheckoutSessionsRequestWechatPay } from './PostCheckoutSessionsRequestWechatPay';
import { PostCheckoutSessionsRequestWechatPaySchema } from './PostCheckoutSessionsRequestWechatPay';
/**
 * payment_method_options_param
 *
 * Payment-method-specific configuration.
 */
export interface PostCheckoutSessionsRequestPaymentMethodOptions {
  /**
   * payment_method_options_param
   */
  acssDebit?: PostCheckoutSessionsRequestAcssDebit;
  /**
   * payment_method_options_param
   */
  affirm?: PostCheckoutSessionsRequestAffirm;
  /**
   * payment_method_options_param
   */
  afterpayClearpay?: PostCheckoutSessionsRequestAffirm;
  /**
   * payment_method_options_param
   */
  alipay?: PostCheckoutSessionsRequestAlipay;
  /**
   * payment_method_options_param
   */
  alma?: PostCheckoutSessionsRequestAlma;
  /**
   * payment_method_options_param
   */
  amazonPay?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  auBecsDebit?: PostCheckoutSessionsRequestAuBecsDebit;
  /**
   * payment_method_options_param
   */
  bacsDebit?: PostCheckoutSessionsRequestBacsDebit;
  /**
   * payment_method_options_param
   */
  bancontact?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  billie?: PostCheckoutSessionsRequestAlma;
  /**
   * payment_method_options_param
   */
  boleto?: PostCheckoutSessionsRequestBoleto;
  /**
   * payment_method_options_param
   */
  card?: PostCheckoutSessionsRequestCard;
  /**
   * payment_method_options_param
   */
  cashapp?: PostCheckoutSessionsRequestCashapp;
  /**
   * payment_method_options_param
   */
  customerBalance?: PostCheckoutSessionsRequestCustomerBalance;
  /**
   * payment_method_options_param
   */
  demoPay?: PostCheckoutSessionsRequestDemoPay;
  /**
   * payment_method_options_param
   */
  eps?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  fpx?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  giropay?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  grabpay?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  ideal?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  kakaoPay?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  klarna?: PostCheckoutSessionsRequestKlarna;
  /**
   * payment_method_options_param
   */
  konbini?: PostCheckoutSessionsRequestKonbini;
  /**
   * payment_method_options_param
   */
  krCard?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  link?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  mobilepay?: PostCheckoutSessionsRequestAffirm;
  /**
   * payment_method_options_param
   */
  multibanco?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  naverPay?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  oxxo?: PostCheckoutSessionsRequestKonbini;
  /**
   * payment_method_options_param
   */
  p24?: PostCheckoutSessionsRequestP24;
  /**
   * payment_method_options_param
   */
  payByBank?: any;
  /**
   * payment_method_options_param
   */
  payco?: PostCheckoutSessionsRequestAlma;
  /**
   * payment_method_options_param
   */
  paynow?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  paypal?: PostCheckoutSessionsRequestPaypal;
  /**
   * payment_method_options_param
   */
  pix?: PostCheckoutSessionsRequestPix;
  /**
   * payment_method_options_param
   */
  revolutPay?: PostCheckoutSessionsRequestAmazonPay;
  /**
   * payment_method_options_param
   */
  samsungPay?: PostCheckoutSessionsRequestAlma;
  /**
   * payment_method_options_param
   */
  satispay?: PostCheckoutSessionsRequestAlma;
  /**
   * payment_method_options_param
   */
  sepaDebit?: PostCheckoutSessionsRequestBacsDebit;
  /**
   * payment_method_options_param
   */
  sofort?: PostCheckoutSessionsRequestBancontact;
  /**
   * payment_method_options_param
   */
  swish?: PostCheckoutSessionsRequestSwish;
  /**
   * payment_method_options_param
   */
  twint?: PostCheckoutSessionsRequestAlipay;
  /**
   * payment_method_options_param
   */
  usBankAccount?: PostCheckoutSessionsRequestUsBankAccount;
  /**
   * payment_method_options_param
   */
  wechatPay?: PostCheckoutSessionsRequestWechatPay;
}

export const PostCheckoutSessionsRequestPaymentMethodOptionsSchema: TypedSchema<PostCheckoutSessionsRequestPaymentMethodOptions> = typed<PostCheckoutSessionsRequestPaymentMethodOptions>(object({
  get acssDebit() { return optional(PostCheckoutSessionsRequestAcssDebitSchema) },
  get affirm() { return optional(PostCheckoutSessionsRequestAffirmSchema) },
  get afterpayClearpay() { return optional(PostCheckoutSessionsRequestAffirmSchema) },
  get alipay() { return optional(PostCheckoutSessionsRequestAlipaySchema) },
  get alma() { return optional(PostCheckoutSessionsRequestAlmaSchema) },
  get amazonPay() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get auBecsDebit() { return optional(PostCheckoutSessionsRequestAuBecsDebitSchema) },
  get bacsDebit() { return optional(PostCheckoutSessionsRequestBacsDebitSchema) },
  get bancontact() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get billie() { return optional(PostCheckoutSessionsRequestAlmaSchema) },
  get boleto() { return optional(PostCheckoutSessionsRequestBoletoSchema) },
  get card() { return optional(PostCheckoutSessionsRequestCardSchema) },
  get cashapp() { return optional(PostCheckoutSessionsRequestCashappSchema) },
  get customerBalance() { return optional(PostCheckoutSessionsRequestCustomerBalanceSchema) },
  get demoPay() { return optional(PostCheckoutSessionsRequestDemoPaySchema) },
  get eps() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get fpx() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get giropay() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get grabpay() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get ideal() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get kakaoPay() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get klarna() { return optional(PostCheckoutSessionsRequestKlarnaSchema) },
  get konbini() { return optional(PostCheckoutSessionsRequestKonbiniSchema) },
  get krCard() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get link() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get mobilepay() { return optional(PostCheckoutSessionsRequestAffirmSchema) },
  get multibanco() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get naverPay() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get oxxo() { return optional(PostCheckoutSessionsRequestKonbiniSchema) },
  get p24() { return optional(PostCheckoutSessionsRequestP24Schema) },
  payByBank: optional(unknown()),
  get payco() { return optional(PostCheckoutSessionsRequestAlmaSchema) },
  get paynow() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get paypal() { return optional(PostCheckoutSessionsRequestPaypalSchema) },
  get pix() { return optional(PostCheckoutSessionsRequestPixSchema) },
  get revolutPay() { return optional(PostCheckoutSessionsRequestAmazonPaySchema) },
  get samsungPay() { return optional(PostCheckoutSessionsRequestAlmaSchema) },
  get satispay() { return optional(PostCheckoutSessionsRequestAlmaSchema) },
  get sepaDebit() { return optional(PostCheckoutSessionsRequestBacsDebitSchema) },
  get sofort() { return optional(PostCheckoutSessionsRequestBancontactSchema) },
  get swish() { return optional(PostCheckoutSessionsRequestSwishSchema) },
  get twint() { return optional(PostCheckoutSessionsRequestAlipaySchema) },
  get usBankAccount() { return optional(PostCheckoutSessionsRequestUsBankAccountSchema) },
  get wechatPay() { return optional(PostCheckoutSessionsRequestWechatPaySchema) },
}));