import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
/**
 * Polymorphic
 */
export type PaymentSource = Account | BankAccount | Card | Source;

export const PaymentSourceSchema: TypedSchema<PaymentSource> = typed<PaymentSource>(union(AccountSchema, BankAccountSchema, CardSchema, SourceSchema));