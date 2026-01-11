import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostRadarValueListItemsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The value of the item (whose type must match the type of the parent value list).
   */
  value: string;
  /**
   * The identifier of the value list which the created item will be added to.
   */
  valueList: string;
}

export const PostRadarValueListItemsRequestSchema: TypedSchema<PostRadarValueListItemsRequest> = typed<PostRadarValueListItemsRequest>(object({
  expand: optional(array(string())),
  value: string(),
  valueList: string(),
}));