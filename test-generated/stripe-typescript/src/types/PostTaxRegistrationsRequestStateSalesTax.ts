import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestElectionsItem } from './PostTaxRegistrationsRequestElectionsItem';
import { PostTaxRegistrationsRequestElectionsItemSchema } from './PostTaxRegistrationsRequestElectionsItem';
/**
 * state_sales_tax
 */
export interface PostTaxRegistrationsRequestStateSalesTax {
  elections: Array<PostTaxRegistrationsRequestElectionsItem>;
}

export const PostTaxRegistrationsRequestStateSalesTaxSchema: TypedSchema<PostTaxRegistrationsRequestStateSalesTax> = typed<PostTaxRegistrationsRequestStateSalesTax>(object({
  elections: array(PostTaxRegistrationsRequestElectionsItemSchema),
}));