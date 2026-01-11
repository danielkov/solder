import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ReportingReportType } from './ReportingReportType';
import { ReportingReportTypeSchema } from './ReportingReportType';
/**
 * FinancialReportingFinanceReportTypeList
 *
 * 
 */
export interface GetReportingReportTypesResponse {
  data: Array<ReportingReportType>;
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

export const GetReportingReportTypesResponseSchema: TypedSchema<GetReportingReportTypesResponse> = typed<GetReportingReportTypesResponse>(object({
  data: array(ReportingReportTypeSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));