import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface FunctionProperty {
  arguments: string;
  name: string;
}

export const FunctionPropertySchema: TypedSchema<FunctionProperty> = typed<FunctionProperty>(object({
  arguments: string(),
  name: string(),
}));