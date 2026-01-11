import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * owner_params
 */
export interface GetTaxIdsObject {
  account?: string;
  customer?: string;
  type: string;
}

export const GetTaxIdsObjectSchema: TypedSchema<GetTaxIdsObject> = typed<GetTaxIdsObject>(object({
  account: optional(string()),
  customer: optional(string()),
  type: string(),
}));