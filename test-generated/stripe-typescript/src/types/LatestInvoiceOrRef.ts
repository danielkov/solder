import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
export type LatestInvoiceOrRef = string | Invoice;

export const LatestInvoiceOrRefSchema: TypedSchema<LatestInvoiceOrRef> = typed<LatestInvoiceOrRef>(union(string(), InvoiceSchema));