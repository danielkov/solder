import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestAcssDebit } from './PostPaymentMethodConfigurationsRequestAcssDebit';
import { PostPaymentMethodConfigurationsRequestAcssDebitSchema } from './PostPaymentMethodConfigurationsRequestAcssDebit';
import type { PostPaymentMethodConfigurationsRequestAffirm } from './PostPaymentMethodConfigurationsRequestAffirm';
import { PostPaymentMethodConfigurationsRequestAffirmSchema } from './PostPaymentMethodConfigurationsRequestAffirm';
import type { PostPaymentMethodConfigurationsRequestAfterpayClearpay } from './PostPaymentMethodConfigurationsRequestAfterpayClearpay';
import { PostPaymentMethodConfigurationsRequestAfterpayClearpaySchema } from './PostPaymentMethodConfigurationsRequestAfterpayClearpay';
import type { PostPaymentMethodConfigurationsRequestAlipay } from './PostPaymentMethodConfigurationsRequestAlipay';
import { PostPaymentMethodConfigurationsRequestAlipaySchema } from './PostPaymentMethodConfigurationsRequestAlipay';
import type { PostPaymentMethodConfigurationsRequestAlma } from './PostPaymentMethodConfigurationsRequestAlma';
import { PostPaymentMethodConfigurationsRequestAlmaSchema } from './PostPaymentMethodConfigurationsRequestAlma';
import type { PostPaymentMethodConfigurationsRequestAmazonPay } from './PostPaymentMethodConfigurationsRequestAmazonPay';
import { PostPaymentMethodConfigurationsRequestAmazonPaySchema } from './PostPaymentMethodConfigurationsRequestAmazonPay';
import type { PostPaymentMethodConfigurationsRequestApplePay } from './PostPaymentMethodConfigurationsRequestApplePay';
import { PostPaymentMethodConfigurationsRequestApplePaySchema } from './PostPaymentMethodConfigurationsRequestApplePay';
import type { PostPaymentMethodConfigurationsRequestApplePayLater } from './PostPaymentMethodConfigurationsRequestApplePayLater';
import { PostPaymentMethodConfigurationsRequestApplePayLaterSchema } from './PostPaymentMethodConfigurationsRequestApplePayLater';
import type { PostPaymentMethodConfigurationsRequestAuBecsDebit } from './PostPaymentMethodConfigurationsRequestAuBecsDebit';
import { PostPaymentMethodConfigurationsRequestAuBecsDebitSchema } from './PostPaymentMethodConfigurationsRequestAuBecsDebit';
import type { PostPaymentMethodConfigurationsRequestBacsDebit } from './PostPaymentMethodConfigurationsRequestBacsDebit';
import { PostPaymentMethodConfigurationsRequestBacsDebitSchema } from './PostPaymentMethodConfigurationsRequestBacsDebit';
import type { PostPaymentMethodConfigurationsRequestBancontact } from './PostPaymentMethodConfigurationsRequestBancontact';
import { PostPaymentMethodConfigurationsRequestBancontactSchema } from './PostPaymentMethodConfigurationsRequestBancontact';
import type { PostPaymentMethodConfigurationsRequestBillie } from './PostPaymentMethodConfigurationsRequestBillie';
import { PostPaymentMethodConfigurationsRequestBillieSchema } from './PostPaymentMethodConfigurationsRequestBillie';
import type { PostPaymentMethodConfigurationsRequestBlik } from './PostPaymentMethodConfigurationsRequestBlik';
import { PostPaymentMethodConfigurationsRequestBlikSchema } from './PostPaymentMethodConfigurationsRequestBlik';
import type { PostPaymentMethodConfigurationsRequestBoleto } from './PostPaymentMethodConfigurationsRequestBoleto';
import { PostPaymentMethodConfigurationsRequestBoletoSchema } from './PostPaymentMethodConfigurationsRequestBoleto';
import type { PostPaymentMethodConfigurationsRequestCard } from './PostPaymentMethodConfigurationsRequestCard';
import { PostPaymentMethodConfigurationsRequestCardSchema } from './PostPaymentMethodConfigurationsRequestCard';
import type { PostPaymentMethodConfigurationsRequestCartesBancaires } from './PostPaymentMethodConfigurationsRequestCartesBancaires';
import { PostPaymentMethodConfigurationsRequestCartesBancairesSchema } from './PostPaymentMethodConfigurationsRequestCartesBancaires';
import type { PostPaymentMethodConfigurationsRequestCashapp } from './PostPaymentMethodConfigurationsRequestCashapp';
import { PostPaymentMethodConfigurationsRequestCashappSchema } from './PostPaymentMethodConfigurationsRequestCashapp';
import type { PostPaymentMethodConfigurationsRequestCrypto } from './PostPaymentMethodConfigurationsRequestCrypto';
import { PostPaymentMethodConfigurationsRequestCryptoSchema } from './PostPaymentMethodConfigurationsRequestCrypto';
import type { PostPaymentMethodConfigurationsRequestCustomerBalance } from './PostPaymentMethodConfigurationsRequestCustomerBalance';
import { PostPaymentMethodConfigurationsRequestCustomerBalanceSchema } from './PostPaymentMethodConfigurationsRequestCustomerBalance';
import type { PostPaymentMethodConfigurationsRequestEps } from './PostPaymentMethodConfigurationsRequestEps';
import { PostPaymentMethodConfigurationsRequestEpsSchema } from './PostPaymentMethodConfigurationsRequestEps';
import type { PostPaymentMethodConfigurationsRequestFpx } from './PostPaymentMethodConfigurationsRequestFpx';
import { PostPaymentMethodConfigurationsRequestFpxSchema } from './PostPaymentMethodConfigurationsRequestFpx';
import type { PostPaymentMethodConfigurationsRequestFrMealVoucherConecs } from './PostPaymentMethodConfigurationsRequestFrMealVoucherConecs';
import { PostPaymentMethodConfigurationsRequestFrMealVoucherConecsSchema } from './PostPaymentMethodConfigurationsRequestFrMealVoucherConecs';
import type { PostPaymentMethodConfigurationsRequestGiropay } from './PostPaymentMethodConfigurationsRequestGiropay';
import { PostPaymentMethodConfigurationsRequestGiropaySchema } from './PostPaymentMethodConfigurationsRequestGiropay';
import type { PostPaymentMethodConfigurationsRequestGooglePay } from './PostPaymentMethodConfigurationsRequestGooglePay';
import { PostPaymentMethodConfigurationsRequestGooglePaySchema } from './PostPaymentMethodConfigurationsRequestGooglePay';
import type { PostPaymentMethodConfigurationsRequestGrabpay } from './PostPaymentMethodConfigurationsRequestGrabpay';
import { PostPaymentMethodConfigurationsRequestGrabpaySchema } from './PostPaymentMethodConfigurationsRequestGrabpay';
import type { PostPaymentMethodConfigurationsRequestIdeal } from './PostPaymentMethodConfigurationsRequestIdeal';
import { PostPaymentMethodConfigurationsRequestIdealSchema } from './PostPaymentMethodConfigurationsRequestIdeal';
import type { PostPaymentMethodConfigurationsRequestJcb } from './PostPaymentMethodConfigurationsRequestJcb';
import { PostPaymentMethodConfigurationsRequestJcbSchema } from './PostPaymentMethodConfigurationsRequestJcb';
import type { PostPaymentMethodConfigurationsRequestKakaoPay } from './PostPaymentMethodConfigurationsRequestKakaoPay';
import { PostPaymentMethodConfigurationsRequestKakaoPaySchema } from './PostPaymentMethodConfigurationsRequestKakaoPay';
import type { PostPaymentMethodConfigurationsRequestKlarna } from './PostPaymentMethodConfigurationsRequestKlarna';
import { PostPaymentMethodConfigurationsRequestKlarnaSchema } from './PostPaymentMethodConfigurationsRequestKlarna';
import type { PostPaymentMethodConfigurationsRequestKonbini } from './PostPaymentMethodConfigurationsRequestKonbini';
import { PostPaymentMethodConfigurationsRequestKonbiniSchema } from './PostPaymentMethodConfigurationsRequestKonbini';
import type { PostPaymentMethodConfigurationsRequestKrCard } from './PostPaymentMethodConfigurationsRequestKrCard';
import { PostPaymentMethodConfigurationsRequestKrCardSchema } from './PostPaymentMethodConfigurationsRequestKrCard';
import type { PostPaymentMethodConfigurationsRequestLink } from './PostPaymentMethodConfigurationsRequestLink';
import { PostPaymentMethodConfigurationsRequestLinkSchema } from './PostPaymentMethodConfigurationsRequestLink';
import type { PostPaymentMethodConfigurationsRequestMbWay } from './PostPaymentMethodConfigurationsRequestMbWay';
import { PostPaymentMethodConfigurationsRequestMbWaySchema } from './PostPaymentMethodConfigurationsRequestMbWay';
import type { PostPaymentMethodConfigurationsRequestMobilepay } from './PostPaymentMethodConfigurationsRequestMobilepay';
import { PostPaymentMethodConfigurationsRequestMobilepaySchema } from './PostPaymentMethodConfigurationsRequestMobilepay';
import type { PostPaymentMethodConfigurationsRequestMultibanco } from './PostPaymentMethodConfigurationsRequestMultibanco';
import { PostPaymentMethodConfigurationsRequestMultibancoSchema } from './PostPaymentMethodConfigurationsRequestMultibanco';
import type { PostPaymentMethodConfigurationsRequestNaverPay } from './PostPaymentMethodConfigurationsRequestNaverPay';
import { PostPaymentMethodConfigurationsRequestNaverPaySchema } from './PostPaymentMethodConfigurationsRequestNaverPay';
import type { PostPaymentMethodConfigurationsRequestNzBankAccount } from './PostPaymentMethodConfigurationsRequestNzBankAccount';
import { PostPaymentMethodConfigurationsRequestNzBankAccountSchema } from './PostPaymentMethodConfigurationsRequestNzBankAccount';
import type { PostPaymentMethodConfigurationsRequestOxxo } from './PostPaymentMethodConfigurationsRequestOxxo';
import { PostPaymentMethodConfigurationsRequestOxxoSchema } from './PostPaymentMethodConfigurationsRequestOxxo';
import type { PostPaymentMethodConfigurationsRequestP24 } from './PostPaymentMethodConfigurationsRequestP24';
import { PostPaymentMethodConfigurationsRequestP24Schema } from './PostPaymentMethodConfigurationsRequestP24';
import type { PostPaymentMethodConfigurationsRequestPayByBank } from './PostPaymentMethodConfigurationsRequestPayByBank';
import { PostPaymentMethodConfigurationsRequestPayByBankSchema } from './PostPaymentMethodConfigurationsRequestPayByBank';
import type { PostPaymentMethodConfigurationsRequestPayco } from './PostPaymentMethodConfigurationsRequestPayco';
import { PostPaymentMethodConfigurationsRequestPaycoSchema } from './PostPaymentMethodConfigurationsRequestPayco';
import type { PostPaymentMethodConfigurationsRequestPaynow } from './PostPaymentMethodConfigurationsRequestPaynow';
import { PostPaymentMethodConfigurationsRequestPaynowSchema } from './PostPaymentMethodConfigurationsRequestPaynow';
import type { PostPaymentMethodConfigurationsRequestPaypal } from './PostPaymentMethodConfigurationsRequestPaypal';
import { PostPaymentMethodConfigurationsRequestPaypalSchema } from './PostPaymentMethodConfigurationsRequestPaypal';
import type { PostPaymentMethodConfigurationsRequestPix } from './PostPaymentMethodConfigurationsRequestPix';
import { PostPaymentMethodConfigurationsRequestPixSchema } from './PostPaymentMethodConfigurationsRequestPix';
import type { PostPaymentMethodConfigurationsRequestPromptpay } from './PostPaymentMethodConfigurationsRequestPromptpay';
import { PostPaymentMethodConfigurationsRequestPromptpaySchema } from './PostPaymentMethodConfigurationsRequestPromptpay';
import type { PostPaymentMethodConfigurationsRequestRevolutPay } from './PostPaymentMethodConfigurationsRequestRevolutPay';
import { PostPaymentMethodConfigurationsRequestRevolutPaySchema } from './PostPaymentMethodConfigurationsRequestRevolutPay';
import type { PostPaymentMethodConfigurationsRequestSamsungPay } from './PostPaymentMethodConfigurationsRequestSamsungPay';
import { PostPaymentMethodConfigurationsRequestSamsungPaySchema } from './PostPaymentMethodConfigurationsRequestSamsungPay';
import type { PostPaymentMethodConfigurationsRequestSatispay } from './PostPaymentMethodConfigurationsRequestSatispay';
import { PostPaymentMethodConfigurationsRequestSatispaySchema } from './PostPaymentMethodConfigurationsRequestSatispay';
import type { PostPaymentMethodConfigurationsRequestSepaDebit } from './PostPaymentMethodConfigurationsRequestSepaDebit';
import { PostPaymentMethodConfigurationsRequestSepaDebitSchema } from './PostPaymentMethodConfigurationsRequestSepaDebit';
import type { PostPaymentMethodConfigurationsRequestSofort } from './PostPaymentMethodConfigurationsRequestSofort';
import { PostPaymentMethodConfigurationsRequestSofortSchema } from './PostPaymentMethodConfigurationsRequestSofort';
import type { PostPaymentMethodConfigurationsRequestSwish } from './PostPaymentMethodConfigurationsRequestSwish';
import { PostPaymentMethodConfigurationsRequestSwishSchema } from './PostPaymentMethodConfigurationsRequestSwish';
import type { PostPaymentMethodConfigurationsRequestTwint } from './PostPaymentMethodConfigurationsRequestTwint';
import { PostPaymentMethodConfigurationsRequestTwintSchema } from './PostPaymentMethodConfigurationsRequestTwint';
import type { PostPaymentMethodConfigurationsRequestUsBankAccount } from './PostPaymentMethodConfigurationsRequestUsBankAccount';
import { PostPaymentMethodConfigurationsRequestUsBankAccountSchema } from './PostPaymentMethodConfigurationsRequestUsBankAccount';
import type { PostPaymentMethodConfigurationsRequestWechatPay } from './PostPaymentMethodConfigurationsRequestWechatPay';
import { PostPaymentMethodConfigurationsRequestWechatPaySchema } from './PostPaymentMethodConfigurationsRequestWechatPay';
import type { PostPaymentMethodConfigurationsRequestZip } from './PostPaymentMethodConfigurationsRequestZip';
import { PostPaymentMethodConfigurationsRequestZipSchema } from './PostPaymentMethodConfigurationsRequestZip';
export interface PostPaymentMethodConfigurationsConfigurationRequest {
  /**
   * payment_method_param
   *
   * Canadian pre-authorized debit payments, check this [page](https://stripe.com/docs/payments/acss-debit) for more details like country availability.
   */
  acssDebit?: PostPaymentMethodConfigurationsRequestAcssDebit;
  /**
   * Whether the configuration can be used for new payments.
   */
  active?: boolean;
  /**
   * payment_method_param
   *
   * [Affirm](https://www.affirm.com/) gives your customers a way to split purchases over a series of payments. Depending on the purchase, they can pay with four interest-free payments (Split Pay) or pay over a longer term (Installments), which might include interest. Check this [page](https://stripe.com/docs/payments/affirm) for more details like country availability.
   */
  affirm?: PostPaymentMethodConfigurationsRequestAffirm;
  /**
   * payment_method_param
   *
   * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
   */
  afterpayClearpay?: PostPaymentMethodConfigurationsRequestAfterpayClearpay;
  /**
   * payment_method_param
   *
   * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
   */
  alipay?: PostPaymentMethodConfigurationsRequestAlipay;
  /**
   * payment_method_param
   *
   * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
   */
  alma?: PostPaymentMethodConfigurationsRequestAlma;
  /**
   * payment_method_param
   *
   * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
   */
  amazonPay?: PostPaymentMethodConfigurationsRequestAmazonPay;
  /**
   * payment_method_param
   *
   * Stripe users can accept [Apple Pay](https://stripe.com/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](https://stripe.com/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
   */
  applePay?: PostPaymentMethodConfigurationsRequestApplePay;
  /**
   * payment_method_param
   *
   * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
   */
  applePayLater?: PostPaymentMethodConfigurationsRequestApplePayLater;
  /**
   * payment_method_param
   *
   * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
   */
  auBecsDebit?: PostPaymentMethodConfigurationsRequestAuBecsDebit;
  /**
   * payment_method_param
   *
   * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
   */
  bacsDebit?: PostPaymentMethodConfigurationsRequestBacsDebit;
  /**
   * payment_method_param
   *
   * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
   */
  bancontact?: PostPaymentMethodConfigurationsRequestBancontact;
  /**
   * payment_method_param
   *
   * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  billie?: PostPaymentMethodConfigurationsRequestBillie;
  /**
   * payment_method_param
   *
   * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
   */
  blik?: PostPaymentMethodConfigurationsRequestBlik;
  /**
   * payment_method_param
   *
   * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
   */
  boleto?: PostPaymentMethodConfigurationsRequestBoleto;
  /**
   * payment_method_param
   *
   * Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.
   */
  card?: PostPaymentMethodConfigurationsRequestCard;
  /**
   * payment_method_param
   *
   * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
   */
  cartesBancaires?: PostPaymentMethodConfigurationsRequestCartesBancaires;
  /**
   * payment_method_param
   *
   * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
   */
  cashapp?: PostPaymentMethodConfigurationsRequestCashapp;
  /**
   * payment_method_param
   *
   * [Stablecoin payments](https://stripe.com/docs/payments/stablecoin-payments) enable customers to pay in stablecoins like USDC from 100s of wallets including Phantom and Metamask.
   */
  crypto?: PostPaymentMethodConfigurationsRequestCrypto;
  /**
   * payment_method_param
   *
   * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
   */
  customerBalance?: PostPaymentMethodConfigurationsRequestCustomerBalance;
  /**
   * payment_method_param
   *
   * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
   */
  eps?: PostPaymentMethodConfigurationsRequestEps;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * payment_method_param
   *
   * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
   */
  fpx?: PostPaymentMethodConfigurationsRequestFpx;
  /**
   * payment_method_param
   *
   * Meal vouchers in France, or “titres-restaurant”, is a local benefits program commonly offered by employers for their employees to purchase prepared food and beverages on working days. Check this [page](https://stripe.com/docs/payments/benefits/fr-meal-vouchers) for more details.
   */
  frMealVoucherConecs?: PostPaymentMethodConfigurationsRequestFrMealVoucherConecs;
  /**
   * payment_method_param
   *
   * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
   */
  giropay?: PostPaymentMethodConfigurationsRequestGiropay;
  /**
   * payment_method_param
   *
   * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
   */
  googlePay?: PostPaymentMethodConfigurationsRequestGooglePay;
  /**
   * payment_method_param
   *
   * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
   */
  grabpay?: PostPaymentMethodConfigurationsRequestGrabpay;
  /**
   * payment_method_param
   *
   * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
   */
  ideal?: PostPaymentMethodConfigurationsRequestIdeal;
  /**
   * payment_method_param
   *
   * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
   */
  jcb?: PostPaymentMethodConfigurationsRequestJcb;
  /**
   * payment_method_param
   *
   * Kakao Pay is a popular local wallet available in South Korea.
   */
  kakaoPay?: PostPaymentMethodConfigurationsRequestKakaoPay;
  /**
   * payment_method_param
   *
   * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
   */
  klarna?: PostPaymentMethodConfigurationsRequestKlarna;
  /**
   * payment_method_param
   *
   * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
   */
  konbini?: PostPaymentMethodConfigurationsRequestKonbini;
  /**
   * payment_method_param
   *
   * Korean cards let users pay using locally issued cards from South Korea.
   */
  krCard?: PostPaymentMethodConfigurationsRequestKrCard;
  /**
   * payment_method_param
   *
   * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
   */
  link?: PostPaymentMethodConfigurationsRequestLink;
  /**
   * payment_method_param
   *
   * MB WAY is the most popular wallet in Portugal. After entering their phone number in your checkout, customers approve the payment directly in their MB WAY app. Check this [page](https://stripe.com/docs/payments/mb-way) for more details.
   */
  mbWay?: PostPaymentMethodConfigurationsRequestMbWay;
  /**
   * payment_method_param
   *
   * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
   */
  mobilepay?: PostPaymentMethodConfigurationsRequestMobilepay;
  /**
   * payment_method_param
   *
   * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
   */
  multibanco?: PostPaymentMethodConfigurationsRequestMultibanco;
  /**
   * Configuration name.
   */
  name?: string;
  /**
   * payment_method_param
   *
   * Naver Pay is a popular local wallet available in South Korea.
   */
  naverPay?: PostPaymentMethodConfigurationsRequestNaverPay;
  /**
   * payment_method_param
   *
   * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
   */
  nzBankAccount?: PostPaymentMethodConfigurationsRequestNzBankAccount;
  /**
   * payment_method_param
   *
   * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
   */
  oxxo?: PostPaymentMethodConfigurationsRequestOxxo;
  /**
   * payment_method_param
   *
   * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
   */
  p24?: PostPaymentMethodConfigurationsRequestP24;
  /**
   * payment_method_param
   *
   * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
   */
  payByBank?: PostPaymentMethodConfigurationsRequestPayByBank;
  /**
   * payment_method_param
   *
   * PAYCO is a [single-use](https://docs.stripe.com/payments/payment-methods#usage local wallet available in South Korea.
   */
  payco?: PostPaymentMethodConfigurationsRequestPayco;
  /**
   * payment_method_param
   *
   * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
   */
  paynow?: PostPaymentMethodConfigurationsRequestPaynow;
  /**
   * payment_method_param
   *
   * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
   */
  paypal?: PostPaymentMethodConfigurationsRequestPaypal;
  /**
   * payment_method_param
   *
   * Pix is a payment method popular in Brazil. When paying with Pix, customers authenticate and approve payments by scanning a QR code in their preferred banking app. Check this [page](https://docs.stripe.com/payments/pix) for more details.
   */
  pix?: PostPaymentMethodConfigurationsRequestPix;
  /**
   * payment_method_param
   *
   * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
   */
  promptpay?: PostPaymentMethodConfigurationsRequestPromptpay;
  /**
   * payment_method_param
   *
   * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
   */
  revolutPay?: PostPaymentMethodConfigurationsRequestRevolutPay;
  /**
   * payment_method_param
   *
   * Samsung Pay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage local wallet available in South Korea.
   */
  samsungPay?: PostPaymentMethodConfigurationsRequestSamsungPay;
  /**
   * payment_method_param
   *
   * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
   */
  satispay?: PostPaymentMethodConfigurationsRequestSatispay;
  /**
   * payment_method_param
   *
   * The [Single Euro Payments Area (SEPA)](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) is an initiative of the European Union to simplify payments within and across member countries. SEPA established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region, check this [page](https://stripe.com/docs/payments/sepa-debit) for more details.
   */
  sepaDebit?: PostPaymentMethodConfigurationsRequestSepaDebit;
  /**
   * payment_method_param
   *
   * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
   */
  sofort?: PostPaymentMethodConfigurationsRequestSofort;
  /**
   * payment_method_param
   *
   * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
   */
  swish?: PostPaymentMethodConfigurationsRequestSwish;
  /**
   * payment_method_param
   *
   * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
   */
  twint?: PostPaymentMethodConfigurationsRequestTwint;
  /**
   * payment_method_param
   *
   * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
   */
  usBankAccount?: PostPaymentMethodConfigurationsRequestUsBankAccount;
  /**
   * payment_method_param
   *
   * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
   */
  wechatPay?: PostPaymentMethodConfigurationsRequestWechatPay;
  /**
   * payment_method_param
   *
   * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
   */
  zip?: PostPaymentMethodConfigurationsRequestZip;
}

