import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostChargesRequestAddress } from './PostChargesRequestAddress';
import { PostChargesRequestAddressSchema } from './PostChargesRequestAddress';
/**
 * optional_fields_shipping
 *
 * Shipping information for this PaymentIntent.
 */
export interface DefaultPostPaymentIntentsRequestShipping {
  /**
   * optional_fields_address
   */
  address: PostChargesRequestAddress;
  carrier?: string;
  name: string;
  phone?: string;
  trackingNumber?: string;
}

export const DefaultPostPaymentIntentsRequestShippingSchema: TypedSchema<DefaultPostPaymentIntentsRequestShipping> = typed<DefaultPostPaymentIntentsRequestShipping>(object({
  address: PostChargesRequestAddressSchema,
  carrier: optional(string()),
  name: string(),
  phone: optional(string()),
  trackingNumber: optional(string()),
}));