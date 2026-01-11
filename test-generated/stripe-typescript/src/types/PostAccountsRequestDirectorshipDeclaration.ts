import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * company_directorship_declaration
 */
export interface PostAccountsRequestDirectorshipDeclaration {
  date?: number;
  ip?: string;
  userAgent?: string;
}

export const PostAccountsRequestDirectorshipDeclarationSchema: TypedSchema<PostAccountsRequestDirectorshipDeclaration> = typed<PostAccountsRequestDirectorshipDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));