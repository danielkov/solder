import { TypedSchema, literal, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DetailsProperty } from './DetailsProperty';
import { DetailsPropertySchema } from './DetailsProperty';
export interface Error {
  /**
   * Error code
   */
  code: string;
  /**
   * Additional error details
   */
  details?: DetailsProperty;
  /**
   * Human-readable error message
   */
  message: string;
  /**
   * Always false for error responses
   */
  success: false;
}

export const ErrorSchema: TypedSchema<Error> = typed<Error>(object({
  code: string(),
  get details() { return optional(DetailsPropertySchema) },
  message: string(),
  success: literal(false),
}));