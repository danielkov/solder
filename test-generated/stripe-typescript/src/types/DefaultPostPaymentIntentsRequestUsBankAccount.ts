import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestUsBankAccountObject } from './DefaultPostPaymentIntentsRequestUsBankAccountObject';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObject';
export type DefaultPostPaymentIntentsRequestUsBankAccount = DefaultPostPaymentIntentsRequestUsBankAccountObject | string;

export const DefaultPostPaymentIntentsRequestUsBankAccountSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccount> = typed<DefaultPostPaymentIntentsRequestUsBankAccount>(union(DefaultPostPaymentIntentsRequestUsBankAccountObjectSchema, string()));