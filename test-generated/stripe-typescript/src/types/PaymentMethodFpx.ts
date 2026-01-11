import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_fpx
 *
 * 
 */
export interface PaymentMethodFpx {
  /**
   * The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
   */
  bank: string;
}

export const PaymentMethodFpxSchema: TypedSchema<PaymentMethodFpx> = typed<PaymentMethodFpx>(object({
  bank: string(),
}));