import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoSelfieReportError } from './GelatoSelfieReportError';
import { GelatoSelfieReportErrorSchema } from './GelatoSelfieReportError';
/**
 * GelatoSelfieReport
 *
 * Result from a selfie check
 */
export interface GelatoSelfieReport {
  /**
   * ID of the [File](https://stripe.com/docs/api/files) holding the image of the identity document used in this check.
   */
  document?: string;
  /**
   * Details on the verification error. Present when status is `unverified`.
   */
  error?: GelatoSelfieReportError;
  /**
   * ID of the [File](https://stripe.com/docs/api/files) holding the image of the selfie used in this check.
   */
  selfie?: string;
  /**
   * Status of this `selfie` check.
   */
  status: string;
}

export const GelatoSelfieReportSchema: TypedSchema<GelatoSelfieReport> = typed<GelatoSelfieReport>(object({
  document: optional(string()),
  get error() { return optional(GelatoSelfieReportErrorSchema) },
  selfie: optional(string()),
  status: string(),
}));