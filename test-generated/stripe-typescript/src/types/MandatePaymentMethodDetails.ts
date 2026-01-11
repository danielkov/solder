import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CardMandatePaymentMethodDetails } from './CardMandatePaymentMethodDetails';
import { CardMandatePaymentMethodDetailsSchema } from './CardMandatePaymentMethodDetails';
import type { MandateAcssDebit } from './MandateAcssDebit';
import { MandateAcssDebitSchema } from './MandateAcssDebit';
import type { MandateAmazonPay } from './MandateAmazonPay';
import { MandateAmazonPaySchema } from './MandateAmazonPay';
import type { MandateAuBecsDebit } from './MandateAuBecsDebit';
import { MandateAuBecsDebitSchema } from './MandateAuBecsDebit';
import type { MandateBacsDebit } from './MandateBacsDebit';
import { MandateBacsDebitSchema } from './MandateBacsDebit';
import type { MandateCashapp } from './MandateCashapp';
import { MandateCashappSchema } from './MandateCashapp';
import type { MandateKakaoPay } from './MandateKakaoPay';
import { MandateKakaoPaySchema } from './MandateKakaoPay';
import type { MandateKlarna } from './MandateKlarna';
import { MandateKlarnaSchema } from './MandateKlarna';
import type { MandateKrCard } from './MandateKrCard';
import { MandateKrCardSchema } from './MandateKrCard';
import type { MandateLink } from './MandateLink';
import { MandateLinkSchema } from './MandateLink';
import type { MandateNaverPay } from './MandateNaverPay';
import { MandateNaverPaySchema } from './MandateNaverPay';
import type { MandateNzBankAccount } from './MandateNzBankAccount';
import { MandateNzBankAccountSchema } from './MandateNzBankAccount';
import type { MandatePaypal } from './MandatePaypal';
import { MandatePaypalSchema } from './MandatePaypal';
import type { MandateRevolutPay } from './MandateRevolutPay';
import { MandateRevolutPaySchema } from './MandateRevolutPay';
import type { MandateSepaDebit } from './MandateSepaDebit';
import { MandateSepaDebitSchema } from './MandateSepaDebit';
import type { MandateUsBankAccount } from './MandateUsBankAccount';
import { MandateUsBankAccountSchema } from './MandateUsBankAccount';
/**
 * mandate_payment_method_details
 *
 * 
 */
export interface MandatePaymentMethodDetails {
  /**
   * mandate_acss_debit
   *
   * 
   */
  acssDebit?: MandateAcssDebit;
  /**
   * mandate_amazon_pay
   *
   * 
   */
  amazonPay?: MandateAmazonPay;
  /**
   * mandate_au_becs_debit
   *
   * 
   */
  auBecsDebit?: MandateAuBecsDebit;
  /**
   * mandate_bacs_debit
   *
   * 
   */
  bacsDebit?: MandateBacsDebit;
  /**
   * card_mandate_payment_method_details
   *
   * 
   */
  card?: CardMandatePaymentMethodDetails;
  /**
   * mandate_cashapp
   *
   * 
   */
  cashapp?: MandateCashapp;
  /**
   * mandate_kakao_pay
   *
   * 
   */
  kakaoPay?: MandateKakaoPay;
  /**
   * mandate_klarna
   *
   * 
   */
  klarna?: MandateKlarna;
  /**
   * mandate_kr_card
   *
   * 
   */
  krCard?: MandateKrCard;
  /**
   * mandate_link
   *
   * 
   */
  link?: MandateLink;
  /**
   * mandate_naver_pay
   *
   * 
   */
  naverPay?: MandateNaverPay;
  /**
   * mandate_nz_bank_account
   *
   * 
   */
  nzBankAccount?: MandateNzBankAccount;
  /**
   * mandate_paypal
   *
   * 
   */
  paypal?: MandatePaypal;
  /**
   * mandate_revolut_pay
   *
   * 
   */
  revolutPay?: MandateRevolutPay;
  /**
   * mandate_sepa_debit
   *
   * 
   */
  sepaDebit?: MandateSepaDebit;
  /**
   * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
   */
  type: string;
  /**
   * mandate_us_bank_account
   *
   * 
   */
  usBankAccount?: MandateUsBankAccount;
}

export const MandatePaymentMethodDetailsSchema: TypedSchema<MandatePaymentMethodDetails> = typed<MandatePaymentMethodDetails>(object({
  get acssDebit() { return optional(MandateAcssDebitSchema) },
  get amazonPay() { return optional(MandateAmazonPaySchema) },
  get auBecsDebit() { return optional(MandateAuBecsDebitSchema) },
  get bacsDebit() { return optional(MandateBacsDebitSchema) },
  get card() { return optional(CardMandatePaymentMethodDetailsSchema) },
  get cashapp() { return optional(MandateCashappSchema) },
  get kakaoPay() { return optional(MandateKakaoPaySchema) },
  get klarna() { return optional(MandateKlarnaSchema) },
  get krCard() { return optional(MandateKrCardSchema) },
  get link() { return optional(MandateLinkSchema) },
  get naverPay() { return optional(MandateNaverPaySchema) },
  get nzBankAccount() { return optional(MandateNzBankAccountSchema) },
  get paypal() { return optional(MandatePaypalSchema) },
  get revolutPay() { return optional(MandateRevolutPaySchema) },
  get sepaDebit() { return optional(MandateSepaDebitSchema) },
  type: string(),
  get usBankAccount() { return optional(MandateUsBankAccountSchema) },
}));