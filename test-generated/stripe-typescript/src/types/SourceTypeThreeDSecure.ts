import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeThreeDSecure {
  addressLine1Check?: string;
  addressZipCheck?: string;
  authenticated?: boolean;
  brand?: string;
  card?: string;
  country?: string;
  customer?: string;
  cvcCheck?: string;
  dynamicLast4?: string;
  expMonth?: number;
  expYear?: number;
  fingerprint?: string;
  funding?: string;
  last4?: string;
  name?: string;
  threeDSecure?: string;
  tokenizationMethod?: string;
}

export const SourceTypeThreeDSecureSchema: TypedSchema<SourceTypeThreeDSecure> = typed<SourceTypeThreeDSecure>(object({
  addressLine1Check: optional(string()),
  addressZipCheck: optional(string()),
  authenticated: optional(boolean()),
  brand: optional(string()),
  card: optional(string()),
  country: optional(string()),
  customer: optional(string()),
  cvcCheck: optional(string()),
  dynamicLast4: optional(string()),
  expMonth: optional(number()),
  expYear: optional(number()),
  fingerprint: optional(string()),
  funding: optional(string()),
  last4: optional(string()),
  name: optional(string()),
  threeDSecure: optional(string()),
  tokenizationMethod: optional(string()),
}));