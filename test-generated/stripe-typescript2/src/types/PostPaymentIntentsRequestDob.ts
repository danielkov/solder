import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * date_of_birth
 */
export interface PostPaymentIntentsRequestDob {
  day: number;
  month: number;
  year: number;
}

export const PostPaymentIntentsRequestDobSchema: TypedSchema<PostPaymentIntentsRequestDob> = typed<PostPaymentIntentsRequestDob>(object({ day: number(), month: number(), year: number() }));
