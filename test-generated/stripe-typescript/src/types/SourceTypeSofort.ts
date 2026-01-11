import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeSofort {
  bankCode?: string;
  bankName?: string;
  bic?: string;
  country?: string;
  ibanLast4?: string;
  preferredLanguage?: string;
  statementDescriptor?: string;
}

export const SourceTypeSofortSchema: TypedSchema<SourceTypeSofort> = typed<SourceTypeSofort>(object({
  bankCode: optional(string()),
  bankName: optional(string()),
  bic: optional(string()),
  country: optional(string()),
  ibanLast4: optional(string()),
  preferredLanguage: optional(string()),
  statementDescriptor: optional(string()),
}));