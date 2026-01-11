import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * scope_param
 */
export interface GetAppsSecretsObject {
  type: string;
  user?: string;
}

export const GetAppsSecretsObjectSchema: TypedSchema<GetAppsSecretsObject> = typed<GetAppsSecretsObject>(object({
  type: string(),
  user: optional(string()),
}));