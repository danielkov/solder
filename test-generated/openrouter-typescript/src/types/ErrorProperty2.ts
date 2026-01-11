import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
export interface ErrorProperty2 {
  code: number;
  message: string;
}

export const ErrorProperty2Schema: TypedSchema<ErrorProperty2> = typed<ErrorProperty2>(object({
  code: number(),
  message: string(),
}));