import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IdentityVerificationReport } from './IdentityVerificationReport';
import { IdentityVerificationReportSchema } from './IdentityVerificationReport';
export type LastVerificationReportOrRef = string | IdentityVerificationReport;

export const LastVerificationReportOrRefSchema: TypedSchema<LastVerificationReportOrRef> = typed<LastVerificationReportOrRef>(union(string(), IdentityVerificationReportSchema));