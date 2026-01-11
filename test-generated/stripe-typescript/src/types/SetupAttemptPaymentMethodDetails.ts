import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SetupAttemptPaymentMethodDetailsAcssDebit } from './SetupAttemptPaymentMethodDetailsAcssDebit';
import { SetupAttemptPaymentMethodDetailsAcssDebitSchema } from './SetupAttemptPaymentMethodDetailsAcssDebit';
import type { SetupAttemptPaymentMethodDetailsAmazonPay } from './SetupAttemptPaymentMethodDetailsAmazonPay';
import { SetupAttemptPaymentMethodDetailsAmazonPaySchema } from './SetupAttemptPaymentMethodDetailsAmazonPay';
import type { SetupAttemptPaymentMethodDetailsAuBecsDebit } from './SetupAttemptPaymentMethodDetailsAuBecsDebit';
import { SetupAttemptPaymentMethodDetailsAuBecsDebitSchema } from './SetupAttemptPaymentMethodDetailsAuBecsDebit';
import type { SetupAttemptPaymentMethodDetailsBacsDebit } from './SetupAttemptPaymentMethodDetailsBacsDebit';
import { SetupAttemptPaymentMethodDetailsBacsDebitSchema } from './SetupAttemptPaymentMethodDetailsBacsDebit';
import type { SetupAttemptPaymentMethodDetailsBancontact } from './SetupAttemptPaymentMethodDetailsBancontact';
import { SetupAttemptPaymentMethodDetailsBancontactSchema } from './SetupAttemptPaymentMethodDetailsBancontact';
import type { SetupAttemptPaymentMethodDetailsBoleto } from './SetupAttemptPaymentMethodDetailsBoleto';
import { SetupAttemptPaymentMethodDetailsBoletoSchema } from './SetupAttemptPaymentMethodDetailsBoleto';
import type { SetupAttemptPaymentMethodDetailsCard } from './SetupAttemptPaymentMethodDetailsCard';
import { SetupAttemptPaymentMethodDetailsCardSchema } from './SetupAttemptPaymentMethodDetailsCard';
import type { SetupAttemptPaymentMethodDetailsCardPresent } from './SetupAttemptPaymentMethodDetailsCardPresent';
import { SetupAttemptPaymentMethodDetailsCardPresentSchema } from './SetupAttemptPaymentMethodDetailsCardPresent';
import type { SetupAttemptPaymentMethodDetailsCashapp } from './SetupAttemptPaymentMethodDetailsCashapp';
import { SetupAttemptPaymentMethodDetailsCashappSchema } from './SetupAttemptPaymentMethodDetailsCashapp';
import type { SetupAttemptPaymentMethodDetailsIdeal } from './SetupAttemptPaymentMethodDetailsIdeal';
import { SetupAttemptPaymentMethodDetailsIdealSchema } from './SetupAttemptPaymentMethodDetailsIdeal';
import type { SetupAttemptPaymentMethodDetailsKakaoPay } from './SetupAttemptPaymentMethodDetailsKakaoPay';
import { SetupAttemptPaymentMethodDetailsKakaoPaySchema } from './SetupAttemptPaymentMethodDetailsKakaoPay';
import type { SetupAttemptPaymentMethodDetailsKlarna } from './SetupAttemptPaymentMethodDetailsKlarna';
import { SetupAttemptPaymentMethodDetailsKlarnaSchema } from './SetupAttemptPaymentMethodDetailsKlarna';
import type { SetupAttemptPaymentMethodDetailsKrCard } from './SetupAttemptPaymentMethodDetailsKrCard';
import { SetupAttemptPaymentMethodDetailsKrCardSchema } from './SetupAttemptPaymentMethodDetailsKrCard';
import type { SetupAttemptPaymentMethodDetailsLink } from './SetupAttemptPaymentMethodDetailsLink';
import { SetupAttemptPaymentMethodDetailsLinkSchema } from './SetupAttemptPaymentMethodDetailsLink';
import type { SetupAttemptPaymentMethodDetailsNaverPay } from './SetupAttemptPaymentMethodDetailsNaverPay';
import { SetupAttemptPaymentMethodDetailsNaverPaySchema } from './SetupAttemptPaymentMethodDetailsNaverPay';
import type { SetupAttemptPaymentMethodDetailsNzBankAccount } from './SetupAttemptPaymentMethodDetailsNzBankAccount';
import { SetupAttemptPaymentMethodDetailsNzBankAccountSchema } from './SetupAttemptPaymentMethodDetailsNzBankAccount';
import type { SetupAttemptPaymentMethodDetailsPaypal } from './SetupAttemptPaymentMethodDetailsPaypal';
import { SetupAttemptPaymentMethodDetailsPaypalSchema } from './SetupAttemptPaymentMethodDetailsPaypal';
import type { SetupAttemptPaymentMethodDetailsRevolutPay } from './SetupAttemptPaymentMethodDetailsRevolutPay';
import { SetupAttemptPaymentMethodDetailsRevolutPaySchema } from './SetupAttemptPaymentMethodDetailsRevolutPay';
import type { SetupAttemptPaymentMethodDetailsSepaDebit } from './SetupAttemptPaymentMethodDetailsSepaDebit';
import { SetupAttemptPaymentMethodDetailsSepaDebitSchema } from './SetupAttemptPaymentMethodDetailsSepaDebit';
import type { SetupAttemptPaymentMethodDetailsSofort } from './SetupAttemptPaymentMethodDetailsSofort';
import { SetupAttemptPaymentMethodDetailsSofortSchema } from './SetupAttemptPaymentMethodDetailsSofort';
import type { SetupAttemptPaymentMethodDetailsUsBankAccount } from './SetupAttemptPaymentMethodDetailsUsBankAccount';
import { SetupAttemptPaymentMethodDetailsUsBankAccountSchema } from './SetupAttemptPaymentMethodDetailsUsBankAccount';
/**
 * SetupAttemptPaymentMethodDetails
 *
 * 
 */
