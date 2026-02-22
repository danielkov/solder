import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji = string | string;

export const PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanjiSchema: TypedSchema<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji> = typed<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanji>(union(string(), string()));
