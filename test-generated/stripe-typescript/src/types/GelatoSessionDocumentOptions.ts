import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * GelatoSessionDocumentOptions
 *
 * 
 */
export interface GelatoSessionDocumentOptions {
  /**
   * Array of strings of allowed identity document types. If the provided identity document isn’t one of the allowed types, the verification check will fail with a document_type_not_allowed error code.
   */
  allowedTypes?: Array<string>;
  /**
   * Collect an ID number and perform an [ID number check](https://stripe.com/docs/identity/verification-checks?type=id-number) with the document’s extracted name and date of birth.
   */
  requireIdNumber?: boolean;
  /**
   * Disable image uploads, identity document images have to be captured using the device’s camera.
   */
  requireLiveCapture?: boolean;
  /**
   * Capture a face image and perform a [selfie check](https://stripe.com/docs/identity/verification-checks?type=selfie) comparing a photo ID and a picture of your user’s face. [Learn more](https://stripe.com/docs/identity/selfie).
   */
  requireMatchingSelfie?: boolean;
}

export const GelatoSessionDocumentOptionsSchema: TypedSchema<GelatoSessionDocumentOptions> = typed<GelatoSessionDocumentOptions>(object({
  allowedTypes: optional(array(string())),
  requireIdNumber: optional(boolean()),
  requireLiveCapture: optional(boolean()),
  requireMatchingSelfie: optional(boolean()),
}));