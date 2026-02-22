import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * The most recent invoice this subscription has generated.
 */
export type LatestInvoiceOrRef = string | Invoice;

export const LatestInvoiceOrRefSchema: TypedSchema<LatestInvoiceOrRef> = typed<LatestInvoiceOrRef>(union(string(), InvoiceSchema));
