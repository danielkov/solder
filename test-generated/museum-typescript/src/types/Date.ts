import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type Date = Date;

export const DateSchema: TypedSchema<Date> = typed<Date>(string());