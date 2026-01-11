import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { ExternalAccountRequirements } from './ExternalAccountRequirements';
import { ExternalAccountRequirementsSchema } from './ExternalAccountRequirements';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * BankAccount
 *
 * These bank accounts are payment methods on `Customer` objects.

On the other hand [External Accounts](/api#external_accounts) are transfer
destinations on `Account` objects for connected accounts.
They can be bank accounts or debit cards as well, and are documented in the links above.

Related guide: [Bank debits and transfers](/payments/bank-debits-transfers)
 */
export interface BankAccount {
  /**
   * The account this bank account belongs to. Only applicable on Accounts (not customers or recipients) This property is only available when returned as an [External Account](/api/external_account_bank_accounts/object) where [controller.is_controller](/api/accounts/object#account_object-controller-is_controller) is `true`.
   */
  account?: AccountOrRef;
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: string;
  /**
   * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: string;
  /**
   * A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
   */
  availablePayoutMethods?: Array<string>;
  /**
   * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
   */
  bankName?: string;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country: string;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
   */
  currency: string;
  /**
   * The ID of the customer that the bank account is associated with.
   */
  customer?: CustomerUnion;
  /**
   * Whether this bank account is the default external account for its currency.
   */
  defaultForCurrency?: boolean;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Information about the [upcoming new requirements for the bank account](https://stripe.com/docs/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when.
   */
  futureRequirements?: ExternalAccountRequirements;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The last four digits of the bank account number.
   */
  last4: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Information about the requirements for the bank account, including what information needs to be collected.
   */
  requirements?: ExternalAccountRequirements;
  /**
   * The routing transit number for the bank account.
   */
  routingNumber?: string;
  /**
   * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, `tokenized_account_number_deactivated` or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If the status is `tokenized_account_number_deactivated`, the account utilizes a tokenized account number which has been deactivated due to expiration or revocation. This account will need to be reverified to continue using it for money movement. If a payout sent to this bank account fails, we'll set the status to `errored` and will not continue to send [scheduled payouts](https://stripe.com/docs/payouts#payout-schedule) until the bank details are updated.

For external accounts, possible values are `new`, `errored`, `verification_failed`, and `tokenized_account_number_deactivated`. If a payout fails, the status is set to `errored` and scheduled payouts are stopped until account details are updated. In the US and India, if we can't [verify the owner of the bank account](https://support.stripe.com/questions/bank-account-ownership-verification), we'll set the status to `verification_failed`. Other validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply.
   */
  status: string;
}

export const BankAccountSchema: TypedSchema<BankAccount> = typed<BankAccount>(object({
  get account() { return optional(AccountOrRefSchema) },
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  accountType: optional(string()),
  availablePayoutMethods: optional(array(string())),
  bankName: optional(string()),
  country: string(),
  currency: string(),
  get customer() { return optional(CustomerUnionSchema) },
  defaultForCurrency: optional(boolean()),
  fingerprint: optional(string()),
  get futureRequirements() { return optional(ExternalAccountRequirementsSchema) },
  id: string(),
  last4: string(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  get requirements() { return optional(ExternalAccountRequirementsSchema) },
  routingNumber: optional(string()),
  status: string(),
}));