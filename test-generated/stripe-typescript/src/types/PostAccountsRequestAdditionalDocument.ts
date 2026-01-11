import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * person_verification_document_specs
 */
export interface PostAccountsRequestAdditionalDocument {
  back?: string;
  front?: string;
}

export const PostAccountsRequestAdditionalDocumentSchema: TypedSchema<PostAccountsRequestAdditionalDocument> = typed<PostAccountsRequestAdditionalDocument>(object({
  back: optional(string()),
  front: optional(string()),
}));