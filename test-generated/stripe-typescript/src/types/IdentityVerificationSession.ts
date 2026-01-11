import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GelatoProvidedDetails } from './GelatoProvidedDetails';
import { GelatoProvidedDetailsSchema } from './GelatoProvidedDetails';
import type { GelatoRelatedPerson } from './GelatoRelatedPerson';
import { GelatoRelatedPersonSchema } from './GelatoRelatedPerson';
import type { GelatoSessionLastError } from './GelatoSessionLastError';
import { GelatoSessionLastErrorSchema } from './GelatoSessionLastError';
import type { GelatoVerificationSessionOptions } from './GelatoVerificationSessionOptions';
import { GelatoVerificationSessionOptionsSchema } from './GelatoVerificationSessionOptions';
import type { GelatoVerifiedOutputs } from './GelatoVerifiedOutputs';
import { GelatoVerifiedOutputsSchema } from './GelatoVerifiedOutputs';
import type { LastVerificationReportOrRef } from './LastVerificationReportOrRef';
import { LastVerificationReportOrRefSchema } from './LastVerificationReportOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { VerificationSessionRedaction } from './VerificationSessionRedaction';
import { VerificationSessionRedactionSchema } from './VerificationSessionRedaction';
/**
 * GelatoVerificationSession
 *
 * A VerificationSession guides you through the process of collecting and verifying the identities
of your users. It contains details about the type of verification, such as what [verification
check](/docs/identity/verification-checks) to perform. Only create one VerificationSession for
each verification in your system.

A VerificationSession transitions through [multiple
statuses](/docs/identity/how-sessions-work) throughout its lifetime as it progresses through
the verification flow. The VerificationSession contains the user's verified data after
verification checks are complete.

Related guide: [The Verification Sessions API](https://stripe.com/docs/identity/verification-sessions)
 */
export interface IdentityVerificationSession {
  /**
   * A string to reference this user. This can be a customer ID, a session ID, or similar, and can be used to reconcile this verification with your internal systems.
   */
  clientReferenceId?: string;
  /**
   * The short-lived client secret used by Stripe.js to [show a verification modal](https://stripe.com/docs/js/identity/modal) inside your app. This client secret expires after 24 hours and can only be used once. Don’t store it, log it, embed it in a URL, or expose it to anyone other than the user. Make sure that you have TLS enabled on any page that includes the client secret. Refer to our docs on [passing the client secret to the frontend](https://stripe.com/docs/identity/verification-sessions#client-secret) to learn more.
   */
  clientSecret?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * If present, this property tells you the last error encountered when processing the verification.
   */
  lastError?: GelatoSessionLastError;
  /**
   * ID of the most recent VerificationReport. [Learn more about accessing detailed verification results.](https://stripe.com/docs/identity/verification-sessions#results)
   */
  lastVerificationReport?: LastVerificationReportOrRef;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * A set of options for the session’s verification checks.
   */
  options?: GelatoVerificationSessionOptions;
  /**
   * Details provided about the user being verified. These details may be shown to the user.
   */
  providedDetails?: GelatoProvidedDetails;
  /**
   * Redaction status of this VerificationSession. If the VerificationSession is not redacted, this field will be null.
   */
  redaction?: VerificationSessionRedaction;
  /**
   * Customer ID
   */
  relatedCustomer?: string;
  /**
   * GelatoRelatedPerson
   *
   * 
   */
  relatedPerson?: GelatoRelatedPerson;
  /**
   * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
   */
  status: string;
  /**
   * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed.
   */
  type: string;
  /**
   * The short-lived URL that you use to redirect a user to Stripe to submit their identity information. This URL expires after 48 hours and can only be used once. Don’t store it, log it, send it in emails or expose it to anyone other than the user. Refer to our docs on [verifying identity documents](https://stripe.com/docs/identity/verify-identity-documents?platform=web&type=redirect) to learn how to redirect users to Stripe.
   */
  url?: string;
  /**
   * The configuration token of a verification flow from the dashboard.
   */
  verificationFlow?: string;
  /**
   * The user’s verified data.
   */
  verifiedOutputs?: GelatoVerifiedOutputs;
}

export const IdentityVerificationSessionSchema: TypedSchema<IdentityVerificationSession> = typed<IdentityVerificationSession>(object({
  clientReferenceId: optional(string()),
  clientSecret: optional(string()),
  created: number(),
  id: string(),
  get lastError() { return optional(GelatoSessionLastErrorSchema) },
  get lastVerificationReport() { return optional(LastVerificationReportOrRefSchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get options() { return optional(GelatoVerificationSessionOptionsSchema) },
  get providedDetails() { return optional(GelatoProvidedDetailsSchema) },
  get redaction() { return optional(VerificationSessionRedactionSchema) },
  relatedCustomer: optional(string()),
  get relatedPerson() { return optional(GelatoRelatedPersonSchema) },
  status: string(),
  type: string(),
  url: optional(string()),
  verificationFlow: optional(string()),
  get verifiedOutputs() { return optional(GelatoVerifiedOutputsSchema) },
}));