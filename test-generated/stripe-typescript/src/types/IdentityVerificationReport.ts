import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoDocumentReport } from './GelatoDocumentReport';
import { GelatoDocumentReportSchema } from './GelatoDocumentReport';
import type { GelatoEmailReport } from './GelatoEmailReport';
import { GelatoEmailReportSchema } from './GelatoEmailReport';
import type { GelatoIdNumberReport } from './GelatoIdNumberReport';
import { GelatoIdNumberReportSchema } from './GelatoIdNumberReport';
import type { GelatoPhoneReport } from './GelatoPhoneReport';
import { GelatoPhoneReportSchema } from './GelatoPhoneReport';
import type { GelatoSelfieReport } from './GelatoSelfieReport';
import { GelatoSelfieReportSchema } from './GelatoSelfieReport';
import type { GelatoVerificationReportOptions } from './GelatoVerificationReportOptions';
import { GelatoVerificationReportOptionsSchema } from './GelatoVerificationReportOptions';
/**
 * GelatoVerificationReport
 *
 * A VerificationReport is the result of an attempt to collect and verify data from a user.
The collection of verification checks performed is determined from the `type` and `options`
parameters used. You can find the result of each verification check performed in the
appropriate sub-resource: `document`, `id_number`, `selfie`.

Each VerificationReport contains a copy of any data collected by the user as well as
reference IDs which can be used to access collected images through the [FileUpload](https://stripe.com/docs/api/files)
API. To configure and create VerificationReports, use the
[VerificationSession](https://stripe.com/docs/api/identity/verification_sessions) API.

Related guide: [Accessing verification results](https://stripe.com/docs/identity/verification-sessions#results).
 */
export interface IdentityVerificationReport {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * GelatoDocumentReport
   *
   * Result from a document check
   */
  document?: GelatoDocumentReport;
  /**
   * GelatoEmailReport
   *
   * Result from a email check
   */
  email?: GelatoEmailReport;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * GelatoIdNumberReport
   *
   * Result from an id_number check
   */
  idNumber?: GelatoIdNumberReport;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * GelatoVerificationReportOptions
   *
   * 
   */
  options?: GelatoVerificationReportOptions;
  /**
   * GelatoPhoneReport
   *
   * Result from a phone check
   */
  phone?: GelatoPhoneReport;
  /**
   * GelatoSelfieReport
   *
   * Result from a selfie check
   */
  selfie?: GelatoSelfieReport;
  /**
   * Type of report.
   */
  type: string;
  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verificationFlow?: string;
  /**
   * ID of the VerificationSession that created this report.
   */
  verificationSession?: string;
}

export const IdentityVerificationReportSchema: TypedSchema<IdentityVerificationReport> = typed<IdentityVerificationReport>(object({
  clientReferenceId: optional(string()),
  created: number(),
  get document() { return optional(GelatoDocumentReportSchema) },
  get email() { return optional(GelatoEmailReportSchema) },
  id: string(),
  get idNumber() { return optional(GelatoIdNumberReportSchema) },
  livemode: boolean(),
  object: string(),
  get options() { return optional(GelatoVerificationReportOptionsSchema) },
  get phone() { return optional(GelatoPhoneReportSchema) },
  get selfie() { return optional(GelatoSelfieReportSchema) },
  type: string(),
  verificationFlow: optional(string()),
  verificationSession: optional(string()),
}));