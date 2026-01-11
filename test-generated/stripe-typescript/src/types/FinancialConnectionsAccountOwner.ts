import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BankConnectionsResourceOwner
 *
 * Describes an owner of an account.
 */
export interface FinancialConnectionsAccountOwner {
  /**
   * The email address of the owner.
   */
  email?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The full name of the owner.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The ownership object that this owner belongs to.
   */
  ownership: string;
  /**
   * The raw phone number of the owner.
   */
  phone?: string;
  /**
   * The raw physical address of the owner.
   */
  rawAddress?: string;
  /**
   * The timestamp of the refresh that updated this owner.
   */
  refreshedAt?: number;
}

export const FinancialConnectionsAccountOwnerSchema: TypedSchema<FinancialConnectionsAccountOwner> = typed<FinancialConnectionsAccountOwner>(object({
  email: optional(string()),
  id: string(),
  name: string(),
  object: string(),
  ownership: string(),
  phone: optional(string()),
  rawAddress: optional(string()),
  refreshedAt: optional(number()),
}));