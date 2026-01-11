import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Request body for updating a user
 */
export interface UserUpdate {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  status?: string;
}

export const UserUpdateSchema: TypedSchema<UserUpdate> = typed<UserUpdate>(object({
  email: optional(string()),
  firstName: optional(string()),
  lastName: optional(string()),
  role: optional(string()),
  status: optional(string()),
}));