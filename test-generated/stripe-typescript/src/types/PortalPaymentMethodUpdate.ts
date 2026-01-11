import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalPaymentMethodUpdate
 *
 * 
 */
export interface PortalPaymentMethodUpdate {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
  /**
   * The [Payment Method Configuration](/api/payment_method_configurations) to use for this portal session. When specified, customers will be able to update their payment method to one of the options specified by the payment method configuration. If not set, the default payment method configuration is used.
   */
  paymentMethodConfiguration?: string;
}

export const PortalPaymentMethodUpdateSchema: TypedSchema<PortalPaymentMethodUpdate> = typed<PortalPaymentMethodUpdate>(object({
  enabled: boolean(),
  paymentMethodConfiguration: optional(string()),
}));