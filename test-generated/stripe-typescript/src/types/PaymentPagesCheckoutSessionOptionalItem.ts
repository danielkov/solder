import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity } from './PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity';
import { PaymentPagesCheckoutSessionOptionalItemAdjustableQuantitySchema } from './PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity';
/**
 * PaymentPagesCheckoutSessionOptionalItem
 *
 * 
 */
export interface PaymentPagesCheckoutSessionOptionalItem {
  adjustableQuantity?: PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity;
  price: string;
  quantity: number;
}

export const PaymentPagesCheckoutSessionOptionalItemSchema: TypedSchema<PaymentPagesCheckoutSessionOptionalItem> = typed<PaymentPagesCheckoutSessionOptionalItem>(object({
  get adjustableQuantity() { return optional(PaymentPagesCheckoutSessionOptionalItemAdjustableQuantitySchema) },
  price: string(),
  quantity: number(),
}));