import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * company_representative_declaration
 */
export interface PostAccountsRequestRepresentativeDeclaration {
  date?: number;
  ip?: string;
  userAgent?: string;
}

export const PostAccountsRequestRepresentativeDeclarationSchema: TypedSchema<PostAccountsRequestRepresentativeDeclaration> = typed<PostAccountsRequestRepresentativeDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));