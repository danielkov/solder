import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeIdeal {
  bank?: string;
  bic?: string;
  ibanLast4?: string;
  statementDescriptor?: string;
}

export const SourceTypeIdealSchema: TypedSchema<SourceTypeIdeal> = typed<SourceTypeIdeal>(object({
  bank: optional(string()),
  bic: optional(string()),
  ibanLast4: optional(string()),
  statementDescriptor: optional(string()),
}));