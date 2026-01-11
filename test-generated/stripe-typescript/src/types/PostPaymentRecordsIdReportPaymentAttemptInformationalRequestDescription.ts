import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription = string | string;

export const PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescriptionSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription> = typed<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription>(union(string(), string()));