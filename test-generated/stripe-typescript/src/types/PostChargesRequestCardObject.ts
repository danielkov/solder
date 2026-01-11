import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * customer_payment_source_card
 */
export interface PostChargesRequestCardObject {
  addressCity?: string;
  addressCountry?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressState?: string;
  addressZip?: string;
  cvc?: string;
  expMonth: number;
  expYear: number;
  metadata?: PostAccountsRequestMetadataObject;
  name?: string;
  number: string;
  object?: string;
}

export const PostChargesRequestCardObjectSchema: TypedSchema<PostChargesRequestCardObject> = typed<PostChargesRequestCardObject>(object({
  addressCity: optional(string()),
  addressCountry: optional(string()),
  addressLine1: optional(string()),
  addressLine2: optional(string()),
  addressState: optional(string()),
  addressZip: optional(string()),
  cvc: optional(string()),
  expMonth: number(),
  expYear: number(),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  name: optional(string()),
  number: string(),
  object: optional(string()),
}));