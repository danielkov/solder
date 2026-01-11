import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestLineItemsItemRecurring } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import { PostCheckoutSessionsRequestLineItemsItemRecurringSchema } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import type { PostPricesPriceRequestCurrencyOptionsObject } from './PostPricesPriceRequestCurrencyOptionsObject';
import { PostPricesPriceRequestCurrencyOptionsObjectSchema } from './PostPricesPriceRequestCurrencyOptionsObject';
import type { PostProductsRequestCustomUnitAmount } from './PostProductsRequestCustomUnitAmount';
import { PostProductsRequestCustomUnitAmountSchema } from './PostProductsRequestCustomUnitAmount';
/**
 * price_data_without_product_with_metadata
 *
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object. This Price will be set as the default price for this product.
 */
export interface PostProductsRequestDefaultPriceData {
  currency: string;
  currencyOptions?: PostPricesPriceRequestCurrencyOptionsObject;
  /**
   * custom_unit_amount
   */
  customUnitAmount?: PostProductsRequestCustomUnitAmount;
  metadata?: PostAccountsRequestMetadataObject;
  /**
   * recurring_adhoc
   */
  recurring?: PostCheckoutSessionsRequestLineItemsItemRecurring;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostProductsRequestDefaultPriceDataSchema: TypedSchema<PostProductsRequestDefaultPriceData> = typed<PostProductsRequestDefaultPriceData>(object({
  currency: string(),
  get currencyOptions() { return optional(PostPricesPriceRequestCurrencyOptionsObjectSchema) },
  get customUnitAmount() { return optional(PostProductsRequestCustomUnitAmountSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get recurring() { return optional(PostCheckoutSessionsRequestLineItemsItemRecurringSchema) },
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));