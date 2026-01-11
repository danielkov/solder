import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
/**
 * Polymorphic
 */
export type ExternalAccount = BankAccount | Card;

export const ExternalAccountSchema: TypedSchema<ExternalAccount> = typed<ExternalAccount>(union(BankAccountSchema, CardSchema));