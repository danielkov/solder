import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface SourceTypeKlarna {
  backgroundImageUrl?: string;
  clientToken?: string;
  firstName?: string;
  lastName?: string;
  locale?: string;
  logoUrl?: string;
  pageTitle?: string;
  payLaterAssetUrlsDescriptive?: string;
  payLaterAssetUrlsStandard?: string;
  payLaterName?: string;
  payLaterRedirectUrl?: string;
  payNowAssetUrlsDescriptive?: string;
  payNowAssetUrlsStandard?: string;
  payNowName?: string;
  payNowRedirectUrl?: string;
  payOverTimeAssetUrlsDescriptive?: string;
  payOverTimeAssetUrlsStandard?: string;
  payOverTimeName?: string;
  payOverTimeRedirectUrl?: string;
  paymentMethodCategories?: string;
  purchaseCountry?: string;
  purchaseType?: string;
  redirectUrl?: string;
  shippingDelay?: number;
  shippingFirstName?: string;
  shippingLastName?: string;
}

export const SourceTypeKlarnaSchema: TypedSchema<SourceTypeKlarna> = typed<SourceTypeKlarna>(object({
  backgroundImageUrl: optional(string()),
  clientToken: optional(string()),
  firstName: optional(string()),
  lastName: optional(string()),
  locale: optional(string()),
  logoUrl: optional(string()),
  pageTitle: optional(string()),
  payLaterAssetUrlsDescriptive: optional(string()),
  payLaterAssetUrlsStandard: optional(string()),
  payLaterName: optional(string()),
  payLaterRedirectUrl: optional(string()),
  payNowAssetUrlsDescriptive: optional(string()),
  payNowAssetUrlsStandard: optional(string()),
  payNowName: optional(string()),
  payNowRedirectUrl: optional(string()),
  payOverTimeAssetUrlsDescriptive: optional(string()),
  payOverTimeAssetUrlsStandard: optional(string()),
  payOverTimeName: optional(string()),
  payOverTimeRedirectUrl: optional(string()),
  paymentMethodCategories: optional(string()),
  purchaseCountry: optional(string()),
  purchaseType: optional(string()),
  redirectUrl: optional(string()),
  shippingDelay: optional(number()),
  shippingFirstName: optional(string()),
  shippingLastName: optional(string()),
}));