import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * collection_options_params
 *
 * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
 */
export interface PostAccountLinksRequestCollectionOptions {
  fields?: string;
  futureRequirements?: string;
}

export const PostAccountLinksRequestCollectionOptionsSchema: TypedSchema<PostAccountLinksRequestCollectionOptions> = typed<PostAccountLinksRequestCollectionOptions>(object({
  fields: optional(string()),
  futureRequirements: optional(string()),
}));