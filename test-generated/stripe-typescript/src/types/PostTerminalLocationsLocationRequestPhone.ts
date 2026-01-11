import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostTerminalLocationsLocationRequestPhone = string | string;

export const PostTerminalLocationsLocationRequestPhoneSchema: TypedSchema<PostTerminalLocationsLocationRequestPhone> = typed<PostTerminalLocationsLocationRequestPhone>(union(string(), string()));