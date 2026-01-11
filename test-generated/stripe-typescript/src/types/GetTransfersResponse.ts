import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Transfer } from './Transfer';
import { TransferSchema } from './Transfer';
/**
 * TransferList
 *
 * 
 */
export interface GetTransfersResponse {
  /**
   * Details about each object.
   */
  data: Array<Transfer>;
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

export const GetTransfersResponseSchema: TypedSchema<GetTransfersResponse> = typed<GetTransfersResponse>(object({
  data: array(TransferSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));