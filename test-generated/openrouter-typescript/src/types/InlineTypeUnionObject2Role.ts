import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type InlineTypeUnionObject2Role = string | string | string;

export const InlineTypeUnionObject2RoleSchema: TypedSchema<InlineTypeUnionObject2Role> = typed<InlineTypeUnionObject2Role>(union(string(), string(), string()));