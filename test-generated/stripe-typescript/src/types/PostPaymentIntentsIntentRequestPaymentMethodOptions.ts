import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestAcssDebit } from './DefaultPostPaymentIntentsRequestAcssDebit';
import { DefaultPostPaymentIntentsRequestAcssDebitSchema } from './DefaultPostPaymentIntentsRequestAcssDebit';
import type { DefaultPostPaymentIntentsRequestAuBecsDebit } from './DefaultPostPaymentIntentsRequestAuBecsDebit';
import { DefaultPostPaymentIntentsRequestAuBecsDebitSchema } from './DefaultPostPaymentIntentsRequestAuBecsDebit';
import type { DefaultPostPaymentIntentsRequestBacsDebit } from './DefaultPostPaymentIntentsRequestBacsDebit';
import { DefaultPostPaymentIntentsRequestBacsDebitSchema } from './DefaultPostPaymentIntentsRequestBacsDebit';
import type { DefaultPostPaymentIntentsRequestBoleto } from './DefaultPostPaymentIntentsRequestBoleto';
import { DefaultPostPaymentIntentsRequestBoletoSchema } from './DefaultPostPaymentIntentsRequestBoleto';
import type { DefaultPostPaymentIntentsRequestEps } from './DefaultPostPaymentIntentsRequestEps';
import { DefaultPostPaymentIntentsRequestEpsSchema } from './DefaultPostPaymentIntentsRequestEps';
import type { DefaultPostPaymentIntentsRequestFpx } from './DefaultPostPaymentIntentsRequestFpx';
import { DefaultPostPaymentIntentsRequestFpxSchema } from './DefaultPostPaymentIntentsRequestFpx';
import type { DefaultPostPaymentIntentsRequestKlarna } from './DefaultPostPaymentIntentsRequestKlarna';
import { DefaultPostPaymentIntentsRequestKlarnaSchema } from './DefaultPostPaymentIntentsRequestKlarna';
import type { DefaultPostPaymentIntentsRequestP24 } from './DefaultPostPaymentIntentsRequestP24';
import { DefaultPostPaymentIntentsRequestP24Schema } from './DefaultPostPaymentIntentsRequestP24';
import type { DefaultPostPaymentIntentsRequestSofort } from './DefaultPostPaymentIntentsRequestSofort';
import { DefaultPostPaymentIntentsRequestSofortSchema } from './DefaultPostPaymentIntentsRequestSofort';
import type { DefaultPostPaymentIntentsRequestUsBankAccount } from './DefaultPostPaymentIntentsRequestUsBankAccount';
import { DefaultPostPaymentIntentsRequestUsBankAccountSchema } from './DefaultPostPaymentIntentsRequestUsBankAccount';
import type { PostPaymentIntentsRequestAffirm } from './PostPaymentIntentsRequestAffirm';
import { PostPaymentIntentsRequestAffirmSchema } from './PostPaymentIntentsRequestAffirm';
import type { PostPaymentIntentsRequestAfterpayClearpay } from './PostPaymentIntentsRequestAfterpayClearpay';
import { PostPaymentIntentsRequestAfterpayClearpaySchema } from './PostPaymentIntentsRequestAfterpayClearpay';
import type { PostPaymentIntentsRequestAlipay } from './PostPaymentIntentsRequestAlipay';
import { PostPaymentIntentsRequestAlipaySchema } from './PostPaymentIntentsRequestAlipay';
import type { PostPaymentIntentsRequestAlma } from './PostPaymentIntentsRequestAlma';
import { PostPaymentIntentsRequestAlmaSchema } from './PostPaymentIntentsRequestAlma';
import type { PostPaymentIntentsRequestAmazonPay } from './PostPaymentIntentsRequestAmazonPay';
import { PostPaymentIntentsRequestAmazonPaySchema } from './PostPaymentIntentsRequestAmazonPay';
import type { PostPaymentIntentsRequestBancontact } from './PostPaymentIntentsRequestBancontact';
import { PostPaymentIntentsRequestBancontactSchema } from './PostPaymentIntentsRequestBancontact';
import type { PostPaymentIntentsRequestBlik } from './PostPaymentIntentsRequestBlik';
import { PostPaymentIntentsRequestBlikSchema } from './PostPaymentIntentsRequestBlik';
import type { PostPaymentIntentsRequestCard } from './PostPaymentIntentsRequestCard';
import { PostPaymentIntentsRequestCardSchema } from './PostPaymentIntentsRequestCard';
import type { PostPaymentIntentsRequestCardPresent } from './PostPaymentIntentsRequestCardPresent';
import { PostPaymentIntentsRequestCardPresentSchema } from './PostPaymentIntentsRequestCardPresent';
import type { PostPaymentIntentsRequestCashapp } from './PostPaymentIntentsRequestCashapp';
import { PostPaymentIntentsRequestCashappSchema } from './PostPaymentIntentsRequestCashapp';
import type { PostPaymentIntentsRequestCrypto } from './PostPaymentIntentsRequestCrypto';
import { PostPaymentIntentsRequestCryptoSchema } from './PostPaymentIntentsRequestCrypto';
import type { PostPaymentIntentsRequestCustomerBalance } from './PostPaymentIntentsRequestCustomerBalance';
import { PostPaymentIntentsRequestCustomerBalanceSchema } from './PostPaymentIntentsRequestCustomerBalance';
import type { PostPaymentIntentsRequestInteracPresent } from './PostPaymentIntentsRequestInteracPresent';
import { PostPaymentIntentsRequestInteracPresentSchema } from './PostPaymentIntentsRequestInteracPresent';
import type { PostPaymentIntentsRequestKonbini } from './PostPaymentIntentsRequestKonbini';
import { PostPaymentIntentsRequestKonbiniSchema } from './PostPaymentIntentsRequestKonbini';
import type { PostPaymentIntentsRequestLink } from './PostPaymentIntentsRequestLink';
import { PostPaymentIntentsRequestLinkSchema } from './PostPaymentIntentsRequestLink';
import type { PostPaymentIntentsRequestMobilepay } from './PostPaymentIntentsRequestMobilepay';
import { PostPaymentIntentsRequestMobilepaySchema } from './PostPaymentIntentsRequestMobilepay';
import type { PostPaymentIntentsRequestOxxo } from './PostPaymentIntentsRequestOxxo';
import { PostPaymentIntentsRequestOxxoSchema } from './PostPaymentIntentsRequestOxxo';
import type { PostPaymentIntentsRequestPayByBank } from './PostPaymentIntentsRequestPayByBank';
import { PostPaymentIntentsRequestPayByBankSchema } from './PostPaymentIntentsRequestPayByBank';
import type { PostPaymentIntentsRequestPaypal } from './PostPaymentIntentsRequestPaypal';
import { PostPaymentIntentsRequestPaypalSchema } from './PostPaymentIntentsRequestPaypal';
import type { PostPaymentIntentsRequestPix } from './PostPaymentIntentsRequestPix';
import { PostPaymentIntentsRequestPixSchema } from './PostPaymentIntentsRequestPix';
import type { PostPaymentIntentsRequestSwish } from './PostPaymentIntentsRequestSwish';
import { PostPaymentIntentsRequestSwishSchema } from './PostPaymentIntentsRequestSwish';
import type { PostPaymentIntentsRequestWechatPay } from './PostPaymentIntentsRequestWechatPay';
import { PostPaymentIntentsRequestWechatPaySchema } from './PostPaymentIntentsRequestWechatPay';
/**
 * payment_method_options_param
 *
 * Payment-method-specific configuration for this PaymentIntent.
 */
