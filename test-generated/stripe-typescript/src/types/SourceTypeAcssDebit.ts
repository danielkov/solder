import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeAcssDebit {
  bankAddressCity?: string;
  bankAddressLine1?: string;
  bankAddressLine2?: string;
  bankAddressPostalCode?: string;
  bankName?: string;
  category?: string;
  country?: string;
  fingerprint?: string;
  last4?: string;
  routingNumber?: string;
}

export const SourceTypeAcssDebitSchema: TypedSchema<SourceTypeAcssDebit> = typed<SourceTypeAcssDebit>(object({
  bankAddressCity: optional(string()),
  bankAddressLine1: optional(string()),
  bankAddressLine2: optional(string()),
  bankAddressPostalCode: optional(string()),
  bankName: optional(string()),
  category: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  routingNumber: optional(string()),
}));