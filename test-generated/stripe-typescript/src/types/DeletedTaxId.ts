import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * deleted_tax_id
 *
 * 
 */
export interface DeletedTaxId {
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

export const DeletedTaxIdSchema: TypedSchema<DeletedTaxId> = typed<DeletedTaxId>(object({
  deleted: boolean(),
  id: string(),
  object: string(),
}));