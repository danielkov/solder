import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIssuingCardholdersRequestBilling } from './PostIssuingCardholdersRequestBilling';
import { PostIssuingCardholdersRequestBillingSchema } from './PostIssuingCardholdersRequestBilling';
import type { PostIssuingCardholdersRequestCompany } from './PostIssuingCardholdersRequestCompany';
import { PostIssuingCardholdersRequestCompanySchema } from './PostIssuingCardholdersRequestCompany';
import type { PostIssuingCardholdersRequestIndividual } from './PostIssuingCardholdersRequestIndividual';
import { PostIssuingCardholdersRequestIndividualSchema } from './PostIssuingCardholdersRequestIndividual';
import type { PostIssuingCardholdersRequestSpendingControls } from './PostIssuingCardholdersRequestSpendingControls';
import { PostIssuingCardholdersRequestSpendingControlsSchema } from './PostIssuingCardholdersRequestSpendingControls';
export interface PostIssuingCardholdersCardholderRequest {
  /**
   * billing_specs
   *
   * The cardholder's billing address.
   */
  billing?: PostIssuingCardholdersRequestBilling;
  /**
   * company_param
   *
   * Additional information about a `company` cardholder.
   */
  company?: PostIssuingCardholdersRequestCompany;
  /**
   * The cardholder's email address.
   */
  email?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * individual_param
   *
   * Additional information about an `individual` cardholder.
   */
  individual?: PostIssuingCardholdersRequestIndividual;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure) for more details.
   */
  phoneNumber?: string;
  /**
   * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
 This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
   */
  preferredLocales?: Array<string>;
  /**
   * authorization_controls_param_v2
   *
   * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: PostIssuingCardholdersRequestSpendingControls;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards.
   */
  status?: string;
}

export const PostIssuingCardholdersCardholderRequestSchema: TypedSchema<PostIssuingCardholdersCardholderRequest> = typed<PostIssuingCardholdersCardholderRequest>(object({
  get billing() { return optional(PostIssuingCardholdersRequestBillingSchema) },
  get company() { return optional(PostIssuingCardholdersRequestCompanySchema) },
  email: optional(string()),
  expand: optional(array(string())),
  get individual() { return optional(PostIssuingCardholdersRequestIndividualSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  phoneNumber: optional(string()),
  preferredLocales: optional(array(string())),
  get spendingControls() { return optional(PostIssuingCardholdersRequestSpendingControlsSchema) },
  status: optional(string()),
}));