import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface ListProvidersResponseDataItem {
  /**
   * Display name of the provider
   */
  name: string;
  /**
   * URL to the provider's privacy policy
   */
  privacyPolicyUrl: string;
  /**
   * URL-friendly identifier for the provider
   */
  slug: string;
  /**
   * URL to the provider's status page
   */
  statusPageUrl?: string;
  /**
   * URL to the provider's terms of service
   */
  termsOfServiceUrl?: string;
}

export const ListProvidersResponseDataItemSchema: TypedSchema<ListProvidersResponseDataItem> = typed<ListProvidersResponseDataItem>(object({
  name: string(),
  privacyPolicyUrl: string(),
  slug: string(),
  statusPageUrl: optional(string()),
  termsOfServiceUrl: optional(string()),
}));