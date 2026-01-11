import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestTrialSettings } from './PostCheckoutSessionsRequestTrialSettings';
import { PostCheckoutSessionsRequestTrialSettingsSchema } from './PostCheckoutSessionsRequestTrialSettings';
export type PostPaymentLinksPaymentLinkRequestTrialSettings = PostCheckoutSessionsRequestTrialSettings | string;

export const PostPaymentLinksPaymentLinkRequestTrialSettingsSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestTrialSettings> = typed<PostPaymentLinksPaymentLinkRequestTrialSettings>(union(PostCheckoutSessionsRequestTrialSettingsSchema, string()));