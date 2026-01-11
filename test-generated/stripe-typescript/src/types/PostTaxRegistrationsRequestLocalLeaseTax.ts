import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * local_lease_tax
 */
export interface PostTaxRegistrationsRequestLocalLeaseTax {
  jurisdiction: string;
}

export const PostTaxRegistrationsRequestLocalLeaseTaxSchema: TypedSchema<PostTaxRegistrationsRequestLocalLeaseTax> = typed<PostTaxRegistrationsRequestLocalLeaseTax>(object({
  jurisdiction: string(),
}));