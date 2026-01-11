import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * HTTP error response - tests HTTP acronym handling
 */
export interface HttpError {
  message: string;
  /**
   * HTTP status code
   */
  statusCode: number;
}

export const HttpErrorSchema: TypedSchema<HttpError> = typed<HttpError>(object({
  message: string(),
  statusCode: number(),
}));