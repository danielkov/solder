import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface Error {
  title?: string;
  type?: string;
}

export const ErrorSchema: TypedSchema<Error> = typed<Error>(object({
  title: optional(string()),
  type: optional(string()),
}));