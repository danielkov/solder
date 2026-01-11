import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAcssDebit } from './PostCustomersCustomerSubscriptionsRequestAcssDebit';
import { PostCustomersCustomerSubscriptionsRequestAcssDebitSchema } from './PostCustomersCustomerSubscriptionsRequestAcssDebit';
import type { PostCustomersCustomerSubscriptionsRequestBancontact } from './PostCustomersCustomerSubscriptionsRequestBancontact';
import { PostCustomersCustomerSubscriptionsRequestBancontactSchema } from './PostCustomersCustomerSubscriptionsRequestBancontact';
import type { PostCustomersCustomerSubscriptionsRequestCustomerBalance } from './PostCustomersCustomerSubscriptionsRequestCustomerBalance';
import { PostCustomersCustomerSubscriptionsRequestCustomerBalanceSchema } from './PostCustomersCustomerSubscriptionsRequestCustomerBalance';
import type { PostCustomersCustomerSubscriptionsRequestKonbini } from './PostCustomersCustomerSubscriptionsRequestKonbini';
import { PostCustomersCustomerSubscriptionsRequestKonbiniSchema } from './PostCustomersCustomerSubscriptionsRequestKonbini';
import type { PostCustomersCustomerSubscriptionsRequestUsBankAccount } from './PostCustomersCustomerSubscriptionsRequestUsBankAccount';
import { PostCustomersCustomerSubscriptionsRequestUsBankAccountSchema } from './PostCustomersCustomerSubscriptionsRequestUsBankAccount';
import type { PostInvoicesRequestCard } from './PostInvoicesRequestCard';
import { PostInvoicesRequestCardSchema } from './PostInvoicesRequestCard';
/**
 * payment_method_options
 */
export interface PostInvoicesRequestPaymentMethodOptions {
  acssDebit?: PostCustomersCustomerSubscriptionsRequestAcssDebit;
  bancontact?: PostCustomersCustomerSubscriptionsRequestBancontact;
  card?: PostInvoicesRequestCard;
  customerBalance?: PostCustomersCustomerSubscriptionsRequestCustomerBalance;
  konbini?: PostCustomersCustomerSubscriptionsRequestKonbini;
  sepaDebit?: PostCustomersCustomerSubscriptionsRequestKonbini;
  usBankAccount?: PostCustomersCustomerSubscriptionsRequestUsBankAccount;
}

export const PostInvoicesRequestPaymentMethodOptionsSchema: TypedSchema<PostInvoicesRequestPaymentMethodOptions> = typed<PostInvoicesRequestPaymentMethodOptions>(object({
  get acssDebit() { return optional(PostCustomersCustomerSubscriptionsRequestAcssDebitSchema) },
  get bancontact() { return optional(PostCustomersCustomerSubscriptionsRequestBancontactSchema) },
  get card() { return optional(PostInvoicesRequestCardSchema) },
  get customerBalance() { return optional(PostCustomersCustomerSubscriptionsRequestCustomerBalanceSchema) },
  get konbini() { return optional(PostCustomersCustomerSubscriptionsRequestKonbiniSchema) },
  get sepaDebit() { return optional(PostCustomersCustomerSubscriptionsRequestKonbiniSchema) },
  get usBankAccount() { return optional(PostCustomersCustomerSubscriptionsRequestUsBankAccountSchema) },
}));