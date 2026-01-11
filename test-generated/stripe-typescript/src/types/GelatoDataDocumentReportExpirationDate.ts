import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * GelatoDataDocumentReportExpirationDate
 *
 * Point in Time
 */
export interface GelatoDataDocumentReportExpirationDate {
  /**
   * Numerical day between 1 and 31.
   */
  day?: number;
  /**
   * Numerical month between 1 and 12.
   */
  month?: number;
  /**
   * The four-digit year.
   */
  year?: number;
}

export const GelatoDataDocumentReportExpirationDateSchema: TypedSchema<GelatoDataDocumentReportExpirationDate> = typed<GelatoDataDocumentReportExpirationDate>(object({
  day: optional(number()),
  month: optional(number()),
  year: optional(number()),
}));