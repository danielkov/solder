import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceOptionalItemAdjustableQuantity } from './PaymentLinksResourceOptionalItemAdjustableQuantity';
import { PaymentLinksResourceOptionalItemAdjustableQuantitySchema } from './PaymentLinksResourceOptionalItemAdjustableQuantity';
/**
 * PaymentLinksResourceOptionalItem
 *
 * 
 */
export interface PaymentLinksResourceOptionalItem {
  adjustableQuantity?: PaymentLinksResourceOptionalItemAdjustableQuantity;
  price: string;
  quantity: number;
}

export const PaymentLinksResourceOptionalItemSchema: TypedSchema<PaymentLinksResourceOptionalItem> = typed<PaymentLinksResourceOptionalItem>(object({
  get adjustableQuantity() { return optional(PaymentLinksResourceOptionalItemAdjustableQuantitySchema) },
  price: string(),
  quantity: number(),
}));