import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * run_parameter_specs
 *
 * Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
 */
export interface PostReportingReportRunsRequestParameters {
  columns?: Array<string>;
  connectedAccount?: string;
  currency?: string;
  intervalEnd?: number;
  intervalStart?: number;
  payout?: string;
  reportingCategory?: string;
  timezone?: string;
}

export const PostReportingReportRunsRequestParametersSchema: TypedSchema<PostReportingReportRunsRequestParameters> = typed<PostReportingReportRunsRequestParameters>(object({
  columns: optional(array(string())),
  connectedAccount: optional(string()),
  currency: optional(string()),
  intervalEnd: optional(number()),
  intervalStart: optional(number()),
  payout: optional(string()),
  reportingCategory: optional(string()),
  timezone: optional(string()),
}));