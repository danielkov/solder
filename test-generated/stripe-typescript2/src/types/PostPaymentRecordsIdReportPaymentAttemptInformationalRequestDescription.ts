import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * An arbitrary string attached to the object. Often useful for displaying to users.
 */
export type PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription = string | string;

export const PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescriptionSchema: TypedSchema<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription> = typed<PostPaymentRecordsIdReportPaymentAttemptInformationalRequestDescription>(union(string(), string()));
