import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryReceivedCredit } from './TreasuryReceivedCredit';
import { TreasuryReceivedCreditSchema } from './TreasuryReceivedCredit';
/**
 * TreasuryReceivedCreditsResourceReceivedCreditList
 *
 * 
 */
export interface GetTreasuryReceivedCreditsResponse {
  /**
   * Details about each object.
   */
  data: Array<TreasuryReceivedCredit>;
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

export const GetTreasuryReceivedCreditsResponseSchema: TypedSchema<GetTreasuryReceivedCreditsResponse> = typed<GetTreasuryReceivedCreditsResponse>(object({
  data: array(TreasuryReceivedCreditSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));