import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
export type DestinationOrRef = string | Account;

export const DestinationOrRefSchema: TypedSchema<DestinationOrRef> = typed<DestinationOrRef>(union(string(), AccountSchema));