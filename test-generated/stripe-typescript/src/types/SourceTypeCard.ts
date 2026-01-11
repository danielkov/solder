import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeCard {
  addressLine1Check?: string;
  addressZipCheck?: string;
  brand?: string;
  country?: string;
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

export const SourceTypeCardSchema: TypedSchema<SourceTypeCard> = typed<SourceTypeCard>(object({
  addressLine1Check: optional(string()),
  addressZipCheck: optional(string()),
  brand: optional(string()),
  country: optional(string()),
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