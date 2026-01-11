import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedBankAccount } from './DeletedBankAccount';
import { DeletedBankAccountSchema } from './DeletedBankAccount';
import type { DeletedCard } from './DeletedCard';
import { DeletedCardSchema } from './DeletedCard';
/**
 * Polymorphic
 */
export type DeletedExternalAccount = DeletedBankAccount | DeletedCard;

export const DeletedExternalAccountSchema: TypedSchema<DeletedExternalAccount> = typed<DeletedExternalAccount>(union(DeletedBankAccountSchema, DeletedCardSchema));