import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPriceOrRef } from './DefaultPriceOrRef';
import { DefaultPriceOrRefSchema } from './DefaultPriceOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PackageDimensions } from './PackageDimensions';
import { PackageDimensionsSchema } from './PackageDimensions';
import type { ProductMarketingFeature } from './ProductMarketingFeature';
import { ProductMarketingFeatureSchema } from './ProductMarketingFeature';
import type { TaxCodeOrRef } from './TaxCodeOrRef';
import { TaxCodeOrRefSchema } from './TaxCodeOrRef';
/**
 * Product
 *
 * Products describe the specific goods or services you offer to your customers.
For example, you might offer a Standard and Premium version of your goods or service; each version would be a separate Product.
They can be used in conjunction with [Prices](https://stripe.com/docs/api#prices) to configure pricing in Payment Links, Checkout, and Subscriptions.

Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription),
[share a Payment Link](https://stripe.com/docs/payment-links),
[accept payments with Checkout](https://stripe.com/docs/payments/accept-a-payment#create-product-prices-upfront),
and more about [Products and Prices](https://stripe.com/docs/products-prices/overview)
 */
export interface Product {
  /**
   * Whether the product is currently available for purchase.
   */
  active: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
   */
  defaultPrice?: DefaultPriceOrRef;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images: Array<string>;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
   */
  marketingFeatures: Array<ProductMarketingFeature>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The product's name, meant to be displayable to the customer.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The dimensions of this product for shipping purposes.
   */
  packageDimensions?: PackageDimensions;
  /**
   * Whether this product is shipped (i.e., physical goods).
   */
  shippable?: boolean;
  /**
   * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used. Only used for subscription payments.
   */
  statementDescriptor?: string;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: TaxCodeOrRef;
  /**
   * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
   */
  unitLabel?: string;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: string;
}

export const ProductSchema: TypedSchema<Product> = typed<Product>(object({
  active: boolean(),
  created: number(),
  get defaultPrice() { return optional(DefaultPriceOrRefSchema) },
  description: optional(string()),
  id: string(),
  images: array(string()),
  livemode: boolean(),
  marketingFeatures: array(ProductMarketingFeatureSchema),
  metadata: MetadataPropertySchema,
  name: string(),
  object: string(),
  get packageDimensions() { return optional(PackageDimensionsSchema) },
  shippable: optional(boolean()),
  statementDescriptor: optional(string()),
  get taxCode() { return optional(TaxCodeOrRefSchema) },
  unitLabel: optional(string()),
  updated: number(),
  url: optional(string()),
}));