import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LinksProperty } from './LinksProperty';
import { LinksPropertySchema } from './LinksProperty';
/**
 * File
 *
 * This object represents files hosted on Stripe's servers. You can upload
files with the [create file](https://stripe.com/docs/api#create_file) request
(for example, when uploading dispute evidence). Stripe also
creates files independently (for example, the results of a [Sigma scheduled
query](#scheduled_queries)).

Related guide: [File upload guide](https://stripe.com/docs/file-upload)
 */
export interface File {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The file expires and isn't available at this time in epoch seconds.
   */
  expiresAt?: number;
  /**
   * The suitable name for saving the file to a filesystem.
   */
  filename?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * FileResourceFileLinkList
   *
   * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
   */
  links?: LinksProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
   */
  purpose: string;
  /**
   * The size of the file object in bytes.
   */
  size: number;
  /**
   * A suitable title for the document.
   */
  title?: string;
  /**
   * The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).
   */
  type?: string;
  /**
   * Use your live secret API key to download the file from this URL.
   */
  url?: string;
}

export const FileSchema: TypedSchema<File> = typed<File>(object({
  created: number(),
  expiresAt: optional(number()),
  filename: optional(string()),
  id: string(),
  get links() { return optional(LinksPropertySchema) },
  object: string(),
  purpose: string(),
  size: number(),
  title: optional(string()),
  type: optional(string()),
  url: optional(string()),
}));