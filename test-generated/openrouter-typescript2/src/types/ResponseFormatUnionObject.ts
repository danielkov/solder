import { literal, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface ResponseFormatUnionObject {
  type: "text";
}

export const ResponseFormatUnionObjectSchema: TypedSchema<ResponseFormatUnionObject> = typed<ResponseFormatUnionObject>(object({ type: literal('text') }));
