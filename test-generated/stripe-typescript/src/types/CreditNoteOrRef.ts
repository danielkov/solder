import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { CreditNote } from './CreditNote';
import { CreditNoteSchema } from './CreditNote';
export type CreditNoteOrRef = string | CreditNote;

export const CreditNoteOrRefSchema: TypedSchema<CreditNoteOrRef> = typed<CreditNoteOrRef>(union(string(), CreditNoteSchema));