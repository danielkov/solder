import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestDob } from './PostPaymentIntentsRequestDob';
import { PostPaymentIntentsRequestDobSchema } from './PostPaymentIntentsRequestDob';
/**
 * param
 */
export interface PostPaymentIntentsRequestKlarna {
  /**
   * date_of_birth
   */
  dob?: PostPaymentIntentsRequestDob;
}

export const PostPaymentIntentsRequestKlarnaSchema: TypedSchema<PostPaymentIntentsRequestKlarna> = typed<PostPaymentIntentsRequestKlarna>(object({
  get dob() { return optional(PostPaymentIntentsRequestDobSchema) },
}));