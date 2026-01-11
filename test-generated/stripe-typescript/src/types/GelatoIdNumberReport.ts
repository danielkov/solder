import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoDataIdNumberReportDate } from './GelatoDataIdNumberReportDate';
import { GelatoDataIdNumberReportDateSchema } from './GelatoDataIdNumberReportDate';
import type { GelatoIdNumberReportError } from './GelatoIdNumberReportError';
import { GelatoIdNumberReportErrorSchema } from './GelatoIdNumberReportError';
/**
 * GelatoIdNumberReport
 *
 * Result from an id_number check
 */
export interface GelatoIdNumberReport {
  /**
   * Date of birth.
   */
  dob?: GelatoDataIdNumberReportDate;
  /**
   * Details on the verification error. Present when status is `unverified`.
   */
  error?: GelatoIdNumberReportError;
  /**
   * First name.
   */
  firstName?: string;
  /**
   * ID number. When `id_number_type` is `us_ssn`, only the last 4 digits are present.
   */
  idNumber?: string;
  /**
   * Type of ID number.
   */
  idNumberType?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Status of this `id_number` check.
   */
  status: string;
}

export const GelatoIdNumberReportSchema: TypedSchema<GelatoIdNumberReport> = typed<GelatoIdNumberReport>(object({
  get dob() { return optional(GelatoDataIdNumberReportDateSchema) },
  get error() { return optional(GelatoIdNumberReportErrorSchema) },
  firstName: optional(string()),
  idNumber: optional(string()),
  idNumberType: optional(string()),
  lastName: optional(string()),
  status: string(),
}));