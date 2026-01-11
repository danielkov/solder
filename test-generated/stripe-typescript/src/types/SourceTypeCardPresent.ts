import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeCardPresent {
  applicationCryptogram?: string;
  applicationPreferredName?: string;
  authorizationCode?: string;
  authorizationResponseCode?: string;
  brand?: string;
  country?: string;
  cvmType?: string;
  dataType?: string;
  dedicatedFileName?: string;
  emvAuthData?: string;
  evidenceCustomerSignature?: string;
  evidenceTransactionCertificate?: string;
  expMonth?: number;
  expYear?: number;
  fingerprint?: string;
  funding?: string;
  last4?: string;
  posDeviceId?: string;
  posEntryMode?: string;
  readMethod?: string;
  reader?: string;
  terminalVerificationResults?: string;
  transactionStatusInformation?: string;
}

export const SourceTypeCardPresentSchema: TypedSchema<SourceTypeCardPresent> = typed<SourceTypeCardPresent>(object({
  applicationCryptogram: optional(string()),
  applicationPreferredName: optional(string()),
  authorizationCode: optional(string()),
  authorizationResponseCode: optional(string()),
  brand: optional(string()),
  country: optional(string()),
  cvmType: optional(string()),
  dataType: optional(string()),
  dedicatedFileName: optional(string()),
  emvAuthData: optional(string()),
  evidenceCustomerSignature: optional(string()),
  evidenceTransactionCertificate: optional(string()),
  expMonth: optional(number()),
  expYear: optional(number()),
  fingerprint: optional(string()),
  funding: optional(string()),
  last4: optional(string()),
  posDeviceId: optional(string()),
  posEntryMode: optional(string()),
  readMethod: optional(string()),
  reader: optional(string()),
  terminalVerificationResults: optional(string()),
  transactionStatusInformation: optional(string()),
}));