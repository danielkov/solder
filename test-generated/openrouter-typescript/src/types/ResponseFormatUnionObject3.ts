import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';
export interface ResponseFormatUnionObject3 {
  type: "python";
}

export const ResponseFormatUnionObject3Schema: TypedSchema<ResponseFormatUnionObject3> = typed<ResponseFormatUnionObject3>(object({
  type: literal("python"),
}));