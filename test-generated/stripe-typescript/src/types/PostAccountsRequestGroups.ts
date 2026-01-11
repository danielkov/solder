import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
/**
 * account_groups_specs
 *
 * A hash of account group type to tokens. These are account groups this account should be added to.
 */
export interface PostAccountsRequestGroups {
  paymentsPricing?: PostAccountsRequestPaymentsPricing;
}

export const PostAccountsRequestGroupsSchema: TypedSchema<PostAccountsRequestGroups> = typed<PostAccountsRequestGroups>(object({
  get paymentsPricing() { return optional(PostAccountsRequestPaymentsPricingSchema) },
}));