export interface PostPaymentIntentsIntentRequestPaymentMethodOptions {
  acssDebit?: DefaultPostPaymentIntentsRequestAcssDebit;
  affirm?: PostPaymentIntentsRequestAffirm;
  afterpayClearpay?: PostPaymentIntentsRequestAfterpayClearpay;
  alipay?: PostPaymentIntentsRequestAlipay;
  alma?: PostPaymentIntentsRequestAlma;
  amazonPay?: PostPaymentIntentsRequestAmazonPay;
  auBecsDebit?: DefaultPostPaymentIntentsRequestAuBecsDebit;
  bacsDebit?: DefaultPostPaymentIntentsRequestBacsDebit;
  bancontact?: PostPaymentIntentsRequestBancontact;
  billie?: PostPaymentIntentsRequestAlma;
  blik?: PostPaymentIntentsRequestBlik;
  boleto?: DefaultPostPaymentIntentsRequestBoleto;
  card?: PostPaymentIntentsRequestCard;
  cardPresent?: PostPaymentIntentsRequestCardPresent;
  cashapp?: PostPaymentIntentsRequestCashapp;
  crypto?: PostPaymentIntentsRequestCrypto;
  customerBalance?: PostPaymentIntentsRequestCustomerBalance;
  eps?: DefaultPostPaymentIntentsRequestEps;
  fpx?: DefaultPostPaymentIntentsRequestFpx;
  giropay?: DefaultPostPaymentIntentsRequestFpx;
  grabpay?: DefaultPostPaymentIntentsRequestFpx;
  ideal?: PostPaymentIntentsRequestAlipay;
  interacPresent?: PostPaymentIntentsRequestInteracPresent;
  kakaoPay?: PostPaymentIntentsRequestAmazonPay;
  klarna?: DefaultPostPaymentIntentsRequestKlarna;
  konbini?: PostPaymentIntentsRequestKonbini;
  krCard?: PostPaymentIntentsRequestAmazonPay;
  link?: PostPaymentIntentsRequestLink;
  mbWay?: DefaultPostPaymentIntentsRequestFpx;
  mobilepay?: PostPaymentIntentsRequestMobilepay;
  multibanco?: DefaultPostPaymentIntentsRequestFpx;
  naverPay?: PostPaymentIntentsRequestAmazonPay;
  nzBankAccount?: DefaultPostPaymentIntentsRequestAuBecsDebit;
  oxxo?: PostPaymentIntentsRequestOxxo;
  p24?: DefaultPostPaymentIntentsRequestP24;
  payByBank?: PostPaymentIntentsRequestPayByBank;
  payco?: PostPaymentIntentsRequestAlma;
  paynow?: DefaultPostPaymentIntentsRequestFpx;
  paypal?: PostPaymentIntentsRequestPaypal;
  pix?: PostPaymentIntentsRequestPix;
  promptpay?: DefaultPostPaymentIntentsRequestFpx;
  revolutPay?: PostPaymentIntentsRequestAmazonPay;
  samsungPay?: PostPaymentIntentsRequestAlma;
  satispay?: PostPaymentIntentsRequestAlma;
  sepaDebit?: DefaultPostPaymentIntentsRequestBacsDebit;
  sofort?: DefaultPostPaymentIntentsRequestSofort;
  swish?: PostPaymentIntentsRequestSwish;
  twint?: PostPaymentIntentsRequestCrypto;
  usBankAccount?: DefaultPostPaymentIntentsRequestUsBankAccount;
  wechatPay?: PostPaymentIntentsRequestWechatPay;
  zip?: DefaultPostPaymentIntentsRequestFpx;
}

