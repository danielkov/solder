import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestDob } from './PostPaymentIntentsRequestDob';
import { PostPaymentIntentsRequestDobSchema } from './PostPaymentIntentsRequestDob';
/**
 * param
 *
 * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
 */
export interface PostPaymentMethodsRequestKlarna {
  /**
   * date_of_birth
   */
  dob?: PostPaymentIntentsRequestDob;
}

export const PostPaymentMethodsRequestKlarnaSchema: TypedSchema<PostPaymentMethodsRequestKlarna> = typed<PostPaymentMethodsRequestKlarna>(object({
  get dob() { return optional(PostPaymentIntentsRequestDobSchema) },
}));