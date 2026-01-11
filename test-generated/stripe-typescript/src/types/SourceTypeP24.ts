import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeP24 {
  reference?: string;
}

export const SourceTypeP24Schema: TypedSchema<SourceTypeP24> = typed<SourceTypeP24>(object({
  reference: optional(string()),
}));