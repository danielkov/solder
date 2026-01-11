import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostPaymentIntentsRequestLineItems } from './PostPaymentIntentsRequestLineItems';
import { PostPaymentIntentsRequestLineItemsSchema } from './PostPaymentIntentsRequestLineItems';
import type { PostPaymentIntentsRequestShipping } from './PostPaymentIntentsRequestShipping';
import { PostPaymentIntentsRequestShippingSchema } from './PostPaymentIntentsRequestShipping';
import type { PostPaymentIntentsRequestTax } from './PostPaymentIntentsRequestTax';
import { PostPaymentIntentsRequestTaxSchema } from './PostPaymentIntentsRequestTax';
/**
 * amount_details_param
 */
export interface PostPaymentIntentsIntentRequestAmountDetailsObject {
  discountAmount?: PostBalanceSettingsRequestDelayDaysOverride;
  lineItems?: PostPaymentIntentsRequestLineItems;
  shipping?: PostPaymentIntentsRequestShipping;
  tax?: PostPaymentIntentsRequestTax;
}

export const PostPaymentIntentsIntentRequestAmountDetailsObjectSchema: TypedSchema<PostPaymentIntentsIntentRequestAmountDetailsObject> = typed<PostPaymentIntentsIntentRequestAmountDetailsObject>(object({
  get discountAmount() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
  get lineItems() { return optional(PostPaymentIntentsRequestLineItemsSchema) },
  get shipping() { return optional(PostPaymentIntentsRequestShippingSchema) },
  get tax() { return optional(PostPaymentIntentsRequestTaxSchema) },
}));