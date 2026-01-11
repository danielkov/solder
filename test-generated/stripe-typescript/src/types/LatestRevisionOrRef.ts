import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
export type LatestRevisionOrRef = string | Invoice;

export const LatestRevisionOrRefSchema: TypedSchema<LatestRevisionOrRef> = typed<LatestRevisionOrRef>(union(string(), InvoiceSchema));