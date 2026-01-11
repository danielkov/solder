import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Card } from './Card';
import { CardSchema } from './Card';
/**
 * CardList
 *
 * 
 */
export interface GetCustomersCustomerCardsResponse {
  data: Array<Card>;
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

export const GetCustomersCustomerCardsResponseSchema: TypedSchema<GetCustomersCustomerCardsResponse> = typed<GetCustomersCustomerCardsResponse>(object({
  data: array(CardSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));