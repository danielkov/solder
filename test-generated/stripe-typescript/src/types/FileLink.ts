import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FileOrRef } from './FileOrRef';
import { FileOrRefSchema } from './FileOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * FileLink
 *
 * To share the contents of a `File` object with non-Stripe users, you can
create a `FileLink`. `FileLink`s contain a URL that you can use to
retrieve the contents of the file without authentication.
 */
export interface FileLink {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Returns if the link is already expired.
   */
  expired: boolean;
  /**
   * Time that the link expires.
   */
  expiresAt?: number;
  /**
   * The file object this link points to.
   */
  file: FileOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The publicly accessible URL to download the file.
   */
  url?: string;
}

export const FileLinkSchema: TypedSchema<FileLink> = typed<FileLink>(object({
  created: number(),
  expired: boolean(),
  expiresAt: optional(number()),
  file: FileOrRefSchema,
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  url: optional(string()),
}));