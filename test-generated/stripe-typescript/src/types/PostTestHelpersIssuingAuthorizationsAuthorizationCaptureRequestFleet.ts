import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData } from './PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData';
import { PostTestHelpersIssuingAuthorizationsRequestCardholderPromptDataSchema } from './PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData';
import type { PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown } from './PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown';
import { PostTestHelpersIssuingAuthorizationsRequestReportedBreakdownSchema } from './PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown';
/**
 * fleet_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet {
  /**
   * fleet_cardholder_prompt_data_specs
   */
  cardholderPromptData?: PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData;
  purchaseType?: string;
  /**
   * fleet_reported_breakdown_specs
   */
  reportedBreakdown?: PostTestHelpersIssuingAuthorizationsRequestReportedBreakdown;
  serviceType?: string;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleetSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFleet>(object({
  get cardholderPromptData() { return optional(PostTestHelpersIssuingAuthorizationsRequestCardholderPromptDataSchema) },
  purchaseType: optional(string()),
  get reportedBreakdown() { return optional(PostTestHelpersIssuingAuthorizationsRequestReportedBreakdownSchema) },
  serviceType: optional(string()),
}));