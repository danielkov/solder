import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * DeletedProduct
 *
 * 
 */
export interface DeletedProduct {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const DeletedProductSchema: TypedSchema<DeletedProduct> = typed<DeletedProduct>(object({
  deleted: boolean(),
  id: string(),
  object: string(),
}));