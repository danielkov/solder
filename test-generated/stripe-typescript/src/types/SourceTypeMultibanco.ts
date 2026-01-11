import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeMultibanco {
  entity?: string;
  reference?: string;
  refundAccountHolderAddressCity?: string;
  refundAccountHolderAddressCountry?: string;
  refundAccountHolderAddressLine1?: string;
  refundAccountHolderAddressLine2?: string;
  refundAccountHolderAddressPostalCode?: string;
  refundAccountHolderAddressState?: string;
  refundAccountHolderName?: string;
  refundIban?: string;
}

export const SourceTypeMultibancoSchema: TypedSchema<SourceTypeMultibanco> = typed<SourceTypeMultibanco>(object({
  entity: optional(string()),
  reference: optional(string()),
  refundAccountHolderAddressCity: optional(string()),
  refundAccountHolderAddressCountry: optional(string()),
  refundAccountHolderAddressLine1: optional(string()),
  refundAccountHolderAddressLine2: optional(string()),
  refundAccountHolderAddressPostalCode: optional(string()),
  refundAccountHolderAddressState: optional(string()),
  refundAccountHolderName: optional(string()),
  refundIban: optional(string()),
}));