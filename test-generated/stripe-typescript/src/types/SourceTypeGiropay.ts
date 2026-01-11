import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeGiropay {
  bankCode?: string;
  bankName?: string;
  bic?: string;
  statementDescriptor?: string;
}

export const SourceTypeGiropaySchema: TypedSchema<SourceTypeGiropay> = typed<SourceTypeGiropay>(object({
  bankCode: optional(string()),
  bankName: optional(string()),
  bic: optional(string()),
  statementDescriptor: optional(string()),
}));