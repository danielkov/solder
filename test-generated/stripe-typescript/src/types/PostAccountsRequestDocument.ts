import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * verification_document_specs
 */
export interface PostAccountsRequestDocument {
  back?: string;
  front?: string;
}

export const PostAccountsRequestDocumentSchema: TypedSchema<PostAccountsRequestDocument> = typed<PostAccountsRequestDocument>(object({
  back: optional(string()),
  front: optional(string()),
}));