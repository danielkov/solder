import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TaxRegistration } from './TaxRegistration';
import { TaxRegistrationSchema } from './TaxRegistration';
/**
 * TaxProductRegistrationsResourceTaxRegistrationList
 *
 * 
 */
export interface GetTaxRegistrationsResponse {
  data: Array<TaxRegistration>;
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

export const GetTaxRegistrationsResponseSchema: TypedSchema<GetTaxRegistrationsResponse> = typed<GetTaxRegistrationsResponse>(object({
  data: array(TaxRegistrationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));