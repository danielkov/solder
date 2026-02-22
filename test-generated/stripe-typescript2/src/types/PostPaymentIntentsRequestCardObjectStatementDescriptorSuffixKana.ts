import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana = string | string;

export const PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema: TypedSchema<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana> = typed<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>(union(string(), string()));
