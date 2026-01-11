import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { DefaultPostAccountsRequestTosAcceptance } from './DefaultPostAccountsRequestTosAcceptance';
import { DefaultPostAccountsRequestTosAcceptanceSchema } from './DefaultPostAccountsRequestTosAcceptance';
import type { PostAccountsAccountRequestBusinessProfile } from './PostAccountsAccountRequestBusinessProfile';
import { PostAccountsAccountRequestBusinessProfileSchema } from './PostAccountsAccountRequestBusinessProfile';
import type { PostAccountsAccountRequestCompany } from './PostAccountsAccountRequestCompany';
import { PostAccountsAccountRequestCompanySchema } from './PostAccountsAccountRequestCompany';
import type { PostAccountsAccountRequestIndividual } from './PostAccountsAccountRequestIndividual';
import { PostAccountsAccountRequestIndividualSchema } from './PostAccountsAccountRequestIndividual';
import type { PostAccountsAccountRequestSettings } from './PostAccountsAccountRequestSettings';
import { PostAccountsAccountRequestSettingsSchema } from './PostAccountsAccountRequestSettings';
import type { PostAccountsRequestCapabilities } from './PostAccountsRequestCapabilities';
import { PostAccountsRequestCapabilitiesSchema } from './PostAccountsRequestCapabilities';
import type { PostAccountsRequestDocuments } from './PostAccountsRequestDocuments';
import { PostAccountsRequestDocumentsSchema } from './PostAccountsRequestDocuments';
import type { PostAccountsRequestGroups } from './PostAccountsRequestGroups';
import { PostAccountsRequestGroupsSchema } from './PostAccountsRequestGroups';
export interface PostAccountsAccountRequest {
  /**
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string;
  /**
   * business_profile_update_specs
   *
   * Business information about the account.
   */
  businessProfile?: PostAccountsAccountRequestBusinessProfile;
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
   * company_update_specs
   *
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: PostAccountsAccountRequestCompany;
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
   * individual_update_specs
   *
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: PostAccountsAccountRequestIndividual;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * settings_specs_update
   *
   * Options for customizing how the account functions within Stripe.
   */
  settings?: PostAccountsAccountRequestSettings;
  /**
   * tos_acceptance_specs
   *
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: DefaultPostAccountsRequestTosAcceptance;
}

export const PostAccountsAccountRequestSchema: TypedSchema<PostAccountsAccountRequest> = typed<PostAccountsAccountRequest>(object({
  accountToken: optional(string()),
  get businessProfile() { return optional(PostAccountsAccountRequestBusinessProfileSchema) },
  businessType: optional(string()),
  get capabilities() { return optional(PostAccountsRequestCapabilitiesSchema) },
  get company() { return optional(PostAccountsAccountRequestCompanySchema) },
  defaultCurrency: optional(string()),
  get documents() { return optional(PostAccountsRequestDocumentsSchema) },
  email: optional(string()),
  expand: optional(array(string())),
  externalAccount: optional(string()),
  get groups() { return optional(PostAccountsRequestGroupsSchema) },
  get individual() { return optional(PostAccountsAccountRequestIndividualSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get settings() { return optional(PostAccountsAccountRequestSettingsSchema) },
  get tosAcceptance() { return optional(DefaultPostAccountsRequestTosAcceptanceSchema) },
}));