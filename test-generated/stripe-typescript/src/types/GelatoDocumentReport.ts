import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { GelatoDataDocumentReportDateOfBirth } from './GelatoDataDocumentReportDateOfBirth';
import { GelatoDataDocumentReportDateOfBirthSchema } from './GelatoDataDocumentReportDateOfBirth';
import type { GelatoDataDocumentReportExpirationDate } from './GelatoDataDocumentReportExpirationDate';
import { GelatoDataDocumentReportExpirationDateSchema } from './GelatoDataDocumentReportExpirationDate';
import type { GelatoDataDocumentReportIssuedDate } from './GelatoDataDocumentReportIssuedDate';
import { GelatoDataDocumentReportIssuedDateSchema } from './GelatoDataDocumentReportIssuedDate';
import type { GelatoDocumentReportError } from './GelatoDocumentReportError';
import { GelatoDocumentReportErrorSchema } from './GelatoDocumentReportError';
/**
 * GelatoDocumentReport
 *
 * Result from a document check
 */
export interface GelatoDocumentReport {
  /**
   * Address as it appears in the document.
   */
  address?: Address;
  /**
   * Date of birth as it appears in the document.
   */
  dob?: GelatoDataDocumentReportDateOfBirth;
  /**
   * Details on the verification error. Present when status is `unverified`.
   */
  error?: GelatoDocumentReportError;
  /**
   * Expiration date of the document.
   */
  expirationDate?: GelatoDataDocumentReportExpirationDate;
  /**
   * Array of [File](https://stripe.com/docs/api/files) ids containing images for this document.
   */
  files?: Array<string>;
  /**
   * First name as it appears in the document.
   */
  firstName?: string;
  /**
   * Issued date of the document.
   */
  issuedDate?: GelatoDataDocumentReportIssuedDate;
  /**
   * Issuing country of the document.
   */
  issuingCountry?: string;
  /**
   * Last name as it appears in the document.
   */
  lastName?: string;
  /**
   * Document ID number.
   */
  number?: string;
  /**
   * Sex of the person in the document.
   */
  sex?: string;
  /**
   * Status of this `document` check.
   */
  status: string;
  /**
   * Type of the document.
   */
  type?: string;
  /**
   * Place of birth as it appears in the document.
   */
  unparsedPlaceOfBirth?: string;
  /**
   * Sex as it appears in the document.
   */
  unparsedSex?: string;
}

export const GelatoDocumentReportSchema: TypedSchema<GelatoDocumentReport> = typed<GelatoDocumentReport>(object({
  get address() { return optional(AddressSchema) },
  get dob() { return optional(GelatoDataDocumentReportDateOfBirthSchema) },
  get error() { return optional(GelatoDocumentReportErrorSchema) },
  get expirationDate() { return optional(GelatoDataDocumentReportExpirationDateSchema) },
  files: optional(array(string())),
  firstName: optional(string()),
  get issuedDate() { return optional(GelatoDataDocumentReportIssuedDateSchema) },
  issuingCountry: optional(string()),
  lastName: optional(string()),
  number: optional(string()),
  sex: optional(string()),
  status: string(),
  type: optional(string()),
  unparsedPlaceOfBirth: optional(string()),
  unparsedSex: optional(string()),
}));