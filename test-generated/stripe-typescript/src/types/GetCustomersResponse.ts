import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Customer } from './Customer';
import { CustomerSchema } from './Customer';
/**
 * CustomerResourceCustomerList
 *
 * 
 */
export interface GetCustomersResponse {
  data: Array<Customer>;
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

export const GetCustomersResponseSchema: TypedSchema<GetCustomersResponse> = typed<GetCustomersResponse>(object({
  data: array(CustomerSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));