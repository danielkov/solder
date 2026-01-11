import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
/**
 * Polymorphic
 */
export type DataItemUnion2 = BankAccount | Card | Source;

export const DataItemUnion2Schema: TypedSchema<DataItemUnion2> = typed<DataItemUnion2>(union(BankAccountSchema, CardSchema, SourceSchema));