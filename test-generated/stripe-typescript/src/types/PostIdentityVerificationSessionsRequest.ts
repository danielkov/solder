import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIdentityVerificationSessionsRequestOptions } from './PostIdentityVerificationSessionsRequestOptions';
import { PostIdentityVerificationSessionsRequestOptionsSchema } from './PostIdentityVerificationSessionsRequestOptions';
import type { PostIdentityVerificationSessionsRequestProvidedDetails } from './PostIdentityVerificationSessionsRequestProvidedDetails';
import { PostIdentityVerificationSessionsRequestProvidedDetailsSchema } from './PostIdentityVerificationSessionsRequestProvidedDetails';
import type { PostIdentityVerificationSessionsRequestRelatedPerson } from './PostIdentityVerificationSessionsRequestRelatedPerson';
import { PostIdentityVerificationSessionsRequestRelatedPersonSchema } from './PostIdentityVerificationSessionsRequestRelatedPerson';
export interface PostIdentityVerificationSessionsRequest {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * session_options_param
   *
   * A set of options for the session’s verification checks.
   */
  options?: PostIdentityVerificationSessionsRequestOptions;
  /**
   * provided_details_param
   *
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?: PostIdentityVerificationSessionsRequestProvidedDetails;
  /**
   * Customer ID
   */
  relatedCustomer?: string;
  /**
   * related_person_param
   *
   * Tokens referencing a Person resource and it's associated account.
   */
  relatedPerson?: PostIdentityVerificationSessionsRequestRelatedPerson;
  /**
   * The URL that the user will be redirected to upon completing the verification flow.
   */
  returnUrl?: string;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.
   */
  type?: string;
  /**
   * The ID of a verification flow from the Dashboard. See https://docs.stripe.com/identity/verification-flows.
   */
  verificationFlow?: string;
}

export const PostIdentityVerificationSessionsRequestSchema: TypedSchema<PostIdentityVerificationSessionsRequest> = typed<PostIdentityVerificationSessionsRequest>(object({
  clientReferenceId: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get options() { return optional(PostIdentityVerificationSessionsRequestOptionsSchema) },
  get providedDetails() { return optional(PostIdentityVerificationSessionsRequestProvidedDetailsSchema) },
  relatedCustomer: optional(string()),
  get relatedPerson() { return optional(PostIdentityVerificationSessionsRequestRelatedPersonSchema) },
  returnUrl: optional(string()),
  type: optional(string()),
  verificationFlow: optional(string()),
}));