import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface FunctionProperty3 {
  name: string;
}

export const FunctionProperty3Schema: TypedSchema<FunctionProperty3> = typed<FunctionProperty3>(object({
  name: string(),
}));