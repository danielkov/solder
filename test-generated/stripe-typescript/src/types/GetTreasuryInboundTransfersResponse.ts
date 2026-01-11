import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryInboundTransfer } from './TreasuryInboundTransfer';
import { TreasuryInboundTransferSchema } from './TreasuryInboundTransfer';
/**
 * TreasuryInboundTransfersResourceInboundTransferList
 *
 * 
 */
export interface GetTreasuryInboundTransfersResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryInboundTransfer>;
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

export const GetTreasuryInboundTransfersResponseSchema: TypedSchema<GetTreasuryInboundTransfersResponse> = typed<GetTreasuryInboundTransfersResponse>(object({
  data: array(TreasuryInboundTransferSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));