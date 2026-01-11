import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
export type SourceUnion = BankAccount | Card | Source;

export const SourceUnionSchema: TypedSchema<SourceUnion> = typed<SourceUnion>(union(BankAccountSchema, CardSchema, SourceSchema));