import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * provided_details_param
 *
 * Details provided about the user being verified. These details may be shown to the user.
 */
export interface PostIdentityVerificationSessionsRequestProvidedDetails {
  email?: string;
  phone?: string;
}

export const PostIdentityVerificationSessionsRequestProvidedDetailsSchema: TypedSchema<PostIdentityVerificationSessionsRequestProvidedDetails> = typed<PostIdentityVerificationSessionsRequestProvidedDetails>(object({
  email: optional(string()),
  phone: optional(string()),
}));