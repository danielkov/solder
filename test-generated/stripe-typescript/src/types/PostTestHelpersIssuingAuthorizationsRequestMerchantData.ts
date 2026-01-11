import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * merchant_data_specs
 *
 * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
 */
export interface PostTestHelpersIssuingAuthorizationsRequestMerchantData {
  category?: string;
  city?: string;
  country?: string;
  name?: string;
  networkId?: string;
  postalCode?: string;
  state?: string;
  terminalId?: string;
  url?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestMerchantDataSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestMerchantData> = typed<PostTestHelpersIssuingAuthorizationsRequestMerchantData>(object({
  category: optional(string()),
  city: optional(string()),
  country: optional(string()),
  name: optional(string()),
  networkId: optional(string()),
  postalCode: optional(string()),
  state: optional(string()),
  terminalId: optional(string()),
  url: optional(string()),
}));