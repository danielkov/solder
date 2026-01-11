import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostFilesRequestFileLinkData } from './PostFilesRequestFileLinkData';
import { PostFilesRequestFileLinkDataSchema } from './PostFilesRequestFileLinkData';
export interface PostFilesRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.
   */
  file: string;
  /**
   * file_link_creation_params
   *
   * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
   */
  fileLinkData?: PostFilesRequestFileLinkData;
  /**
   * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
   */
  purpose: string;
}

export const PostFilesRequestSchema: TypedSchema<PostFilesRequest> = typed<PostFilesRequest>(object({
  expand: optional(array(string())),
  file: string(),
  get fileLinkData() { return optional(PostFilesRequestFileLinkDataSchema) },
  purpose: string(),
}));