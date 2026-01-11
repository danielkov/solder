import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryOutboundTransfer } from './TreasuryOutboundTransfer';
import { TreasuryOutboundTransferSchema } from './TreasuryOutboundTransfer';
/**
 * TreasuryOutboundTransfersResourceOutboundTransferList
 *
 * 
 */
export interface GetTreasuryOutboundTransfersResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryOutboundTransfer>;
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

export const GetTreasuryOutboundTransfersResponseSchema: TypedSchema<GetTreasuryOutboundTransfersResponse> = typed<GetTreasuryOutboundTransfersResponse>(object({
  data: array(TreasuryOutboundTransferSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));