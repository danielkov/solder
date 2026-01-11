import { TypedSchema, number, typed, union } from '@speakeasy-api/tonic';

import type { GetAccountsUnionObject } from './GetAccountsUnionObject';
import { GetAccountsUnionObjectSchema } from './GetAccountsUnionObject';
export type GetAccountsUnion = GetAccountsUnionObject | number;

export const GetAccountsUnionSchema: TypedSchema<GetAccountsUnion> = typed<GetAccountsUnion>(union(GetAccountsUnionObjectSchema, number()));