import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DeletedApplication
 *
 * 
 */
export interface DeletedApplication {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The name of the application.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const DeletedApplicationSchema: TypedSchema<DeletedApplication> = typed<DeletedApplication>(object({
  deleted: boolean(),
  id: string(),
  name: optional(string()),
  object: string(),
}));