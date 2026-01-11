import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceBusinessName } from './PaymentLinksResourceBusinessName';
import { PaymentLinksResourceBusinessNameSchema } from './PaymentLinksResourceBusinessName';
import type { PaymentLinksResourceIndividualName } from './PaymentLinksResourceIndividualName';
import { PaymentLinksResourceIndividualNameSchema } from './PaymentLinksResourceIndividualName';
/**
 * PaymentLinksResourceNameCollection
 *
 * 
 */
export interface PaymentLinksResourceNameCollection {
  /**
   * PaymentLinksResourceBusinessName
   *
   * 
   */
  business?: PaymentLinksResourceBusinessName;
  /**
   * PaymentLinksResourceIndividualName
   *
   * 
   */
  individual?: PaymentLinksResourceIndividualName;
}

export const PaymentLinksResourceNameCollectionSchema: TypedSchema<PaymentLinksResourceNameCollection> = typed<PaymentLinksResourceNameCollection>(object({
  get business() { return optional(PaymentLinksResourceBusinessNameSchema) },
  get individual() { return optional(PaymentLinksResourceIndividualNameSchema) },
}));