export const PostPaymentIntentsIntentRequestPaymentMethodOptionsSchema: TypedSchema<PostPaymentIntentsIntentRequestPaymentMethodOptions> = typed<PostPaymentIntentsIntentRequestPaymentMethodOptions>(object({
  get acssDebit() { return optional(DefaultPostPaymentIntentsRequestAcssDebitSchema) },
  get affirm() { return optional(PostPaymentIntentsRequestAffirmSchema) },
  get afterpayClearpay() { return optional(PostPaymentIntentsRequestAfterpayClearpaySchema) },
  get alipay() { return optional(PostPaymentIntentsRequestAlipaySchema) },
  get alma() { return optional(PostPaymentIntentsRequestAlmaSchema) },
  get amazonPay() { return optional(PostPaymentIntentsRequestAmazonPaySchema) },
  get auBecsDebit() { return optional(DefaultPostPaymentIntentsRequestAuBecsDebitSchema) },
  get bacsDebit() { return optional(DefaultPostPaymentIntentsRequestBacsDebitSchema) },
  get bancontact() { return optional(PostPaymentIntentsRequestBancontactSchema) },
  get billie() { return optional(PostPaymentIntentsRequestAlmaSchema) },
  get blik() { return optional(PostPaymentIntentsRequestBlikSchema) },
  get boleto() { return optional(DefaultPostPaymentIntentsRequestBoletoSchema) },
  get card() { return optional(PostPaymentIntentsRequestCardSchema) },
  get cardPresent() { return optional(PostPaymentIntentsRequestCardPresentSchema) },
  get cashapp() { return optional(PostPaymentIntentsRequestCashappSchema) },
  get crypto() { return optional(PostPaymentIntentsRequestCryptoSchema) },
  get customerBalance() { return optional(PostPaymentIntentsRequestCustomerBalanceSchema) },
  get eps() { return optional(DefaultPostPaymentIntentsRequestEpsSchema) },
  get fpx() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get giropay() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get grabpay() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get ideal() { return optional(PostPaymentIntentsRequestAlipaySchema) },
  get interacPresent() { return optional(PostPaymentIntentsRequestInteracPresentSchema) },
  get kakaoPay() { return optional(PostPaymentIntentsRequestAmazonPaySchema) },
  get klarna() { return optional(DefaultPostPaymentIntentsRequestKlarnaSchema) },
  get konbini() { return optional(PostPaymentIntentsRequestKonbiniSchema) },
  get krCard() { return optional(PostPaymentIntentsRequestAmazonPaySchema) },
  get link() { return optional(PostPaymentIntentsRequestLinkSchema) },
  get mbWay() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get mobilepay() { return optional(PostPaymentIntentsRequestMobilepaySchema) },
  get multibanco() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get naverPay() { return optional(PostPaymentIntentsRequestAmazonPaySchema) },
  get nzBankAccount() { return optional(DefaultPostPaymentIntentsRequestAuBecsDebitSchema) },
  get oxxo() { return optional(PostPaymentIntentsRequestOxxoSchema) },
  get p24() { return optional(DefaultPostPaymentIntentsRequestP24Schema) },
  get payByBank() { return optional(PostPaymentIntentsRequestPayByBankSchema) },
  get payco() { return optional(PostPaymentIntentsRequestAlmaSchema) },
  get paynow() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get paypal() { return optional(PostPaymentIntentsRequestPaypalSchema) },
  get pix() { return optional(PostPaymentIntentsRequestPixSchema) },
  get promptpay() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
  get revolutPay() { return optional(PostPaymentIntentsRequestAmazonPaySchema) },
  get samsungPay() { return optional(PostPaymentIntentsRequestAlmaSchema) },
  get satispay() { return optional(PostPaymentIntentsRequestAlmaSchema) },
  get sepaDebit() { return optional(DefaultPostPaymentIntentsRequestBacsDebitSchema) },
  get sofort() { return optional(DefaultPostPaymentIntentsRequestSofortSchema) },
  get swish() { return optional(PostPaymentIntentsRequestSwishSchema) },
  get twint() { return optional(PostPaymentIntentsRequestCryptoSchema) },
  get usBankAccount() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountSchema) },
  get wechatPay() { return optional(PostPaymentIntentsRequestWechatPaySchema) },
  get zip() { return optional(DefaultPostPaymentIntentsRequestFpxSchema) },
}));