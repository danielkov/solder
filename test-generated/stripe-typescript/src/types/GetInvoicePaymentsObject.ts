import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_param
 */
export interface GetInvoicePaymentsObject {
  paymentIntent?: string;
  paymentRecord?: string;
  type: string;
}

export const GetInvoicePaymentsObjectSchema: TypedSchema<GetInvoicePaymentsObject> = typed<GetInvoicePaymentsObject>(object({
  paymentIntent: optional(string()),
  paymentRecord: optional(string()),
  type: string(),
}));