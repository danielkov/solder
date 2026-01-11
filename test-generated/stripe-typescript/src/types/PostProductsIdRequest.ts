import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoiceitemsRequestTaxCode } from './PostInvoiceitemsRequestTaxCode';
import { PostInvoiceitemsRequestTaxCodeSchema } from './PostInvoiceitemsRequestTaxCode';
import type { PostProductsIdRequestDescription } from './PostProductsIdRequestDescription';
import { PostProductsIdRequestDescriptionSchema } from './PostProductsIdRequestDescription';
import type { PostProductsIdRequestImages } from './PostProductsIdRequestImages';
import { PostProductsIdRequestImagesSchema } from './PostProductsIdRequestImages';
import type { PostProductsIdRequestMarketingFeatures } from './PostProductsIdRequestMarketingFeatures';
import { PostProductsIdRequestMarketingFeaturesSchema } from './PostProductsIdRequestMarketingFeatures';
import type { PostProductsIdRequestPackageDimensions } from './PostProductsIdRequestPackageDimensions';
import { PostProductsIdRequestPackageDimensionsSchema } from './PostProductsIdRequestPackageDimensions';
import type { PostProductsIdRequestUnitLabel } from './PostProductsIdRequestUnitLabel';
import { PostProductsIdRequestUnitLabelSchema } from './PostProductsIdRequestUnitLabel';
import type { PostProductsIdRequestUrl } from './PostProductsIdRequestUrl';
import { PostProductsIdRequestUrlSchema } from './PostProductsIdRequestUrl';
export interface PostProductsIdRequest {
  /**
   * Whether the product is available for purchase.
   */
  active?: boolean;
  /**
   * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
   */
  defaultPrice?: string;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: PostProductsIdRequestDescription;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images?: PostProductsIdRequestImages;
  /**
   * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
   */
  marketingFeatures?: PostProductsIdRequestMarketingFeatures;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The product's name, meant to be displayable to the customer.
   */
  name?: string;
  /**
   * The dimensions of this product for shipping purposes.
   */
  packageDimensions?: PostProductsIdRequestPackageDimensions;
  /**
   * Whether this product is shipped (i.e., physical goods).
   */
  shippable?: boolean;
  /**
   * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.

This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
 It must contain at least one letter. May only be set if `type=service`. Only used for subscription payments.
   */
  statementDescriptor?: string;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: PostInvoiceitemsRequestTaxCode;
  /**
   * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. May only be set if `type=service`.
   */
  unitLabel?: PostProductsIdRequestUnitLabel;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: PostProductsIdRequestUrl;
}

export const PostProductsIdRequestSchema: TypedSchema<PostProductsIdRequest> = typed<PostProductsIdRequest>(object({
  active: optional(boolean()),
  defaultPrice: optional(string()),
  get description() { return optional(PostProductsIdRequestDescriptionSchema) },
  expand: optional(array(string())),
  get images() { return optional(PostProductsIdRequestImagesSchema) },
  get marketingFeatures() { return optional(PostProductsIdRequestMarketingFeaturesSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
  get packageDimensions() { return optional(PostProductsIdRequestPackageDimensionsSchema) },
  shippable: optional(boolean()),
  statementDescriptor: optional(string()),
  get taxCode() { return optional(PostInvoiceitemsRequestTaxCodeSchema) },
  get unitLabel() { return optional(PostProductsIdRequestUnitLabelSchema) },
  get url() { return optional(PostProductsIdRequestUrlSchema) },
}));