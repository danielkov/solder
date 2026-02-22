import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestBoleto {
  taxId: string;
}

export const PostPaymentIntentsRequestBoletoSchema: TypedSchema<PostPaymentIntentsRequestBoleto> = typed<PostPaymentIntentsRequestBoleto>(object({ taxId: string() }));
