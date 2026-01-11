import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerCashBalanceRequestSettings } from './PostCustomersCustomerCashBalanceRequestSettings';
import { PostCustomersCustomerCashBalanceRequestSettingsSchema } from './PostCustomersCustomerCashBalanceRequestSettings';
export interface PostCustomersCustomerCashBalanceRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * balance_settings_param
   *
   * A hash of settings for this cash balance.
   */
  settings?: PostCustomersCustomerCashBalanceRequestSettings;
}

export const PostCustomersCustomerCashBalanceRequestSchema: TypedSchema<PostCustomersCustomerCashBalanceRequest> = typed<PostCustomersCustomerCashBalanceRequest>(object({
  expand: optional(array(string())),
  get settings() { return optional(PostCustomersCustomerCashBalanceRequestSettingsSchema) },
}));