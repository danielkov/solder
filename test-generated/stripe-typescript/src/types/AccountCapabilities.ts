import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountCapabilities
 *
 * 
 */
export interface AccountCapabilities {
  /**
   * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
   */
  acssDebitPayments?: string;
  /**
   * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
   */
  affirmPayments?: string;
  /**
   * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
   */
  afterpayClearpayPayments?: string;
  /**
   * The status of the Alma capability of the account, or whether the account can directly process Alma payments.
   */
  almaPayments?: string;
  /**
   * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
   */
  amazonPayPayments?: string;
  /**
   * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
   */
  auBecsDebitPayments?: string;
  /**
   * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
   */
  bacsDebitPayments?: string;
  /**
   * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
   */
  bancontactPayments?: string;
  /**
   * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
   */
  bankTransferPayments?: string;
  /**
   * The status of the Billie capability of the account, or whether the account can directly process Billie payments.
   */
  billiePayments?: string;
  /**
   * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
   */
  blikPayments?: string;
  /**
   * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
   */
  boletoPayments?: string;
  /**
   * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
   */
  cardIssuing?: string;
  /**
   * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
   */
  cardPayments?: string;
  /**
   * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
   */
  cartesBancairesPayments?: string;
  /**
   * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
   */
  cashappPayments?: string;
  /**
   * The status of the Crypto capability of the account, or whether the account can directly process Crypto payments.
   */
  cryptoPayments?: string;
  /**
   * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
   */
  epsPayments?: string;
  /**
   * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
   */
  fpxPayments?: string;
  /**
   * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
   */
  gbBankTransferPayments?: string;
  /**
   * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
   */
  giropayPayments?: string;
  /**
   * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
   */
  grabpayPayments?: string;
  /**
   * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
   */
  idealPayments?: string;
  /**
   * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
   */
  indiaInternationalPayments?: string;
  /**
   * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
   */
  jcbPayments?: string;
  /**
   * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
   */
  jpBankTransferPayments?: string;
  /**
   * The status of the KakaoPay capability of the account, or whether the account can directly process KakaoPay payments.
   */
  kakaoPayPayments?: string;
  /**
   * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
   */
  klarnaPayments?: string;
  /**
   * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
   */
  konbiniPayments?: string;
  /**
   * The status of the KrCard capability of the account, or whether the account can directly process KrCard payments.
   */
  krCardPayments?: string;
  /**
   * The status of the legacy payments capability of the account.
   */
  legacyPayments?: string;
  /**
   * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
   */
  linkPayments?: string;
  /**
   * The status of the MB WAY payments capability of the account, or whether the account can directly process MB WAY charges.
   */
  mbWayPayments?: string;
  /**
   * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
   */
  mobilepayPayments?: string;
  /**
   * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
   */
  multibancoPayments?: string;
  /**
   * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
   */
  mxBankTransferPayments?: string;
  /**
   * The status of the NaverPay capability of the account, or whether the account can directly process NaverPay payments.
   */
  naverPayPayments?: string;
  /**
   * The status of the New Zealand BECS Direct Debit payments capability of the account, or whether the account can directly process New Zealand BECS Direct Debit charges.
   */
  nzBankAccountBecsDebitPayments?: string;
  /**
   * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
   */
  oxxoPayments?: string;
  /**
   * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
   */
  p24Payments?: string;
  /**
   * The status of the pay_by_bank payments capability of the account, or whether the account can directly process pay_by_bank charges.
   */
  payByBankPayments?: string;
  /**
   * The status of the Payco capability of the account, or whether the account can directly process Payco payments.
   */
  paycoPayments?: string;
  /**
   * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
   */
  paynowPayments?: string;
  /**
   * The status of the pix payments capability of the account, or whether the account can directly process pix charges.
   */
  pixPayments?: string;
  /**
   * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
   */
  promptpayPayments?: string;
  /**
   * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
   */
  revolutPayPayments?: string;
  /**
   * The status of the SamsungPay capability of the account, or whether the account can directly process SamsungPay payments.
   */
  samsungPayPayments?: string;
  /**
   * The status of the Satispay capability of the account, or whether the account can directly process Satispay payments.
   */
  satispayPayments?: string;
  /**
   * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
   */
  sepaBankTransferPayments?: string;
  /**
   * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
   */
  sepaDebitPayments?: string;
  /**
   * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
   */
  sofortPayments?: string;
  /**
   * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
   */
  swishPayments?: string;
  /**
   * The status of the tax reporting 1099-K (US) capability of the account.
   */
  taxReportingUs1099K?: string;
  /**
   * The status of the tax reporting 1099-MISC (US) capability of the account.
   */
  taxReportingUs1099Misc?: string;
  /**
   * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
   */
  transfers?: string;
  /**
   * The status of the banking capability, or whether the account can have bank accounts.
   */
  treasury?: string;
  /**
   * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
   */
  twintPayments?: string;
  /**
   * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
   */
  usBankAccountAchPayments?: string;
  /**
   * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
   */
  usBankTransferPayments?: string;
  /**
   * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
   */
  zipPayments?: string;
}

export const AccountCapabilitiesSchema: TypedSchema<AccountCapabilities> = typed<AccountCapabilities>(object({
  acssDebitPayments: optional(string()),
  affirmPayments: optional(string()),
  afterpayClearpayPayments: optional(string()),
  almaPayments: optional(string()),
  amazonPayPayments: optional(string()),
  auBecsDebitPayments: optional(string()),
  bacsDebitPayments: optional(string()),
  bancontactPayments: optional(string()),
  bankTransferPayments: optional(string()),
  billiePayments: optional(string()),
  blikPayments: optional(string()),
  boletoPayments: optional(string()),
  cardIssuing: optional(string()),
  cardPayments: optional(string()),
  cartesBancairesPayments: optional(string()),
  cashappPayments: optional(string()),
  cryptoPayments: optional(string()),
  epsPayments: optional(string()),
  fpxPayments: optional(string()),
  gbBankTransferPayments: optional(string()),
  giropayPayments: optional(string()),
  grabpayPayments: optional(string()),
  idealPayments: optional(string()),
  indiaInternationalPayments: optional(string()),
  jcbPayments: optional(string()),
  jpBankTransferPayments: optional(string()),
  kakaoPayPayments: optional(string()),
  klarnaPayments: optional(string()),
  konbiniPayments: optional(string()),
  krCardPayments: optional(string()),
  legacyPayments: optional(string()),
  linkPayments: optional(string()),
  mbWayPayments: optional(string()),
  mobilepayPayments: optional(string()),
  multibancoPayments: optional(string()),
  mxBankTransferPayments: optional(string()),
  naverPayPayments: optional(string()),
  nzBankAccountBecsDebitPayments: optional(string()),
  oxxoPayments: optional(string()),
  p24Payments: optional(string()),
  payByBankPayments: optional(string()),
  paycoPayments: optional(string()),
  paynowPayments: optional(string()),
  pixPayments: optional(string()),
  promptpayPayments: optional(string()),
  revolutPayPayments: optional(string()),
  samsungPayPayments: optional(string()),
  satispayPayments: optional(string()),
  sepaBankTransferPayments: optional(string()),
  sepaDebitPayments: optional(string()),
  sofortPayments: optional(string()),
  swishPayments: optional(string()),
  taxReportingUs1099K: optional(string()),
  taxReportingUs1099Misc: optional(string()),
  transfers: optional(string()),
  treasury: optional(string()),
  twintPayments: optional(string()),
  usBankAccountAchPayments: optional(string()),
  usBankTransferPayments: optional(string()),
  zipPayments: optional(string()),
}));