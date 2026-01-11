import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { BankAccount } from './BankAccount';
import { BankAccountSchema } from './BankAccount';
import type { Card } from './Card';
import { CardSchema } from './Card';
import type { Source } from './Source';
import { SourceSchema } from './Source';
export type PostCustomersCustomerBankAccountsIdUnion = Card | BankAccount | Source;

export const PostCustomersCustomerBankAccountsIdUnionSchema: TypedSchema<PostCustomersCustomerBankAccountsIdUnion> = typed<PostCustomersCustomerBankAccountsIdUnion>(union(CardSchema, BankAccountSchema, SourceSchema));