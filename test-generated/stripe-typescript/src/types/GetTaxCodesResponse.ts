import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TaxCode } from './TaxCode';
import { TaxCodeSchema } from './TaxCode';
/**
 * TaxProductResourceTaxCodeList
 *
 * 
 */
export interface GetTaxCodesResponse {
  data: Array<TaxCode>;
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

export const GetTaxCodesResponseSchema: TypedSchema<GetTaxCodesResponse> = typed<GetTaxCodesResponse>(object({
  data: array(TaxCodeSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));