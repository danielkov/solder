import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * The ID of the most recent non-draft revision of this invoice
 */
export type LatestRevisionOrRef = string | Invoice;

export const LatestRevisionOrRefSchema: TypedSchema<LatestRevisionOrRef> = typed<LatestRevisionOrRef>(union(string(), InvoiceSchema));
