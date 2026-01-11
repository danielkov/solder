import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { BackOrRef } from './BackOrRef';
import { BackOrRefSchema } from './BackOrRef';
import type { FrontOrRef } from './FrontOrRef';
import { FrontOrRefSchema } from './FrontOrRef';
/**
 * IssuingCardholderIdDocument
 *
 * 
 */
export interface IssuingCardholderIdDocument {
  /**
   * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  back?: BackOrRef;
  /**
   * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  front?: FrontOrRef;
}

export const IssuingCardholderIdDocumentSchema: TypedSchema<IssuingCardholderIdDocument> = typed<IssuingCardholderIdDocument>(object({
  get back() { return optional(BackOrRefSchema) },
  get front() { return optional(FrontOrRefSchema) },
}));