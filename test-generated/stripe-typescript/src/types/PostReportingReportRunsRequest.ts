import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostReportingReportRunsRequestParameters } from './PostReportingReportRunsRequestParameters';
import { PostReportingReportRunsRequestParametersSchema } from './PostReportingReportRunsRequestParameters';
export interface PostReportingReportRunsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * run_parameter_specs
   *
   * Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
   */
  parameters?: PostReportingReportRunsRequestParameters;
  /**
   * The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.
   */
  reportType: string;
}

export const PostReportingReportRunsRequestSchema: TypedSchema<PostReportingReportRunsRequest> = typed<PostReportingReportRunsRequest>(object({
  expand: optional(array(string())),
  get parameters() { return optional(PostReportingReportRunsRequestParametersSchema) },
  reportType: string(),
}));