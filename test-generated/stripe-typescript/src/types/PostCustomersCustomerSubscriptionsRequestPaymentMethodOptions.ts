import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAcssDebit } from './PostCustomersCustomerSubscriptionsRequestAcssDebit';
import { PostCustomersCustomerSubscriptionsRequestAcssDebitSchema } from './PostCustomersCustomerSubscriptionsRequestAcssDebit';
import type { PostCustomersCustomerSubscriptionsRequestBancontact } from './PostCustomersCustomerSubscriptionsRequestBancontact';
import { PostCustomersCustomerSubscriptionsRequestBancontactSchema } from './PostCustomersCustomerSubscriptionsRequestBancontact';
import type { PostCustomersCustomerSubscriptionsRequestCard } from './PostCustomersCustomerSubscriptionsRequestCard';
import { PostCustomersCustomerSubscriptionsRequestCardSchema } from './PostCustomersCustomerSubscriptionsRequestCard';
import type { PostCustomersCustomerSubscriptionsRequestCustomerBalance } from './PostCustomersCustomerSubscriptionsRequestCustomerBalance';
import { PostCustomersCustomerSubscriptionsRequestCustomerBalanceSchema } from './PostCustomersCustomerSubscriptionsRequestCustomerBalance';
import type { PostCustomersCustomerSubscriptionsRequestKonbini } from './PostCustomersCustomerSubscriptionsRequestKonbini';
import { PostCustomersCustomerSubscriptionsRequestKonbiniSchema } from './PostCustomersCustomerSubscriptionsRequestKonbini';
import type { PostCustomersCustomerSubscriptionsRequestUsBankAccount } from './PostCustomersCustomerSubscriptionsRequestUsBankAccount';
import { PostCustomersCustomerSubscriptionsRequestUsBankAccountSchema } from './PostCustomersCustomerSubscriptionsRequestUsBankAccount';
/**
 * payment_method_options
 */
export interface PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions {
  acssDebit?: PostCustomersCustomerSubscriptionsRequestAcssDebit;
  bancontact?: PostCustomersCustomerSubscriptionsRequestBancontact;
  card?: PostCustomersCustomerSubscriptionsRequestCard;
  customerBalance?: PostCustomersCustomerSubscriptionsRequestCustomerBalance;
  konbini?: PostCustomersCustomerSubscriptionsRequestKonbini;
  sepaDebit?: PostCustomersCustomerSubscriptionsRequestKonbini;
  usBankAccount?: PostCustomersCustomerSubscriptionsRequestUsBankAccount;
}

export const PostCustomersCustomerSubscriptionsRequestPaymentMethodOptionsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions> = typed<PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions>(object({
  get acssDebit() { return optional(PostCustomersCustomerSubscriptionsRequestAcssDebitSchema) },
  get bancontact() { return optional(PostCustomersCustomerSubscriptionsRequestBancontactSchema) },
  get card() { return optional(PostCustomersCustomerSubscriptionsRequestCardSchema) },
  get customerBalance() { return optional(PostCustomersCustomerSubscriptionsRequestCustomerBalanceSchema) },
  get konbini() { return optional(PostCustomersCustomerSubscriptionsRequestKonbiniSchema) },
  get sepaDebit() { return optional(PostCustomersCustomerSubscriptionsRequestKonbiniSchema) },
  get usBankAccount() { return optional(PostCustomersCustomerSubscriptionsRequestUsBankAccountSchema) },
}));