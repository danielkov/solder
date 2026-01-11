import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { DefaultPostAccountsRequestTosAcceptance } from './DefaultPostAccountsRequestTosAcceptance';
import { DefaultPostAccountsRequestTosAcceptanceSchema } from './DefaultPostAccountsRequestTosAcceptance';
import type { PostAccountsRequestBankAccount } from './PostAccountsRequestBankAccount';
import { PostAccountsRequestBankAccountSchema } from './PostAccountsRequestBankAccount';
import type { PostAccountsRequestBusinessProfile } from './PostAccountsRequestBusinessProfile';
import { PostAccountsRequestBusinessProfileSchema } from './PostAccountsRequestBusinessProfile';
import type { PostAccountsRequestCapabilities } from './PostAccountsRequestCapabilities';
import { PostAccountsRequestCapabilitiesSchema } from './PostAccountsRequestCapabilities';
import type { PostAccountsRequestCompany } from './PostAccountsRequestCompany';
import { PostAccountsRequestCompanySchema } from './PostAccountsRequestCompany';
import type { PostAccountsRequestController } from './PostAccountsRequestController';
import { PostAccountsRequestControllerSchema } from './PostAccountsRequestController';
import type { PostAccountsRequestDocuments } from './PostAccountsRequestDocuments';
import { PostAccountsRequestDocumentsSchema } from './PostAccountsRequestDocuments';
import type { PostAccountsRequestGroups } from './PostAccountsRequestGroups';
import { PostAccountsRequestGroupsSchema } from './PostAccountsRequestGroups';
import type { PostAccountsRequestIndividual } from './PostAccountsRequestIndividual';
import { PostAccountsRequestIndividualSchema } from './PostAccountsRequestIndividual';
import type { PostAccountsRequestSettings } from './PostAccountsRequestSettings';
import { PostAccountsRequestSettingsSchema } from './PostAccountsRequestSettings';
export interface PostAccountsRequest {
  /**
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: PostAccountsRequestBankAccount;
  /**
   * business_profile_specs
   *
   * Business information about the account.
   */
  businessProfile?: PostAccountsRequestBusinessProfile;
  /**
   * The business type. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  businessType?: string;
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
  capabilities?: PostAccountsRequestCapabilities;
  /**
   * company_specs
   *
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: PostAccountsRequestCompany;
  /**
   * controller_specs
   *
   * A hash of configuration describing the account controller's attributes.
   */
  controller?: PostAccountsRequestController;
  /**
   * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
   */
  country?: string;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
   */
  defaultCurrency?: string;
  /**
   * documents_specs
   *
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: PostAccountsRequestDocuments;
  /**
   * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
   */
  email?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A card or bank account to attach to the account for receiving [payouts](/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](/js), or a dictionary, as documented in the `external_account` parameter for [bank account](/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](/api#account_create_bank_account) or [card creation](/api#account_create_card) APIs. After you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  externalAccount?: string;
  /**
   * account_groups_specs
   *
   * A hash of account group type to tokens. These are account groups this account should be added to.
   */
  groups?: PostAccountsRequestGroups;
  /**
   * individual_specs
   *
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: PostAccountsRequestIndividual;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * settings_specs
   *
   * Options for customizing how the account functions within Stripe.
   */
  settings?: PostAccountsRequestSettings;
  /**
   * tos_acceptance_specs
   *
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: DefaultPostAccountsRequestTosAcceptance;
  /**
   * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
   */
  type?: string;
}

export const PostAccountsRequestSchema: TypedSchema<PostAccountsRequest> = typed<PostAccountsRequest>(object({
  accountToken: optional(string()),
  get bankAccount() { return optional(PostAccountsRequestBankAccountSchema) },
  get businessProfile() { return optional(PostAccountsRequestBusinessProfileSchema) },
  businessType: optional(string()),
  get capabilities() { return optional(PostAccountsRequestCapabilitiesSchema) },
  get company() { return optional(PostAccountsRequestCompanySchema) },
  get controller() { return optional(PostAccountsRequestControllerSchema) },
  country: optional(string()),
  defaultCurrency: optional(string()),
  get documents() { return optional(PostAccountsRequestDocumentsSchema) },
  email: optional(string()),
  expand: optional(array(string())),
  externalAccount: optional(string()),
  get groups() { return optional(PostAccountsRequestGroupsSchema) },
  get individual() { return optional(PostAccountsRequestIndividualSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get settings() { return optional(PostAccountsRequestSettingsSchema) },
  get tosAcceptance() { return optional(DefaultPostAccountsRequestTosAcceptanceSchema) },
  type: optional(string()),
}));