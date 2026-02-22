import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestShippingCostObject } from './PostInvoicesInvoiceRequestShippingCostObject';
import { PostInvoicesInvoiceRequestShippingCostObjectSchema } from './PostInvoicesInvoiceRequestShippingCostObject';
/**
 * Settings for the cost of shipping for this invoice.
 */
export type PostInvoicesInvoiceRequestShippingCost = PostInvoicesInvoiceRequestShippingCostObject | string;

export const PostInvoicesInvoiceRequestShippingCostSchema: TypedSchema<PostInvoicesInvoiceRequestShippingCost> = typed<PostInvoicesInvoiceRequestShippingCost>(union(PostInvoicesInvoiceRequestShippingCostObjectSchema, string()));
