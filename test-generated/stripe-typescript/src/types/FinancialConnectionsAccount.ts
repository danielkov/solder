import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BankConnectionsResourceAccountNumberDetails } from './BankConnectionsResourceAccountNumberDetails';
import { BankConnectionsResourceAccountNumberDetailsSchema } from './BankConnectionsResourceAccountNumberDetails';
import type { BankConnectionsResourceAccountholder } from './BankConnectionsResourceAccountholder';
import { BankConnectionsResourceAccountholderSchema } from './BankConnectionsResourceAccountholder';
import type { BankConnectionsResourceBalance } from './BankConnectionsResourceBalance';
import { BankConnectionsResourceBalanceSchema } from './BankConnectionsResourceBalance';
import type { BankConnectionsResourceBalanceRefresh } from './BankConnectionsResourceBalanceRefresh';
import { BankConnectionsResourceBalanceRefreshSchema } from './BankConnectionsResourceBalanceRefresh';
import type { BankConnectionsResourceOwnershipRefresh } from './BankConnectionsResourceOwnershipRefresh';
import { BankConnectionsResourceOwnershipRefreshSchema } from './BankConnectionsResourceOwnershipRefresh';
import type { BankConnectionsResourceTransactionRefresh } from './BankConnectionsResourceTransactionRefresh';
import { BankConnectionsResourceTransactionRefreshSchema } from './BankConnectionsResourceTransactionRefresh';
import type { OwnershipOrRef } from './OwnershipOrRef';
import { OwnershipOrRefSchema } from './OwnershipOrRef';
/**
 * BankConnectionsResourceLinkedAccount
 *
 * A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access.
 */
export interface FinancialConnectionsAccount {
  /**
   * The account holder that this account belongs to.
   */
  accountHolder?: BankConnectionsResourceAccountholder;
  /**
   * Details about the account numbers.
   */
  accountNumbers?: Array<BankConnectionsResourceAccountNumberDetails>;
  /**
   * The most recent information about the account's balance.
   */
  balance?: BankConnectionsResourceBalance;
  /**
   * The state of the most recent attempt to refresh the account balance.
   */
  balanceRefresh?: BankConnectionsResourceBalanceRefresh;
  /**
   * The type of the account. Account category is further divided in `subcategory`.
   */
  category: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
   */
  displayName?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the institution that holds this account.
   */
  institutionName: string;
  /**
   * The last 4 digits of the account number. If present, this will be 4 numeric characters.
   */
  last4?: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The most recent information about the account's owners.
   */
  ownership?: OwnershipOrRef;
  /**
   * The state of the most recent attempt to refresh the account owners.
   */
  ownershipRefresh?: BankConnectionsResourceOwnershipRefresh;
  /**
   * The list of permissions granted by this account.
   */
  permissions?: Array<string>;
  /**
   * The status of the link to the account.
   */
  status: string;
  /**
   * If `category` is `cash`, one of:

 - `checking`
 - `savings`
 - `other`

If `category` is `credit`, one of:

 - `mortgage`
 - `line_of_credit`
 - `credit_card`
 - `other`

If `category` is `investment` or `other`, this will be `other`.
   */
  subcategory: string;
  /**
   * The list of data refresh subscriptions requested on this account.
   */
  subscriptions?: Array<string>;
  /**
   * The [PaymentMethod type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
   */
  supportedPaymentMethodTypes: Array<string>;
  /**
   * The state of the most recent attempt to refresh the account transactions.
   */
  transactionRefresh?: BankConnectionsResourceTransactionRefresh;
}

export const FinancialConnectionsAccountSchema: TypedSchema<FinancialConnectionsAccount> = typed<FinancialConnectionsAccount>(object({
  get accountHolder() { return optional(BankConnectionsResourceAccountholderSchema) },
  get accountNumbers() { return optional(array(BankConnectionsResourceAccountNumberDetailsSchema)) },
  get balance() { return optional(BankConnectionsResourceBalanceSchema) },
  get balanceRefresh() { return optional(BankConnectionsResourceBalanceRefreshSchema) },
  category: string(),
  created: number(),
  displayName: optional(string()),
  id: string(),
  institutionName: string(),
  last4: optional(string()),
  livemode: boolean(),
  object: string(),
  get ownership() { return optional(OwnershipOrRefSchema) },
  get ownershipRefresh() { return optional(BankConnectionsResourceOwnershipRefreshSchema) },
  permissions: optional(array(string())),
  status: string(),
  subcategory: string(),
  subscriptions: optional(array(string())),
  supportedPaymentMethodTypes: array(string()),
  get transactionRefresh() { return optional(BankConnectionsResourceTransactionRefreshSchema) },
}));