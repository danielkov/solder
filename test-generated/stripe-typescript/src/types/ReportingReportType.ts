import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * reporting_report_type
 *
 * The Report Type resource corresponds to a particular type of report, such as
the "Activity summary" or "Itemized payouts" reports. These objects are
identified by an ID belonging to a set of enumerated values. See
[API Access to Reports documentation](https://stripe.com/docs/reporting/statements/api)
for those Report Type IDs, along with required and optional parameters.

Note that certain report types can only be run based on your live-mode data (not test-mode
data), and will error when queried without a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).
 */
export interface ReportingReportType {
  /**
   * Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  dataAvailableEnd: number;
  /**
   * Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
   */
  dataAvailableStart: number;
  /**
   * List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
   */
  defaultColumns?: Array<string>;
  /**
   * The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Human-readable name of the Report Type
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * When this Report Type was latest updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.
   */
  version: number;
}

export const ReportingReportTypeSchema: TypedSchema<ReportingReportType> = typed<ReportingReportType>(object({
  dataAvailableEnd: number(),
  dataAvailableStart: number(),
  defaultColumns: optional(array(string())),
  id: string(),
  livemode: boolean(),
  name: string(),
  object: string(),
  updated: number(),
  version: number(),
}));