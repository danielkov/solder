import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * custom
 */
export interface DefaultPostPaymentRecordsReportPaymentRequestCustom {
  paymentReference: string;
}

export const DefaultPostPaymentRecordsReportPaymentRequestCustomSchema: TypedSchema<DefaultPostPaymentRecordsReportPaymentRequestCustom> = typed<DefaultPostPaymentRecordsReportPaymentRequestCustom>(object({
  paymentReference: string(),
}));