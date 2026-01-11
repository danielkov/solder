import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface InlineTypeObjectVideoUrl {
  url: string;
}

export const InlineTypeObjectVideoUrlSchema: TypedSchema<InlineTypeObjectVideoUrl> = typed<InlineTypeObjectVideoUrl>(object({
  url: string(),
}));