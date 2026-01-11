import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure {
  authenticationFlow?: string;
  result?: string;
  resultReason?: string;
  version?: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecureSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure>(object({
  authenticationFlow: optional(string()),
  result: optional(string()),
  resultReason: optional(string()),
  version: optional(string()),
}));