import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
 */
export type ShippingDocumentationOrRef = string | File;

export const ShippingDocumentationOrRefSchema: TypedSchema<ShippingDocumentationOrRef> = typed<ShippingDocumentationOrRef>(union(string(), FileSchema));
