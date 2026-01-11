import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeAchDebit {
  bankName?: string;
  country?: string;
  fingerprint?: string;
  last4?: string;
  routingNumber?: string;
  type?: string;
}

export const SourceTypeAchDebitSchema: TypedSchema<SourceTypeAchDebit> = typed<SourceTypeAchDebit>(object({
  bankName: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  routingNumber: optional(string()),
  type: optional(string()),
}));