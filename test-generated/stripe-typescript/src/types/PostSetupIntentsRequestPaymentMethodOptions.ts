import { TypedSchema, object, optional, typed, unknown } from '@speakeasy-api/tonic';

import type { PostSetupIntentsRequestAcssDebit } from './PostSetupIntentsRequestAcssDebit';
import { PostSetupIntentsRequestAcssDebitSchema } from './PostSetupIntentsRequestAcssDebit';
import type { PostSetupIntentsRequestBacsDebit } from './PostSetupIntentsRequestBacsDebit';
import { PostSetupIntentsRequestBacsDebitSchema } from './PostSetupIntentsRequestBacsDebit';
import type { PostSetupIntentsRequestCard } from './PostSetupIntentsRequestCard';
import { PostSetupIntentsRequestCardSchema } from './PostSetupIntentsRequestCard';
import type { PostSetupIntentsRequestKlarna } from './PostSetupIntentsRequestKlarna';
import { PostSetupIntentsRequestKlarnaSchema } from './PostSetupIntentsRequestKlarna';
import type { PostSetupIntentsRequestPaypal } from './PostSetupIntentsRequestPaypal';
import { PostSetupIntentsRequestPaypalSchema } from './PostSetupIntentsRequestPaypal';
import type { PostSetupIntentsRequestUsBankAccount } from './PostSetupIntentsRequestUsBankAccount';
import { PostSetupIntentsRequestUsBankAccountSchema } from './PostSetupIntentsRequestUsBankAccount';
/**
 * payment_method_options_param
 *
 * Payment method-specific configuration for this SetupIntent.
 */
export interface PostSetupIntentsRequestPaymentMethodOptions {
  /**
   * setup_intent_payment_method_options_param
   */
  acssDebit?: PostSetupIntentsRequestAcssDebit;
  /**
   * setup_intent_payment_method_options_param
   */
  amazonPay?: any;
  /**
   * setup_intent_payment_method_options_param
   */
  bacsDebit?: PostSetupIntentsRequestBacsDebit;
  /**
   * setup_intent_param
   */
  card?: PostSetupIntentsRequestCard;
  /**
   * setup_intent_payment_method_options_param
   */
  cardPresent?: any;
  /**
   * setup_intent_payment_method_options_param
   */
  klarna?: PostSetupIntentsRequestKlarna;
  /**
   * setup_intent_payment_method_options_param
   */
  link?: any;
  /**
   * payment_method_options_param
   */
  paypal?: PostSetupIntentsRequestPaypal;
  /**
   * setup_intent_payment_method_options_param
   */
  sepaDebit?: PostSetupIntentsRequestBacsDebit;
  /**
   * setup_intent_payment_method_options_param
   */
  usBankAccount?: PostSetupIntentsRequestUsBankAccount;
}

export const PostSetupIntentsRequestPaymentMethodOptionsSchema: TypedSchema<PostSetupIntentsRequestPaymentMethodOptions> = typed<PostSetupIntentsRequestPaymentMethodOptions>(object({
  get acssDebit() { return optional(PostSetupIntentsRequestAcssDebitSchema) },
  amazonPay: optional(unknown()),
  get bacsDebit() { return optional(PostSetupIntentsRequestBacsDebitSchema) },
  get card() { return optional(PostSetupIntentsRequestCardSchema) },
  cardPresent: optional(unknown()),
  get klarna() { return optional(PostSetupIntentsRequestKlarnaSchema) },
  link: optional(unknown()),
  get paypal() { return optional(PostSetupIntentsRequestPaypalSchema) },
  get sepaDebit() { return optional(PostSetupIntentsRequestBacsDebitSchema) },
  get usBankAccount() { return optional(PostSetupIntentsRequestUsBankAccountSchema) },
}));