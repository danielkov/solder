import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TerminalLocation } from './TerminalLocation';
import { TerminalLocationSchema } from './TerminalLocation';
/**
 * TerminalLocationLocationList
 *
 * 
 */
export interface GetTerminalLocationsResponse {
  data: Array<TerminalLocation>;
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

export const GetTerminalLocationsResponseSchema: TypedSchema<GetTerminalLocationsResponse> = typed<GetTerminalLocationsResponse>(object({
  data: array(TerminalLocationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));