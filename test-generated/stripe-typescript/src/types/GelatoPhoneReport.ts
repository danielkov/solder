import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoPhoneReportError } from './GelatoPhoneReportError';
import { GelatoPhoneReportErrorSchema } from './GelatoPhoneReportError';
/**
 * GelatoPhoneReport
 *
 * Result from a phone check
 */
export interface GelatoPhoneReport {
  /**
   * Details on the verification error. Present when status is `unverified`.
   */
  error?: GelatoPhoneReportError;
  /**
   * Phone to be verified.
   */
  phone?: string;
  /**
   * Status of this `phone` check.
   */
  status: string;
}

export const GelatoPhoneReportSchema: TypedSchema<GelatoPhoneReport> = typed<GelatoPhoneReport>(object({
  get error() { return optional(GelatoPhoneReportErrorSchema) },
  phone: optional(string()),
  status: string(),
}));