import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostIssuingDisputesRequestCanceledObjectCanceledAt } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import { PostIssuingDisputesRequestCanceledObjectCanceledAtSchema } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import type { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import { PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema } from './PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana';
import type { PostPaymentIntentsRequestKonbiniObjectConfirmationNumber } from './PostPaymentIntentsRequestKonbiniObjectConfirmationNumber';
import { PostPaymentIntentsRequestKonbiniObjectConfirmationNumberSchema } from './PostPaymentIntentsRequestKonbiniObjectConfirmationNumber';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestKonbiniObject {
  confirmationNumber?: PostPaymentIntentsRequestKonbiniObjectConfirmationNumber;
  expiresAfterDays?: PostBalanceSettingsRequestDelayDaysOverride;
  expiresAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  productDescription?: PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestKonbiniObjectSchema: TypedSchema<PostPaymentIntentsRequestKonbiniObject> = typed<PostPaymentIntentsRequestKonbiniObject>(object({
  get confirmationNumber() { return optional(PostPaymentIntentsRequestKonbiniObjectConfirmationNumberSchema) },
  get expiresAfterDays() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
  get expiresAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get productDescription() { return optional(PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema) },
  setupFutureUsage: optional(string()),
}));