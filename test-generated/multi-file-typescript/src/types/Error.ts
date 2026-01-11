import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DetailsItem } from './DetailsItem';
import { DetailsItemSchema } from './DetailsItem';
/**
 * Standard error response
 */
export interface Error {
  /**
   * Error code for programmatic handling
   */
  code: string;
  /**
   * Additional details about the error
   */
  details?: Array<DetailsItem>;
  /**
   * Human-readable error message
   */
  message: string;
  /**
   * Unique identifier for this request for support purposes
   */
  requestId?: string;
}

export const ErrorSchema: TypedSchema<Error> = typed<Error>(object({
  code: string(),
  get details() { return optional(array(DetailsItemSchema)) },
  message: string(),
  requestId: optional(string()),
}));