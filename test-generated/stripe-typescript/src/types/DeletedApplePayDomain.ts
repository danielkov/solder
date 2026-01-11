import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * DeletedApplePayDomain
 *
 * 
 */
export interface DeletedApplePayDomain {
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

export const DeletedApplePayDomainSchema: TypedSchema<DeletedApplePayDomain> = typed<DeletedApplePayDomain>(object({
  deleted: boolean(),
  id: string(),
  object: string(),
}));