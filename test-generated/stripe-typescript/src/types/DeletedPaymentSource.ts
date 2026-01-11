import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { DeletedBankAccount } from './DeletedBankAccount';
import { DeletedBankAccountSchema } from './DeletedBankAccount';
import type { DeletedCard } from './DeletedCard';
import { DeletedCardSchema } from './DeletedCard';
/**
 * Polymorphic
 */
export type DeletedPaymentSource = DeletedBankAccount | DeletedCard;

export const DeletedPaymentSourceSchema: TypedSchema<DeletedPaymentSource> = typed<DeletedPaymentSource>(union(DeletedBankAccountSchema, DeletedCardSchema));