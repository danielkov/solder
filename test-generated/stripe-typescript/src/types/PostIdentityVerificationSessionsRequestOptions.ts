import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostIdentityVerificationSessionsRequestDocument } from './PostIdentityVerificationSessionsRequestDocument';
import { PostIdentityVerificationSessionsRequestDocumentSchema } from './PostIdentityVerificationSessionsRequestDocument';
/**
 * session_options_param
 *
 * A set of options for the session’s verification checks.
 */
export interface PostIdentityVerificationSessionsRequestOptions {
  document?: PostIdentityVerificationSessionsRequestDocument;
}

export const PostIdentityVerificationSessionsRequestOptionsSchema: TypedSchema<PostIdentityVerificationSessionsRequestOptions> = typed<PostIdentityVerificationSessionsRequestOptions>(object({
  get document() { return optional(PostIdentityVerificationSessionsRequestDocumentSchema) },
}));