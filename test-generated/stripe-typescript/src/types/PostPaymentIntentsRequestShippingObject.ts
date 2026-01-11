import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestStatementDescriptorPrefixKana } from './PostAccountsRequestStatementDescriptorPrefixKana';
import { PostAccountsRequestStatementDescriptorPrefixKanaSchema } from './PostAccountsRequestStatementDescriptorPrefixKana';
import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
/**
 * amount_details_shipping_param
 */
export interface PostPaymentIntentsRequestShippingObject {
  amount?: PostBalanceSettingsRequestDelayDaysOverride;
  fromPostalCode?: PostAccountsRequestStatementDescriptorPrefixKana;
  toPostalCode?: PostAccountsRequestStatementDescriptorPrefixKana;
}

export const PostPaymentIntentsRequestShippingObjectSchema: TypedSchema<PostPaymentIntentsRequestShippingObject> = typed<PostPaymentIntentsRequestShippingObject>(object({
  get amount() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
  get fromPostalCode() { return optional(PostAccountsRequestStatementDescriptorPrefixKanaSchema) },
  get toPostalCode() { return optional(PostAccountsRequestStatementDescriptorPrefixKanaSchema) },
}));