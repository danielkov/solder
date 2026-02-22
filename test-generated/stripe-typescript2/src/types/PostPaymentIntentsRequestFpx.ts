import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestFpx {
  bank: string;
}

export const PostPaymentIntentsRequestFpxSchema: TypedSchema<PostPaymentIntentsRequestFpx> = typed<PostPaymentIntentsRequestFpx>(object({ bank: string() }));
