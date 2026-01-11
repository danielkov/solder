import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana = string | string;

export const PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKanaSchema: TypedSchema<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana> = typed<PostPaymentIntentsRequestCardObjectStatementDescriptorSuffixKana>(union(string(), string()));