import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Request body for creating a new user
 */
export interface UserCreate {
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  username: string;
}

export const UserCreateSchema: TypedSchema<UserCreate> = typed<UserCreate>(object({
  email: string(),
  firstName: optional(string()),
  lastName: optional(string()),
  role: optional(string()),
  username: string(),
}));