import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CustomerSessionResourceComponentsResourceBuyButton } from './CustomerSessionResourceComponentsResourceBuyButton';
import { CustomerSessionResourceComponentsResourceBuyButtonSchema } from './CustomerSessionResourceComponentsResourceBuyButton';
import type { CustomerSessionResourceComponentsResourceCustomerSheet } from './CustomerSessionResourceComponentsResourceCustomerSheet';
import { CustomerSessionResourceComponentsResourceCustomerSheetSchema } from './CustomerSessionResourceComponentsResourceCustomerSheet';
import type { CustomerSessionResourceComponentsResourceMobilePaymentElement } from './CustomerSessionResourceComponentsResourceMobilePaymentElement';
import { CustomerSessionResourceComponentsResourceMobilePaymentElementSchema } from './CustomerSessionResourceComponentsResourceMobilePaymentElement';
import type { CustomerSessionResourceComponentsResourcePaymentElement } from './CustomerSessionResourceComponentsResourcePaymentElement';
import { CustomerSessionResourceComponentsResourcePaymentElementSchema } from './CustomerSessionResourceComponentsResourcePaymentElement';
import type { CustomerSessionResourceComponentsResourcePricingTable } from './CustomerSessionResourceComponentsResourcePricingTable';
import { CustomerSessionResourceComponentsResourcePricingTableSchema } from './CustomerSessionResourceComponentsResourcePricingTable';
/**
 * CustomerSessionResourceComponents
 *
 * Configuration for the components supported by this Customer Session.
 */
export interface CustomerSessionResourceComponents {
  /**
   * CustomerSessionResourceComponentsResourceBuyButton
   *
   * This hash contains whether the buy button is enabled.
   */
  buyButton: CustomerSessionResourceComponentsResourceBuyButton;
  /**
   * CustomerSessionResourceComponentsResourceCustomerSheet
   *
   * This hash contains whether the customer sheet is enabled and the features it supports.
   */
  customerSheet: CustomerSessionResourceComponentsResourceCustomerSheet;
  /**
   * CustomerSessionResourceComponentsResourceMobilePaymentElement
   *
   * This hash contains whether the mobile payment element is enabled and the features it supports.
   */
  mobilePaymentElement: CustomerSessionResourceComponentsResourceMobilePaymentElement;
  /**
   * CustomerSessionResourceComponentsResourcePaymentElement
   *
   * This hash contains whether the Payment Element is enabled and the features it supports.
   */
  paymentElement: CustomerSessionResourceComponentsResourcePaymentElement;
  /**
   * CustomerSessionResourceComponentsResourcePricingTable
   *
   * This hash contains whether the pricing table is enabled.
   */
  pricingTable: CustomerSessionResourceComponentsResourcePricingTable;
}

export const CustomerSessionResourceComponentsSchema: TypedSchema<CustomerSessionResourceComponents> = typed<CustomerSessionResourceComponents>(object({
  buyButton: CustomerSessionResourceComponentsResourceBuyButtonSchema,
  customerSheet: CustomerSessionResourceComponentsResourceCustomerSheetSchema,
  mobilePaymentElement: CustomerSessionResourceComponentsResourceMobilePaymentElementSchema,
  paymentElement: CustomerSessionResourceComponentsResourcePaymentElementSchema,
  pricingTable: CustomerSessionResourceComponentsResourcePricingTableSchema,
}));