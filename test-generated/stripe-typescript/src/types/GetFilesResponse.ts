import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * FileResourceFileList
 *
 * 
 */
export interface GetFilesResponse {
  data: Array<File>;
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

export const GetFilesResponseSchema: TypedSchema<GetFilesResponse> = typed<GetFilesResponse>(object({
  data: array(FileSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));