import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * document_options
 */
export interface PostIdentityVerificationSessionsRequestDocumentObject {
  allowedTypes?: Array<string>;
  requireIdNumber?: boolean;
  requireLiveCapture?: boolean;
  requireMatchingSelfie?: boolean;
}

export const PostIdentityVerificationSessionsRequestDocumentObjectSchema: TypedSchema<PostIdentityVerificationSessionsRequestDocumentObject> = typed<PostIdentityVerificationSessionsRequestDocumentObject>(object({
  allowedTypes: optional(array(string())),
  requireIdNumber: optional(boolean()),
  requireLiveCapture: optional(boolean()),
  requireMatchingSelfie: optional(boolean()),
}));