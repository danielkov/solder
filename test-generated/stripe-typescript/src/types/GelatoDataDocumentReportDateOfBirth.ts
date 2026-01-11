import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * GelatoDataDocumentReportDateOfBirth
 *
 * Point in Time
 */
export interface GelatoDataDocumentReportDateOfBirth {
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

export const GelatoDataDocumentReportDateOfBirthSchema: TypedSchema<GelatoDataDocumentReportDateOfBirth> = typed<GelatoDataDocumentReportDateOfBirth>(object({
  day: optional(number()),
  month: optional(number()),
  year: optional(number()),
}));