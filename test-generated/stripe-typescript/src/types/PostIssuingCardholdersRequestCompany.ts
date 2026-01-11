import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * company_param
 *
 * Additional information about a `company` cardholder.
 */
export interface PostIssuingCardholdersRequestCompany {
  taxId?: string;
}

export const PostIssuingCardholdersRequestCompanySchema: TypedSchema<PostIssuingCardholdersRequestCompany> = typed<PostIssuingCardholdersRequestCompany>(object({
  taxId: optional(string()),
}));