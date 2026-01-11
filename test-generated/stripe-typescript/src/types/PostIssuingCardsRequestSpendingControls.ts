import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestSpendingLimitsItem } from './PostIssuingCardholdersRequestSpendingLimitsItem';
import { PostIssuingCardholdersRequestSpendingLimitsItemSchema } from './PostIssuingCardholdersRequestSpendingLimitsItem';
/**
 * authorization_controls_param
 *
 * Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
 */
export interface PostIssuingCardsRequestSpendingControls {
  allowedCategories?: Array<string>;
  allowedMerchantCountries?: Array<string>;
  blockedCategories?: Array<string>;
  blockedMerchantCountries?: Array<string>;
  spendingLimits?: Array<PostIssuingCardholdersRequestSpendingLimitsItem>;
}

export const PostIssuingCardsRequestSpendingControlsSchema: TypedSchema<PostIssuingCardsRequestSpendingControls> = typed<PostIssuingCardsRequestSpendingControls>(object({
  allowedCategories: optional(array(string())),
  allowedMerchantCountries: optional(array(string())),
  blockedCategories: optional(array(string())),
  blockedMerchantCountries: optional(array(string())),
  get spendingLimits() { return optional(array(PostIssuingCardholdersRequestSpendingLimitsItemSchema)) },
}));