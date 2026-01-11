import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCustomerSessionsRequestBuyButton } from './PostCustomerSessionsRequestBuyButton';
import { PostCustomerSessionsRequestBuyButtonSchema } from './PostCustomerSessionsRequestBuyButton';
import type { PostCustomerSessionsRequestCustomerSheet } from './PostCustomerSessionsRequestCustomerSheet';
import { PostCustomerSessionsRequestCustomerSheetSchema } from './PostCustomerSessionsRequestCustomerSheet';
import type { PostCustomerSessionsRequestMobilePaymentElement } from './PostCustomerSessionsRequestMobilePaymentElement';
import { PostCustomerSessionsRequestMobilePaymentElementSchema } from './PostCustomerSessionsRequestMobilePaymentElement';
import type { PostCustomerSessionsRequestPaymentElement } from './PostCustomerSessionsRequestPaymentElement';
import { PostCustomerSessionsRequestPaymentElementSchema } from './PostCustomerSessionsRequestPaymentElement';
import type { PostCustomerSessionsRequestPricingTable } from './PostCustomerSessionsRequestPricingTable';
import { PostCustomerSessionsRequestPricingTableSchema } from './PostCustomerSessionsRequestPricingTable';
/**
 * components
 *
 * Configuration for each component. At least 1 component must be enabled.
 */
export interface PostCustomerSessionsRequestComponents {
  /**
   * buy_button_param
   */
  buyButton?: PostCustomerSessionsRequestBuyButton;
  /**
   * customer_sheet_param
   */
  customerSheet?: PostCustomerSessionsRequestCustomerSheet;
  /**
   * mobile_payment_element_param
   */
  mobilePaymentElement?: PostCustomerSessionsRequestMobilePaymentElement;
  /**
   * payment_element_param
   */
  paymentElement?: PostCustomerSessionsRequestPaymentElement;
  /**
   * pricing_table_param
   */
  pricingTable?: PostCustomerSessionsRequestPricingTable;
}

export const PostCustomerSessionsRequestComponentsSchema: TypedSchema<PostCustomerSessionsRequestComponents> = typed<PostCustomerSessionsRequestComponents>(object({
  get buyButton() { return optional(PostCustomerSessionsRequestBuyButtonSchema) },
  get customerSheet() { return optional(PostCustomerSessionsRequestCustomerSheetSchema) },
  get mobilePaymentElement() { return optional(PostCustomerSessionsRequestMobilePaymentElementSchema) },
  get paymentElement() { return optional(PostCustomerSessionsRequestPaymentElementSchema) },
  get pricingTable() { return optional(PostCustomerSessionsRequestPricingTableSchema) },
}));