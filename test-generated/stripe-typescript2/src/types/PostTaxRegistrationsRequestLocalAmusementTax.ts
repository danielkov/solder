import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * local_amusement_tax
 */
export interface PostTaxRegistrationsRequestLocalAmusementTax {
  jurisdiction: string;
}

export const PostTaxRegistrationsRequestLocalAmusementTaxSchema: TypedSchema<PostTaxRegistrationsRequestLocalAmusementTax> = typed<PostTaxRegistrationsRequestLocalAmusementTax>(object({ jurisdiction: string() }));
