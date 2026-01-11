import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostInvoicesInvoiceRequestShippingCostObject } from './PostInvoicesInvoiceRequestShippingCostObject';
import { PostInvoicesInvoiceRequestShippingCostObjectSchema } from './PostInvoicesInvoiceRequestShippingCostObject';
export type PostInvoicesInvoiceRequestShippingCost = PostInvoicesInvoiceRequestShippingCostObject | string;

export const PostInvoicesInvoiceRequestShippingCostSchema: TypedSchema<PostInvoicesInvoiceRequestShippingCost> = typed<PostInvoicesInvoiceRequestShippingCost>(union(PostInvoicesInvoiceRequestShippingCostObjectSchema, string()));