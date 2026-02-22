import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type InlineTypeUnionObjectRole = string | string | string | string;

export const InlineTypeUnionObjectRoleSchema: TypedSchema<InlineTypeUnionObjectRole> = typed<InlineTypeUnionObjectRole>(union(string(), string(), string(), string()));
