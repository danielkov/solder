import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestMinimumBalanceByCurrencyObject } from './PostBalanceSettingsRequestMinimumBalanceByCurrencyObject';
import { PostBalanceSettingsRequestMinimumBalanceByCurrencyObjectSchema } from './PostBalanceSettingsRequestMinimumBalanceByCurrencyObject';
export type PostBalanceSettingsRequestMinimumBalanceByCurrency = PostBalanceSettingsRequestMinimumBalanceByCurrencyObject | string;

export const PostBalanceSettingsRequestMinimumBalanceByCurrencySchema: TypedSchema<PostBalanceSettingsRequestMinimumBalanceByCurrency> = typed<PostBalanceSettingsRequestMinimumBalanceByCurrency>(union(PostBalanceSettingsRequestMinimumBalanceByCurrencyObjectSchema, string()));