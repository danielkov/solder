import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIdentityVerificationSessionsRequestOptions } from './PostIdentityVerificationSessionsRequestOptions';
import { PostIdentityVerificationSessionsRequestOptionsSchema } from './PostIdentityVerificationSessionsRequestOptions';
import type { PostIdentityVerificationSessionsRequestProvidedDetails } from './PostIdentityVerificationSessionsRequestProvidedDetails';
import { PostIdentityVerificationSessionsRequestProvidedDetailsSchema } from './PostIdentityVerificationSessionsRequestProvidedDetails';
export interface PostIdentityVerificationSessionsSessionRequest {
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
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
   */
  type?: string;
}

export const PostIdentityVerificationSessionsSessionRequestSchema: TypedSchema<PostIdentityVerificationSessionsSessionRequest> = typed<PostIdentityVerificationSessionsSessionRequest>(object({
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get options() { return optional(PostIdentityVerificationSessionsRequestOptionsSchema) },
  get providedDetails() { return optional(PostIdentityVerificationSessionsRequestProvidedDetailsSchema) },
  type: optional(string()),
}));