import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
export type DefaultSourceUnion = string | BankAccount | Card | Source;

export const DefaultSourceUnionSchema: TypedSchema<DefaultSourceUnion> = typed<DefaultSourceUnion>(union(string(), BankAccountSchema, CardSchema, SourceSchema));