export interface SetupAttemptPaymentMethodDetails {
  /**
   * setup_attempt_payment_method_details_acss_debit
   *
   * 
   */
  acssDebit?: SetupAttemptPaymentMethodDetailsAcssDebit;
  /**
   * setup_attempt_payment_method_details_amazon_pay
   *
   * 
   */
  amazonPay?: SetupAttemptPaymentMethodDetailsAmazonPay;
  /**
   * setup_attempt_payment_method_details_au_becs_debit
   *
   * 
   */
  auBecsDebit?: SetupAttemptPaymentMethodDetailsAuBecsDebit;
  /**
   * setup_attempt_payment_method_details_bacs_debit
   *
   * 
   */
  bacsDebit?: SetupAttemptPaymentMethodDetailsBacsDebit;
  /**
   * setup_attempt_payment_method_details_bancontact
   *
   * 
   */
  bancontact?: SetupAttemptPaymentMethodDetailsBancontact;
  /**
   * setup_attempt_payment_method_details_boleto
   *
   * 
   */
  boleto?: SetupAttemptPaymentMethodDetailsBoleto;
  /**
   * setup_attempt_payment_method_details_card
   *
   * 
   */
  card?: SetupAttemptPaymentMethodDetailsCard;
  /**
   * setup_attempt_payment_method_details_card_present
   *
   * 
   */
  cardPresent?: SetupAttemptPaymentMethodDetailsCardPresent;
  /**
   * setup_attempt_payment_method_details_cashapp
   *
   * 
   */
  cashapp?: SetupAttemptPaymentMethodDetailsCashapp;
  /**
   * setup_attempt_payment_method_details_ideal
   *
   * 
   */
  ideal?: SetupAttemptPaymentMethodDetailsIdeal;
  /**
   * setup_attempt_payment_method_details_kakao_pay
   *
   * 
   */
  kakaoPay?: SetupAttemptPaymentMethodDetailsKakaoPay;
  /**
   * setup_attempt_payment_method_details_klarna
   *
   * 
   */
  klarna?: SetupAttemptPaymentMethodDetailsKlarna;
  /**
   * setup_attempt_payment_method_details_kr_card
   *
   * 
   */
  krCard?: SetupAttemptPaymentMethodDetailsKrCard;
  /**
   * setup_attempt_payment_method_details_link
   *
   * 
   */
  link?: SetupAttemptPaymentMethodDetailsLink;
  /**
   * setup_attempt_payment_method_details_naver_pay
   *
   * 
   */
  naverPay?: SetupAttemptPaymentMethodDetailsNaverPay;
  /**
   * setup_attempt_payment_method_details_nz_bank_account
   *
   * 
   */
  nzBankAccount?: SetupAttemptPaymentMethodDetailsNzBankAccount;
  /**
   * setup_attempt_payment_method_details_paypal
   *
   * 
   */
  paypal?: SetupAttemptPaymentMethodDetailsPaypal;
  /**
   * setup_attempt_payment_method_details_revolut_pay
   *
   * 
   */
  revolutPay?: SetupAttemptPaymentMethodDetailsRevolutPay;
  /**
   * setup_attempt_payment_method_details_sepa_debit
   *
   * 
   */
  sepaDebit?: SetupAttemptPaymentMethodDetailsSepaDebit;
  /**
   * setup_attempt_payment_method_details_sofort
   *
   * 
   */
  sofort?: SetupAttemptPaymentMethodDetailsSofort;
  /**
   * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
   */
  type: string;
  /**
   * setup_attempt_payment_method_details_us_bank_account
   *
   * 
   */
  usBankAccount?: SetupAttemptPaymentMethodDetailsUsBankAccount;
}

