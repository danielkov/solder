import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * range_query_specs
 */
export interface GetAccountsUnionObject {
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}

export const GetAccountsUnionObjectSchema: TypedSchema<GetAccountsUnionObject> = typed<GetAccountsUnionObject>(object({
  gt: optional(number()),
  gte: optional(number()),
  lt: optional(number()),
  lte: optional(number()),
}));