import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersTestClocksTestClockAdvanceRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The time to advance the test clock. Must be after the test clock's current frozen time. Cannot be more than two intervals in the future from the shortest subscription in this test clock. If there are no subscriptions in this test clock, it cannot be more than two years in the future.
   */
  frozenTime: number;
}

export const PostTestHelpersTestClocksTestClockAdvanceRequestSchema: TypedSchema<PostTestHelpersTestClocksTestClockAdvanceRequest> = typed<PostTestHelpersTestClocksTestClockAdvanceRequest>(object({
  expand: optional(array(string())),
  frozenTime: number(),
}));