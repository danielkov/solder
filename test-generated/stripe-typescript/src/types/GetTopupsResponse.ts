import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Topup } from './Topup';
import { TopupSchema } from './Topup';
/**
 * TopupList
 *
 * 
 */
export interface GetTopupsResponse {
  data: Array<Topup>;
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

export const GetTopupsResponseSchema: TypedSchema<GetTopupsResponse> = typed<GetTopupsResponse>(object({
  data: array(TopupSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));