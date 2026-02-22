import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IdentityVerificationReport } from './IdentityVerificationReport';
import { IdentityVerificationReportSchema } from './IdentityVerificationReport';
/**
 * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
 */
export type LastVerificationReportOrRef = string | IdentityVerificationReport;

export const LastVerificationReportOrRefSchema: TypedSchema<LastVerificationReportOrRef> = typed<LastVerificationReportOrRef>(union(string(), IdentityVerificationReportSchema));
