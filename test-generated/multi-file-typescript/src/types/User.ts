import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * A user account in the system
 */
export interface User {
  /**
   * Timestamp when the user was created
   */
  createdAt?: string;
  /**
   * User's email address
   */
  email: string;
  /**
   * User's first name
   */
  firstName?: string;
  /**
   * Unique identifier for the user
   */
  id: string;
  /**
   * User's last name
   */
  lastName?: string;
  /**
   * Additional metadata about the user
   */
  metadata?: MetadataProperty;
  /**
   * User's role in the system
   */
  role?: string;
  /**
   * Current status of the user account
   */
  status: string;
  /**
   * Timestamp when the user was last updated
   */
  updatedAt?: string;
  /**
   * User's unique username
   */
  username: string;
}

export const UserSchema: TypedSchema<User> = typed<User>(object({
  createdAt: optional(string()),
  email: string(),
  firstName: optional(string()),
  id: string(),
  lastName: optional(string()),
  get metadata() { return optional(MetadataPropertySchema) },
  role: optional(string()),
  status: string(),
  updatedAt: optional(string()),
  username: string(),
}));