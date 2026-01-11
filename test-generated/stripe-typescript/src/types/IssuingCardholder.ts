import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardholderAddress } from './IssuingCardholderAddress';
import { IssuingCardholderAddressSchema } from './IssuingCardholderAddress';
import type { IssuingCardholderAuthorizationControls } from './IssuingCardholderAuthorizationControls';
import { IssuingCardholderAuthorizationControlsSchema } from './IssuingCardholderAuthorizationControls';
import type { IssuingCardholderCompany } from './IssuingCardholderCompany';
import { IssuingCardholderCompanySchema } from './IssuingCardholderCompany';
import type { IssuingCardholderIndividual } from './IssuingCardholderIndividual';
import { IssuingCardholderIndividualSchema } from './IssuingCardholderIndividual';
import type { IssuingCardholderRequirements } from './IssuingCardholderRequirements';
import { IssuingCardholderRequirementsSchema } from './IssuingCardholderRequirements';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * IssuingCardholder
 *
 * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.

Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
 */
export interface IssuingCardholder {
  /**
   * IssuingCardholderAddress
   *
   * 
   */
  billing: IssuingCardholderAddress;
  /**
   * Additional information about a `company` cardholder.
   */
  company?: IssuingCardholderCompany;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The cardholder's email address.
   */
  email?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Additional information about an `individual` cardholder.
   */
  individual?: IssuingCardholderIndividual;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The cardholder's name. This will be printed on cards issued to them.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
   */
  phoneNumber?: string;
  /**
   * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
 This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
   */
  preferredLocales?: Array<string>;
  /**
   * IssuingCardholderRequirements
   *
   * 
   */
  requirements: IssuingCardholderRequirements;
  /**
   * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: IssuingCardholderAuthorizationControls;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards.
   */
  status: string;
  /**
   * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
   */
  type: string;
}

export const IssuingCardholderSchema: TypedSchema<IssuingCardholder> = typed<IssuingCardholder>(object({
  billing: IssuingCardholderAddressSchema,
  get company() { return optional(IssuingCardholderCompanySchema) },
  created: number(),
  email: optional(string()),
  id: string(),
  get individual() { return optional(IssuingCardholderIndividualSchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  name: string(),
  object: string(),
  phoneNumber: optional(string()),
  preferredLocales: optional(array(string())),
  requirements: IssuingCardholderRequirementsSchema,
  get spendingControls() { return optional(IssuingCardholderAuthorizationControlsSchema) },
  status: string(),
  type: string(),
}));