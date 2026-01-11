import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';
export interface DeleteKeysResponse {
  /**
   * Confirmation that the API key was deleted
   */
  deleted: true;
}

export const DeleteKeysResponseSchema: TypedSchema<DeleteKeysResponse> = typed<DeleteKeysResponse>(object({
  deleted: literal(true),
}));