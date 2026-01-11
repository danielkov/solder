import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountBusinessProfile } from './AccountBusinessProfile';
import { AccountBusinessProfileSchema } from './AccountBusinessProfile';
import type { AccountCapabilities } from './AccountCapabilities';
import { AccountCapabilitiesSchema } from './AccountCapabilities';
import type { AccountFutureRequirements } from './AccountFutureRequirements';
import { AccountFutureRequirementsSchema } from './AccountFutureRequirements';
import type { AccountGroupMembership } from './AccountGroupMembership';
import { AccountGroupMembershipSchema } from './AccountGroupMembership';
import type { AccountRequirements } from './AccountRequirements';
import { AccountRequirementsSchema } from './AccountRequirements';
import type { AccountSettings } from './AccountSettings';
import { AccountSettingsSchema } from './AccountSettings';
import type { AccountTosAcceptance } from './AccountTosAcceptance';
import { AccountTosAcceptanceSchema } from './AccountTosAcceptance';
import type { AccountUnificationAccountController } from './AccountUnificationAccountController';
import { AccountUnificationAccountControllerSchema } from './AccountUnificationAccountController';
import type { ExternalAccountsProperty } from './ExternalAccountsProperty';
import { ExternalAccountsPropertySchema } from './ExternalAccountsProperty';
import type { LegalEntityCompany } from './LegalEntityCompany';
import { LegalEntityCompanySchema } from './LegalEntityCompany';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { Person } from './Person';
import { PersonSchema } from './Person';
/**
 * Account
 *
 * This is an object representing a Stripe account. You can retrieve it to see
properties on the account like its current requirements or if the account is
enabled to make live charges or receive payouts.

For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
is `application`, which includes Custom accounts, the properties below are always
returned.

For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
is `stripe`, which includes Standard and Express accounts, some properties are only returned
until you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions)
to start Connect Onboarding. Learn about the [differences between accounts](/connect/accounts).
 */
export interface Account {
  /**
   * Business information about the account.
   */
  businessProfile?: AccountBusinessProfile;
  /**
   * The business type.
   */
  businessType?: string;
  /**
   * AccountCapabilities
   *
   * 
   */
  capabilities?: AccountCapabilities;
  /**
   * Whether the account can process charges.
   */
  chargesEnabled?: boolean;
  /**
   * LegalEntityCompany
   *
   * 
   */
  company?: LegalEntityCompany;
  /**
   * AccountUnificationAccountController
   *
   * 
   */
  controller?: AccountUnificationAccountController;
  /**
   * The account's country.
   */
  country?: string;
  /**
   * Time at which the account was connected. Measured in seconds since the Unix epoch.
   */
  created?: number;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
   */
  defaultCurrency?: string;
  /**
   * Whether account details have been submitted. Accounts with Stripe Dashboard access, which includes Standard accounts, cannot receive payouts before this is true. Accounts where this is false should be directed to [an onboarding flow](/connect/onboarding) to finish submitting account details.
   */
  detailsSubmitted?: boolean;
  /**
   * An email address associated with the account. It's not used for authentication and Stripe doesn't market to this field without explicit approval from the platform.
   */
  email?: string;
  /**
   * ExternalAccountList
   *
   * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
   */
  externalAccounts?: ExternalAccountsProperty;
  /**
   * AccountFutureRequirements
   *
   * 
   */
  futureRequirements?: AccountFutureRequirements;
  /**
   * The groups associated with the account.
   */
  groups?: AccountGroupMembership;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Person
   *
   * This is an object representing a person associated with a Stripe account.

A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.

See the [Standard onboarding](/connect/standard-accounts) or [Express onboarding](/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](/connect/handling-api-verification#person-information).
   */
  individual?: Person;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Whether the funds in this account can be paid out.
   */
  payoutsEnabled?: boolean;
  /**
   * AccountRequirements
   *
   * 
   */
  requirements?: AccountRequirements;
  /**
   * Options for customizing how the account functions within Stripe.
   */
  settings?: AccountSettings;
  /**
   * AccountTOSAcceptance
   *
   * 
   */
  tosAcceptance?: AccountTosAcceptance;
  /**
   * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
   */
  type?: string;
}

export const AccountSchema: TypedSchema<Account> = typed<Account>(object({
  get businessProfile() { return optional(AccountBusinessProfileSchema) },
  businessType: optional(string()),
  get capabilities() { return optional(AccountCapabilitiesSchema) },
  chargesEnabled: optional(boolean()),
  get company() { return optional(LegalEntityCompanySchema) },
  get controller() { return optional(AccountUnificationAccountControllerSchema) },
  country: optional(string()),
  created: optional(number()),
  defaultCurrency: optional(string()),
  detailsSubmitted: optional(boolean()),
  email: optional(string()),
  get externalAccounts() { return optional(ExternalAccountsPropertySchema) },
  get futureRequirements() { return optional(AccountFutureRequirementsSchema) },
  get groups() { return optional(AccountGroupMembershipSchema) },
  id: string(),
  get individual() { return optional(PersonSchema) },
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  payoutsEnabled: optional(boolean()),
  get requirements() { return optional(AccountRequirementsSchema) },
  get settings() { return optional(AccountSettingsSchema) },
  get tosAcceptance() { return optional(AccountTosAcceptanceSchema) },
  type: optional(string()),
}));