import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The phone number for the location.
 */
export type PostTerminalLocationsLocationRequestPhone = string | string;

export const PostTerminalLocationsLocationRequestPhoneSchema: TypedSchema<PostTerminalLocationsLocationRequestPhone> = typed<PostTerminalLocationsLocationRequestPhone>(union(string(), string()));
