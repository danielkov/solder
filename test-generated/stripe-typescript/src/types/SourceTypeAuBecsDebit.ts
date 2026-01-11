import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeAuBecsDebit {
  bsbNumber?: string;
  fingerprint?: string;
  last4?: string;
}

export const SourceTypeAuBecsDebitSchema: TypedSchema<SourceTypeAuBecsDebit> = typed<SourceTypeAuBecsDebit>(object({
  bsbNumber: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
}));