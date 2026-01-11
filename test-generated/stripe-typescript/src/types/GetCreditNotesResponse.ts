import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { CreditNote } from './CreditNote';
import { CreditNoteSchema } from './CreditNote';
/**
 * CreditNotesList
 *
 * 
 */
export interface GetCreditNotesResponse {
  data: Array<CreditNote>;
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

export const GetCreditNotesResponseSchema: TypedSchema<GetCreditNotesResponse> = typed<GetCreditNotesResponse>(object({
  data: array(CreditNoteSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));