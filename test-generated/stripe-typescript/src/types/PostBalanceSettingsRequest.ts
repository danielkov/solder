import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestPayments } from './PostBalanceSettingsRequestPayments';
import { PostBalanceSettingsRequestPaymentsSchema } from './PostBalanceSettingsRequestPayments';
export interface PostBalanceSettingsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * payments
   *
   * Settings that apply to the [Payments Balance](https://docs.stripe.com/api/balance).
   */
  payments?: PostBalanceSettingsRequestPayments;
}

export const PostBalanceSettingsRequestSchema: TypedSchema<PostBalanceSettingsRequest> = typed<PostBalanceSettingsRequest>(object({
  expand: optional(array(string())),
  get payments() { return optional(PostBalanceSettingsRequestPaymentsSchema) },
}));