export const PostPaymentMethodConfigurationsConfigurationRequestSchema: TypedSchema<PostPaymentMethodConfigurationsConfigurationRequest> = typed<PostPaymentMethodConfigurationsConfigurationRequest>(object({
  get acssDebit() { return optional(PostPaymentMethodConfigurationsRequestAcssDebitSchema) },
  active: optional(boolean()),
  get affirm() { return optional(PostPaymentMethodConfigurationsRequestAffirmSchema) },
  get afterpayClearpay() { return optional(PostPaymentMethodConfigurationsRequestAfterpayClearpaySchema) },
  get alipay() { return optional(PostPaymentMethodConfigurationsRequestAlipaySchema) },
  get alma() { return optional(PostPaymentMethodConfigurationsRequestAlmaSchema) },
  get amazonPay() { return optional(PostPaymentMethodConfigurationsRequestAmazonPaySchema) },
  get applePay() { return optional(PostPaymentMethodConfigurationsRequestApplePaySchema) },
  get applePayLater() { return optional(PostPaymentMethodConfigurationsRequestApplePayLaterSchema) },
  get auBecsDebit() { return optional(PostPaymentMethodConfigurationsRequestAuBecsDebitSchema) },
  get bacsDebit() { return optional(PostPaymentMethodConfigurationsRequestBacsDebitSchema) },
  get bancontact() { return optional(PostPaymentMethodConfigurationsRequestBancontactSchema) },
  get billie() { return optional(PostPaymentMethodConfigurationsRequestBillieSchema) },
  get blik() { return optional(PostPaymentMethodConfigurationsRequestBlikSchema) },
  get boleto() { return optional(PostPaymentMethodConfigurationsRequestBoletoSchema) },
  get card() { return optional(PostPaymentMethodConfigurationsRequestCardSchema) },
  get cartesBancaires() { return optional(PostPaymentMethodConfigurationsRequestCartesBancairesSchema) },
  get cashapp() { return optional(PostPaymentMethodConfigurationsRequestCashappSchema) },
  get crypto() { return optional(PostPaymentMethodConfigurationsRequestCryptoSchema) },
  get customerBalance() { return optional(PostPaymentMethodConfigurationsRequestCustomerBalanceSchema) },
  get eps() { return optional(PostPaymentMethodConfigurationsRequestEpsSchema) },
  expand: optional(array(string())),
  get fpx() { return optional(PostPaymentMethodConfigurationsRequestFpxSchema) },
  get frMealVoucherConecs() { return optional(PostPaymentMethodConfigurationsRequestFrMealVoucherConecsSchema) },
  get giropay() { return optional(PostPaymentMethodConfigurationsRequestGiropaySchema) },
  get googlePay() { return optional(PostPaymentMethodConfigurationsRequestGooglePaySchema) },
  get grabpay() { return optional(PostPaymentMethodConfigurationsRequestGrabpaySchema) },
  get ideal() { return optional(PostPaymentMethodConfigurationsRequestIdealSchema) },
  get jcb() { return optional(PostPaymentMethodConfigurationsRequestJcbSchema) },
  get kakaoPay() { return optional(PostPaymentMethodConfigurationsRequestKakaoPaySchema) },
  get klarna() { return optional(PostPaymentMethodConfigurationsRequestKlarnaSchema) },
  get konbini() { return optional(PostPaymentMethodConfigurationsRequestKonbiniSchema) },
  get krCard() { return optional(PostPaymentMethodConfigurationsRequestKrCardSchema) },
  get link() { return optional(PostPaymentMethodConfigurationsRequestLinkSchema) },
  get mbWay() { return optional(PostPaymentMethodConfigurationsRequestMbWaySchema) },
  get mobilepay() { return optional(PostPaymentMethodConfigurationsRequestMobilepaySchema) },
  get multibanco() { return optional(PostPaymentMethodConfigurationsRequestMultibancoSchema) },
  name: optional(string()),
  get naverPay() { return optional(PostPaymentMethodConfigurationsRequestNaverPaySchema) },
  get nzBankAccount() { return optional(PostPaymentMethodConfigurationsRequestNzBankAccountSchema) },
  get oxxo() { return optional(PostPaymentMethodConfigurationsRequestOxxoSchema) },
  get p24() { return optional(PostPaymentMethodConfigurationsRequestP24Schema) },
  get payByBank() { return optional(PostPaymentMethodConfigurationsRequestPayByBankSchema) },
  get payco() { return optional(PostPaymentMethodConfigurationsRequestPaycoSchema) },
  get paynow() { return optional(PostPaymentMethodConfigurationsRequestPaynowSchema) },
  get paypal() { return optional(PostPaymentMethodConfigurationsRequestPaypalSchema) },
  get pix() { return optional(PostPaymentMethodConfigurationsRequestPixSchema) },
  get promptpay() { return optional(PostPaymentMethodConfigurationsRequestPromptpaySchema) },
  get revolutPay() { return optional(PostPaymentMethodConfigurationsRequestRevolutPaySchema) },
  get samsungPay() { return optional(PostPaymentMethodConfigurationsRequestSamsungPaySchema) },
  get satispay() { return optional(PostPaymentMethodConfigurationsRequestSatispaySchema) },
  get sepaDebit() { return optional(PostPaymentMethodConfigurationsRequestSepaDebitSchema) },
  get sofort() { return optional(PostPaymentMethodConfigurationsRequestSofortSchema) },
  get swish() { return optional(PostPaymentMethodConfigurationsRequestSwishSchema) },
  get twint() { return optional(PostPaymentMethodConfigurationsRequestTwintSchema) },
  get usBankAccount() { return optional(PostPaymentMethodConfigurationsRequestUsBankAccountSchema) },
  get wechatPay() { return optional(PostPaymentMethodConfigurationsRequestWechatPaySchema) },
  get zip() { return optional(PostPaymentMethodConfigurationsRequestZipSchema) },
}));