import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * WeChat, owned by Tencent, is China's leading mobile app with over 1 billion monthly active users. Chinese consumers can use WeChat Pay to pay for goods and services inside of businesses' apps and websites. WeChat Pay users buy most frequently in gaming, e-commerce, travel, online education, and food/nutrition. Check this [page](https://stripe.com/docs/payments/wechat-pay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestWechatPay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestWechatPaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestWechatPay> = typed<PostPaymentMethodConfigurationsRequestWechatPay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));