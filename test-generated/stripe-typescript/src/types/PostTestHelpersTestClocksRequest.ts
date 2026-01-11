import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersTestClocksRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The initial frozen time for this test clock.
   */
  frozenTime: number;
  /**
   * The name for this test clock.
   */
  name?: string;
}

export const PostTestHelpersTestClocksRequestSchema: TypedSchema<PostTestHelpersTestClocksRequest> = typed<PostTestHelpersTestClocksRequest>(object({
  expand: optional(array(string())),
  frozenTime: number(),
  name: optional(string()),
}));