import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TerminalConfiguration } from './TerminalConfiguration';
import { TerminalConfigurationSchema } from './TerminalConfiguration';
/**
 * TerminalConfigurationConfigurationList
 *
 * 
 */
export interface GetTerminalConfigurationsResponse {
  data: Array<TerminalConfiguration>;
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

export const GetTerminalConfigurationsResponseSchema: TypedSchema<GetTerminalConfigurationsResponse> = typed<GetTerminalConfigurationsResponse>(object({
  data: array(TerminalConfigurationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));