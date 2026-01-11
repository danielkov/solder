import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { CountrySpec } from './CountrySpec';
import { CountrySpecSchema } from './CountrySpec';
/**
 * CountrySpecList
 *
 * 
 */
export interface GetCountrySpecsResponse {
  data: Array<CountrySpec>;
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

export const GetCountrySpecsResponseSchema: TypedSchema<GetCountrySpecsResponse> = typed<GetCountrySpecsResponse>(object({
  data: array(CountrySpecSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));