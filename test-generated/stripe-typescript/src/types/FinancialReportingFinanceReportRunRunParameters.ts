import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * FinancialReportingFinanceReportRunRunParameters
 *
 * 
 */
export interface FinancialReportingFinanceReportRunRunParameters {
  /**
   * The set of output columns requested for inclusion in the report run.
   */
  columns?: Array<string>;
  /**
   * Connected account ID by which to filter the report run.
   */
  connectedAccount?: string;
  /**
   * Currency of objects to be included in the report run.
   */
  currency?: string;
  /**
   * Ending timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after the user specified `interval_start` and 1 second before this report's last `data_available_end` value.
   */
  intervalEnd?: number;
  /**
   * Starting timestamp of data to be included in the report run. Can be any UTC timestamp between 1 second after this report's `data_available_start` and 1 second before the user specified `interval_end` value.
   */
  intervalStart?: number;
  /**
   * Payout ID by which to filter the report run.
   */
  payout?: string;
  /**
   * Category of balance transactions to be included in the report run.
   */
  reportingCategory?: string;
  /**
   * Defaults to `Etc/UTC`. The output timezone for all timestamps in the report. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones). Has no effect on `interval_start` or `interval_end`.
   */
  timezone?: string;
}

export const FinancialReportingFinanceReportRunRunParametersSchema: TypedSchema<FinancialReportingFinanceReportRunRunParameters> = typed<FinancialReportingFinanceReportRunRunParameters>(object({
  columns: optional(array(string())),
  connectedAccount: optional(string()),
  currency: optional(string()),
  intervalEnd: optional(number()),
  intervalStart: optional(number()),
  payout: optional(string()),
  reportingCategory: optional(string()),
  timezone: optional(string()),
}));