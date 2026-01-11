import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * state_sales_tax_election
 */
export interface PostTaxRegistrationsRequestElectionsItem {
  jurisdiction?: string;
  type: string;
}

export const PostTaxRegistrationsRequestElectionsItemSchema: TypedSchema<PostTaxRegistrationsRequestElectionsItem> = typed<PostTaxRegistrationsRequestElectionsItem>(object({
  jurisdiction: optional(string()),
  type: string(),
}));