import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * This parameter defines the skip behavior for input collection.
   */
  skipNonRequiredInputs?: string;
}

export const PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequestSchema: TypedSchema<PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest> = typed<PostTestHelpersTerminalReadersReaderSucceedInputCollectionRequest>(object({
  expand: optional(array(string())),
  skipNonRequiredInputs: optional(string()),
}));