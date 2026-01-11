import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type Email = string;

export const EmailSchema: TypedSchema<Email> = typed<Email>(string());