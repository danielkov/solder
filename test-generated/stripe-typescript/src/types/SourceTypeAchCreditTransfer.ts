import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeAchCreditTransfer {
  accountNumber?: string;
  bankName?: string;
  fingerprint?: string;
  refundAccountHolderName?: string;
  refundAccountHolderType?: string;
  refundRoutingNumber?: string;
  routingNumber?: string;
  swiftCode?: string;
}

export const SourceTypeAchCreditTransferSchema: TypedSchema<SourceTypeAchCreditTransfer> = typed<SourceTypeAchCreditTransfer>(object({
  accountNumber: optional(string()),
  bankName: optional(string()),
  fingerprint: optional(string()),
  refundAccountHolderName: optional(string()),
  refundAccountHolderType: optional(string()),
  refundRoutingNumber: optional(string()),
  routingNumber: optional(string()),
  swiftCode: optional(string()),
}));