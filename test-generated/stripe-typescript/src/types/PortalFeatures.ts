import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PortalCustomerUpdate } from './PortalCustomerUpdate';
import { PortalCustomerUpdateSchema } from './PortalCustomerUpdate';
import type { PortalInvoiceList } from './PortalInvoiceList';
import { PortalInvoiceListSchema } from './PortalInvoiceList';
import type { PortalPaymentMethodUpdate } from './PortalPaymentMethodUpdate';
import { PortalPaymentMethodUpdateSchema } from './PortalPaymentMethodUpdate';
import type { PortalSubscriptionCancel } from './PortalSubscriptionCancel';
import { PortalSubscriptionCancelSchema } from './PortalSubscriptionCancel';
import type { PortalSubscriptionUpdate } from './PortalSubscriptionUpdate';
import { PortalSubscriptionUpdateSchema } from './PortalSubscriptionUpdate';
/**
 * PortalFeatures
 *
 * 
 */
export interface PortalFeatures {
  /**
   * PortalCustomerUpdate
   *
   * 
   */
  customerUpdate: PortalCustomerUpdate;
  /**
   * PortalInvoiceList
   *
   * 
   */
  invoiceHistory: PortalInvoiceList;
  /**
   * PortalPaymentMethodUpdate
   *
   * 
   */
  paymentMethodUpdate: PortalPaymentMethodUpdate;
  /**
   * PortalSubscriptionCancel
   *
   * 
   */
  subscriptionCancel: PortalSubscriptionCancel;
  /**
   * PortalSubscriptionUpdate
   *
   * 
   */
  subscriptionUpdate: PortalSubscriptionUpdate;
}

export const PortalFeaturesSchema: TypedSchema<PortalFeatures> = typed<PortalFeatures>(object({
  customerUpdate: PortalCustomerUpdateSchema,
  invoiceHistory: PortalInvoiceListSchema,
  paymentMethodUpdate: PortalPaymentMethodUpdateSchema,
  subscriptionCancel: PortalSubscriptionCancelSchema,
  subscriptionUpdate: PortalSubscriptionUpdateSchema,
}));