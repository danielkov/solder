import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';
export interface ResponseFormatUnionObject2 {
  type: "json_object";
}

export const ResponseFormatUnionObject2Schema: TypedSchema<ResponseFormatUnionObject2> = typed<ResponseFormatUnionObject2>(object({
  type: literal("json_object"),
}));