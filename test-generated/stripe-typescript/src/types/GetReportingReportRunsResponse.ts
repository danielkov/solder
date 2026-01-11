import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ReportingReportRun } from './ReportingReportRun';
import { ReportingReportRunSchema } from './ReportingReportRun';
/**
 * FinancialReportingFinanceReportRunList
 *
 * 
 */
export interface GetReportingReportRunsResponse {
  data: Array<ReportingReportRun>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetReportingReportRunsResponseSchema: TypedSchema<GetReportingReportRunsResponse> = typed<GetReportingReportRunsResponse>(object({
  data: array(ReportingReportRunSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));