import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * signer_param
 */
export interface PostAccountsRequestProofOfRegistration {
  files?: Array<string>;
}

export const PostAccountsRequestProofOfRegistrationSchema: TypedSchema<PostAccountsRequestProofOfRegistration> = typed<PostAccountsRequestProofOfRegistration>(object({
  files: optional(array(string())),
}));