import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ApiErrors } from './ApiErrors';
import { ApiErrorsSchema } from './ApiErrors';
/**
 * An error response from the Stripe API
 */
export interface Error {
  /**
   * APIErrors
   *
   * 
   */
  error: ApiErrors;
}

export const ErrorSchema: TypedSchema<Error> = typed<Error>(object({
  error: ApiErrorsSchema,
}));