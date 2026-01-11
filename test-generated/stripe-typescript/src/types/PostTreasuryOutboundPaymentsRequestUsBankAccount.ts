import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostTreasuryOutboundPaymentsRequestUsBankAccountObject } from './PostTreasuryOutboundPaymentsRequestUsBankAccountObject';
import { PostTreasuryOutboundPaymentsRequestUsBankAccountObjectSchema } from './PostTreasuryOutboundPaymentsRequestUsBankAccountObject';
export type PostTreasuryOutboundPaymentsRequestUsBankAccount = PostTreasuryOutboundPaymentsRequestUsBankAccountObject | string;

export const PostTreasuryOutboundPaymentsRequestUsBankAccountSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestUsBankAccount> = typed<PostTreasuryOutboundPaymentsRequestUsBankAccount>(union(PostTreasuryOutboundPaymentsRequestUsBankAccountObjectSchema, string()));