import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionBusinessName } from './PaymentPagesCheckoutSessionBusinessName';
import { PaymentPagesCheckoutSessionBusinessNameSchema } from './PaymentPagesCheckoutSessionBusinessName';
import type { PaymentPagesCheckoutSessionIndividualName } from './PaymentPagesCheckoutSessionIndividualName';
import { PaymentPagesCheckoutSessionIndividualNameSchema } from './PaymentPagesCheckoutSessionIndividualName';
/**
 * PaymentPagesCheckoutSessionNameCollection
 *
 * 
 */
export interface PaymentPagesCheckoutSessionNameCollection {
  /**
   * PaymentPagesCheckoutSessionBusinessName
   *
   * 
   */
  business?: PaymentPagesCheckoutSessionBusinessName;
  /**
   * PaymentPagesCheckoutSessionIndividualName
   *
   * 
   */
  individual?: PaymentPagesCheckoutSessionIndividualName;
}

export const PaymentPagesCheckoutSessionNameCollectionSchema: TypedSchema<PaymentPagesCheckoutSessionNameCollection> = typed<PaymentPagesCheckoutSessionNameCollection>(object({
  get business() { return optional(PaymentPagesCheckoutSessionBusinessNameSchema) },
  get individual() { return optional(PaymentPagesCheckoutSessionIndividualNameSchema) },
}));