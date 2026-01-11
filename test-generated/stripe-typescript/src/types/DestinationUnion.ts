import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { DeletedBankAccount } from './DeletedBankAccount';
import { DeletedBankAccountSchema } from './DeletedBankAccount';
import type { DeletedCard } from './DeletedCard';
import { DeletedCardSchema } from './DeletedCard';
export type DestinationUnion = string | BankAccount | Card | DeletedBankAccount | DeletedCard;

export const DestinationUnionSchema: TypedSchema<DestinationUnion> = typed<DestinationUnion>(union(string(), BankAccountSchema, CardSchema, DeletedBankAccountSchema, DeletedCardSchema));