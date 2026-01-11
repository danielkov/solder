import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks {
  addressLine1Check?: string;
  addressPostalCodeCheck?: string;
  cvcCheck?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecksSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks>(object({
  addressLine1Check: optional(string()),
  addressPostalCodeCheck: optional(string()),
  cvcCheck: optional(string()),
}));