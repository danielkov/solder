import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { CreditNote } from './CreditNote';
import { CreditNoteSchema } from './CreditNote';
/**
 * The ID of the credit note (if any) related to the transaction.
 */
export type CreditNoteOrRef = string | CreditNote;

export const CreditNoteOrRefSchema: TypedSchema<CreditNoteOrRef> = typed<CreditNoteOrRef>(union(string(), CreditNoteSchema));
