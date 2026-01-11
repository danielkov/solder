import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestAcssDebitPayments } from './PostAccountsRequestAcssDebitPayments';
import { PostAccountsRequestAcssDebitPaymentsSchema } from './PostAccountsRequestAcssDebitPayments';
/**
 * capabilities_param
 *
 * Each key of the dictionary represents a capability, and each capability
maps to its settings (for example, whether it has been requested or not). Each
capability is inactive until you have provided its specific
requirements and Stripe has verified them. An account might have some
of its requested capabilities be active and some be inactive.

Required when [account.controller.stripe_dashboard.type](/api/accounts/create#create_account-controller-dashboard-type)
is `none`, which includes Custom accounts.
 */
export interface PostAccountsRequestCapabilities {
  /**
   * capability_param
   */
  acssDebitPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  affirmPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  afterpayClearpayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  almaPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  amazonPayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  auBecsDebitPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  bacsDebitPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  bancontactPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  bankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  billiePayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  blikPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  boletoPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  cardIssuing?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  cardPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  cartesBancairesPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  cashappPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  cryptoPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  epsPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  fpxPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  gbBankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  giropayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  grabpayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  idealPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  indiaInternationalPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  jcbPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  jpBankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  kakaoPayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  klarnaPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  konbiniPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  krCardPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  legacyPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  linkPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  mbWayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  mobilepayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  multibancoPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  mxBankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  naverPayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  nzBankAccountBecsDebitPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  oxxoPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  p24Payments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  payByBankPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  paycoPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  paynowPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  pixPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  promptpayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  revolutPayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  samsungPayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  satispayPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  sepaBankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  sepaDebitPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  sofortPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  swishPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  taxReportingUs1099K?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  taxReportingUs1099Misc?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  transfers?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  treasury?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  twintPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  usBankAccountAchPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  usBankTransferPayments?: PostAccountsRequestAcssDebitPayments;
  /**
   * capability_param
   */
  zipPayments?: PostAccountsRequestAcssDebitPayments;
}

export const PostAccountsRequestCapabilitiesSchema: TypedSchema<PostAccountsRequestCapabilities> = typed<PostAccountsRequestCapabilities>(object({
  get acssDebitPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get affirmPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get afterpayClearpayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get almaPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get amazonPayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get auBecsDebitPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get bacsDebitPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get bancontactPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get bankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get billiePayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get blikPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get boletoPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get cardIssuing() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get cardPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get cartesBancairesPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get cashappPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get cryptoPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get epsPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get fpxPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get gbBankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get giropayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get grabpayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get idealPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get indiaInternationalPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get jcbPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get jpBankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get kakaoPayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get klarnaPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get konbiniPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get krCardPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get legacyPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get linkPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get mbWayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get mobilepayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get multibancoPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get mxBankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get naverPayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get nzBankAccountBecsDebitPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get oxxoPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get p24Payments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get payByBankPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get paycoPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get paynowPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get pixPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get promptpayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get revolutPayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get samsungPayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get satispayPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get sepaBankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get sepaDebitPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get sofortPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get swishPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get taxReportingUs1099K() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get taxReportingUs1099Misc() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get transfers() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get treasury() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get twintPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get usBankAccountAchPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get usBankTransferPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
  get zipPayments() { return optional(PostAccountsRequestAcssDebitPaymentsSchema) },
}));