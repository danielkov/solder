import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type Date = string;

export const DateSchema: TypedSchema<Date> = typed<Date>(string());
