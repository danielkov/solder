import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface FunctionProperty2 {
  arguments?: string;
  name?: string;
}

export const FunctionProperty2Schema: TypedSchema<FunctionProperty2> = typed<FunctionProperty2>(object({
  arguments: optional(string()),
  name: optional(string()),
}));