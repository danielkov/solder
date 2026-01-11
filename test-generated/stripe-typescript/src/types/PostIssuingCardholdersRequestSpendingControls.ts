import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestSpendingLimitsItem } from './PostIssuingCardholdersRequestSpendingLimitsItem';
import { PostIssuingCardholdersRequestSpendingLimitsItemSchema } from './PostIssuingCardholdersRequestSpendingLimitsItem';
/**
 * authorization_controls_param_v2
 *
 * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
 */
export interface PostIssuingCardholdersRequestSpendingControls {
  allowedCategories?: Array<string>;
  allowedMerchantCountries?: Array<string>;
  blockedCategories?: Array<string>;
  blockedMerchantCountries?: Array<string>;
  spendingLimits?: Array<PostIssuingCardholdersRequestSpendingLimitsItem>;
  spendingLimitsCurrency?: string;
}

export const PostIssuingCardholdersRequestSpendingControlsSchema: TypedSchema<PostIssuingCardholdersRequestSpendingControls> = typed<PostIssuingCardholdersRequestSpendingControls>(object({
  allowedCategories: optional(array(string())),
  allowedMerchantCountries: optional(array(string())),
  blockedCategories: optional(array(string())),
  blockedMerchantCountries: optional(array(string())),
  get spendingLimits() { return optional(array(PostIssuingCardholdersRequestSpendingLimitsItemSchema)) },
  spendingLimitsCurrency: optional(string()),
}));