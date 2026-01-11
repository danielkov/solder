import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
export type InvoiceOrRef = string | Invoice;

export const InvoiceOrRefSchema: TypedSchema<InvoiceOrRef> = typed<InvoiceOrRef>(union(string(), InvoiceSchema));