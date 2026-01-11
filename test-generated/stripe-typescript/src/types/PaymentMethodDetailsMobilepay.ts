import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { InternalCard } from './InternalCard';
import { InternalCardSchema } from './InternalCard';
/**
 * payment_method_details_mobilepay
 *
 * 
 */
export interface PaymentMethodDetailsMobilepay {
  /**
   * Internal card details
   */
  card?: InternalCard;
}

export const PaymentMethodDetailsMobilepaySchema: TypedSchema<PaymentMethodDetailsMobilepay> = typed<PaymentMethodDetailsMobilepay>(object({
  get card() { return optional(InternalCardSchema) },
}));