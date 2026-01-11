import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
/**
 * Polymorphic
 */
export type DataItemUnion = BankAccount | Card;

export const DataItemUnionSchema: TypedSchema<DataItemUnion> = typed<DataItemUnion>(union(BankAccountSchema, CardSchema));