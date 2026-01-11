import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoEmailReportError } from './GelatoEmailReportError';
import { GelatoEmailReportErrorSchema } from './GelatoEmailReportError';
/**
 * GelatoEmailReport
 *
 * Result from a email check
 */
export interface GelatoEmailReport {
  /**
   * Email to be verified.
   */
  email?: string;
  /**
   * Details on the verification error. Present when status is `unverified`.
   */
  error?: GelatoEmailReportError;
  /**
   * Status of this `email` check.
   */
  status: string;
}

export const GelatoEmailReportSchema: TypedSchema<GelatoEmailReport> = typed<GelatoEmailReport>(object({
  email: optional(string()),
  get error() { return optional(GelatoEmailReportErrorSchema) },
  status: string(),
}));