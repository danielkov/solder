import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeBancontact {
  bankCode?: string;
  bankName?: string;
  bic?: string;
  ibanLast4?: string;
  preferredLanguage?: string;
  statementDescriptor?: string;
}

export const SourceTypeBancontactSchema: TypedSchema<SourceTypeBancontact> = typed<SourceTypeBancontact>(object({
  bankCode: optional(string()),
  bankName: optional(string()),
  bic: optional(string()),
  ibanLast4: optional(string()),
  preferredLanguage: optional(string()),
  statementDescriptor: optional(string()),
}));