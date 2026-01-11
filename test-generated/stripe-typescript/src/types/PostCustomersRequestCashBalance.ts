import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomersRequestSettings } from './PostCustomersRequestSettings';
import { PostCustomersRequestSettingsSchema } from './PostCustomersRequestSettings';
/**
 * cash_balance_param
 *
 * Balance information and default balance settings for this customer.
 */
export interface PostCustomersRequestCashBalance {
  /**
   * balance_settings_param
   */
  settings?: PostCustomersRequestSettings;
}

export const PostCustomersRequestCashBalanceSchema: TypedSchema<PostCustomersRequestCashBalance> = typed<PostCustomersRequestCashBalance>(object({
  get settings() { return optional(PostCustomersRequestSettingsSchema) },
}));