export const SetupAttemptPaymentMethodDetailsSchema: TypedSchema<SetupAttemptPaymentMethodDetails> = typed<SetupAttemptPaymentMethodDetails>(object({
  get acssDebit() { return optional(SetupAttemptPaymentMethodDetailsAcssDebitSchema) },
  get amazonPay() { return optional(SetupAttemptPaymentMethodDetailsAmazonPaySchema) },
  get auBecsDebit() { return optional(SetupAttemptPaymentMethodDetailsAuBecsDebitSchema) },
  get bacsDebit() { return optional(SetupAttemptPaymentMethodDetailsBacsDebitSchema) },
  get bancontact() { return optional(SetupAttemptPaymentMethodDetailsBancontactSchema) },
  get boleto() { return optional(SetupAttemptPaymentMethodDetailsBoletoSchema) },
  get card() { return optional(SetupAttemptPaymentMethodDetailsCardSchema) },
  get cardPresent() { return optional(SetupAttemptPaymentMethodDetailsCardPresentSchema) },
  get cashapp() { return optional(SetupAttemptPaymentMethodDetailsCashappSchema) },
  get ideal() { return optional(SetupAttemptPaymentMethodDetailsIdealSchema) },
  get kakaoPay() { return optional(SetupAttemptPaymentMethodDetailsKakaoPaySchema) },
  get klarna() { return optional(SetupAttemptPaymentMethodDetailsKlarnaSchema) },
  get krCard() { return optional(SetupAttemptPaymentMethodDetailsKrCardSchema) },
  get link() { return optional(SetupAttemptPaymentMethodDetailsLinkSchema) },
  get naverPay() { return optional(SetupAttemptPaymentMethodDetailsNaverPaySchema) },
  get nzBankAccount() { return optional(SetupAttemptPaymentMethodDetailsNzBankAccountSchema) },
  get paypal() { return optional(SetupAttemptPaymentMethodDetailsPaypalSchema) },
  get revolutPay() { return optional(SetupAttemptPaymentMethodDetailsRevolutPaySchema) },
  get sepaDebit() { return optional(SetupAttemptPaymentMethodDetailsSepaDebitSchema) },
  get sofort() { return optional(SetupAttemptPaymentMethodDetailsSofortSchema) },
  type: string(),
  get usBankAccount() { return optional(SetupAttemptPaymentMethodDetailsUsBankAccountSchema) },
}));