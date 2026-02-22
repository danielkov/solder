import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostBalanceSettingsRequestDelayDaysOverride = number | string;

export const PostBalanceSettingsRequestDelayDaysOverrideSchema: TypedSchema<PostBalanceSettingsRequestDelayDaysOverride> = typed<PostBalanceSettingsRequestDelayDaysOverride>(union(number(), string()));
