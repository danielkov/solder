import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTaxRegistrationsRequestLocalAmusementTax } from './PostTaxRegistrationsRequestLocalAmusementTax';
import { PostTaxRegistrationsRequestLocalAmusementTaxSchema } from './PostTaxRegistrationsRequestLocalAmusementTax';
import type { PostTaxRegistrationsRequestLocalLeaseTax } from './PostTaxRegistrationsRequestLocalLeaseTax';
import { PostTaxRegistrationsRequestLocalLeaseTaxSchema } from './PostTaxRegistrationsRequestLocalLeaseTax';
import type { PostTaxRegistrationsRequestStateSalesTax } from './PostTaxRegistrationsRequestStateSalesTax';
import { PostTaxRegistrationsRequestStateSalesTaxSchema } from './PostTaxRegistrationsRequestStateSalesTax';
/**
 * united_states
 */
export interface PostTaxRegistrationsRequestUs {
  /**
   * local_amusement_tax
   */
  localAmusementTax?: PostTaxRegistrationsRequestLocalAmusementTax;
  /**
   * local_lease_tax
   */
  localLeaseTax?: PostTaxRegistrationsRequestLocalLeaseTax;
  state: string;
  /**
   * state_sales_tax
   */
  stateSalesTax?: PostTaxRegistrationsRequestStateSalesTax;
  type: string;
}

export const PostTaxRegistrationsRequestUsSchema: TypedSchema<PostTaxRegistrationsRequestUs> = typed<PostTaxRegistrationsRequestUs>(object({
  get localAmusementTax() { return optional(PostTaxRegistrationsRequestLocalAmusementTaxSchema) },
  get localLeaseTax() { return optional(PostTaxRegistrationsRequestLocalLeaseTaxSchema) },
  state: string(),
  get stateSalesTax() { return optional(PostTaxRegistrationsRequestStateSalesTaxSchema) },
  type: string(),
}));