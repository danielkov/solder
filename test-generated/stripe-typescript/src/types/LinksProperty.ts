import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { FileLink } from './FileLink';
import { FileLinkSchema } from './FileLink';
/**
 * FileResourceFileLinkList
 *
 * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
 */
export interface LinksProperty {
  /**
   * Details about each object.
   */
  data: Array<FileLink>;
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

export const LinksPropertySchema: TypedSchema<LinksProperty> = typed<LinksProperty>(object({
  data: array(FileLinkSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));