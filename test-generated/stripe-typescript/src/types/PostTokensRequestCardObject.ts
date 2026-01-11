import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTokensRequestCardObjectNetworks } from './PostTokensRequestCardObjectNetworks';
import { PostTokensRequestCardObjectNetworksSchema } from './PostTokensRequestCardObjectNetworks';
/**
 * credit_card_specs
 */
export interface PostTokensRequestCardObject {
  addressCity?: string;
  addressCountry?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressState?: string;
  addressZip?: string;
  currency?: string;
  cvc?: string;
  expMonth: string;
  expYear: string;
  name?: string;
  /**
   * networks_param_specs
   */
  networks?: PostTokensRequestCardObjectNetworks;
  number: string;
}

export const PostTokensRequestCardObjectSchema: TypedSchema<PostTokensRequestCardObject> = typed<PostTokensRequestCardObject>(object({
  addressCity: optional(string()),
  addressCountry: optional(string()),
  addressLine1: optional(string()),
  addressLine2: optional(string()),
  addressState: optional(string()),
  addressZip: optional(string()),
  currency: optional(string()),
  cvc: optional(string()),
  expMonth: string(),
  expYear: string(),
  name: optional(string()),
  get networks() { return optional(PostTokensRequestCardObjectNetworksSchema) },
  number: string(),
}));