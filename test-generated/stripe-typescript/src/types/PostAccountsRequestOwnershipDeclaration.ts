import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * company_ownership_declaration
 */
export interface PostAccountsRequestOwnershipDeclaration {
  date?: number;
  ip?: string;
  userAgent?: string;
}

export const PostAccountsRequestOwnershipDeclarationSchema: TypedSchema<PostAccountsRequestOwnershipDeclaration> = typed<PostAccountsRequestOwnershipDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));