import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionPermissions
 *
 * 
 */
export interface PaymentPagesCheckoutSessionPermissions {
  /**
   * Determines which entity is allowed to update the shipping details.

Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.

When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
   */
  updateShippingDetails?: string;
}

export const PaymentPagesCheckoutSessionPermissionsSchema: TypedSchema<PaymentPagesCheckoutSessionPermissions> = typed<PaymentPagesCheckoutSessionPermissions>(object({
  updateShippingDetails: optional(string()),
}));