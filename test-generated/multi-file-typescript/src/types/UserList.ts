import { TypedSchema, array, number, object, typed } from '@speakeasy-api/tonic';

import type { User } from './User';
import { UserSchema } from './User';
/**
 * Paginated list of users
 */
export interface UserList {
  data: Array<User>;
  /**
   * Current page number
   */
  page: number;
  /**
   * Number of items per page
   */
  pageSize: number;
  /**
   * Total number of users
   */
  total: number;
}

export const UserListSchema: TypedSchema<UserList> = typed<UserList>(object({
  data: array(UserSchema),
  page: number(),
  pageSize: number(),
  total: number(),
}));