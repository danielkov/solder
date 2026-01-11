import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostSubscriptionSchedulesScheduleReleaseRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Keep any cancellation on the subscription that the schedule has set
   */
  preserveCancelDate?: boolean;
}

export const PostSubscriptionSchedulesScheduleReleaseRequestSchema: TypedSchema<PostSubscriptionSchedulesScheduleReleaseRequest> = typed<PostSubscriptionSchedulesScheduleReleaseRequest>(object({
  expand: optional(array(string())),
  preserveCancelDate: optional(boolean()),
}));