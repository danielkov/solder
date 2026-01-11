import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * DeletedInvoiceItem
 *
 * 
 */
export interface DeletedInvoiceitem {
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

export const DeletedInvoiceitemSchema: TypedSchema<DeletedInvoiceitem> = typed<DeletedInvoiceitem>(object({
  deleted: boolean(),
  id: string(),
  object: string(),
}));