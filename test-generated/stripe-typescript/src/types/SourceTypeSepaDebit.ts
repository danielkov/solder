import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeSepaDebit {
  bankCode?: string;
  branchCode?: string;
  country?: string;
  fingerprint?: string;
  last4?: string;
  mandateReference?: string;
  mandateUrl?: string;
}

export const SourceTypeSepaDebitSchema: TypedSchema<SourceTypeSepaDebit> = typed<SourceTypeSepaDebit>(object({
  bankCode: optional(string()),
  branchCode: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  mandateReference: optional(string()),
  mandateUrl: optional(string()),
}));