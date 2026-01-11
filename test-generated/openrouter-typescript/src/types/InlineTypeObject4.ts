import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface InlineTypeObject4 {
  name: string;
  type: string;
}

export const InlineTypeObject4Schema: TypedSchema<InlineTypeObject4> = typed<InlineTypeObject4>(object({
  name: string(),
  type: string(),
}));