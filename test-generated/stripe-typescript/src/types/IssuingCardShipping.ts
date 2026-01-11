import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { IssuingCardShippingAddressValidation } from './IssuingCardShippingAddressValidation';
import { IssuingCardShippingAddressValidationSchema } from './IssuingCardShippingAddressValidation';
import type { IssuingCardShippingCustoms } from './IssuingCardShippingCustoms';
import { IssuingCardShippingCustomsSchema } from './IssuingCardShippingCustoms';
/**
 * IssuingCardShipping
 *
 * 
 */
export interface IssuingCardShipping {
  /**
   * Address
   *
   * 
   */
  address: Address;
  /**
   * Address validation details for the shipment.
   */
  addressValidation?: IssuingCardShippingAddressValidation;
  /**
   * The delivery company that shipped a card.
   */
  carrier?: string;
  /**
   * Additional information that may be required for clearing customs.
   */
  customs?: IssuingCardShippingCustoms;
  /**
   * A unix timestamp representing a best estimate of when the card will be delivered.
   */
  eta?: number;
  /**
   * Recipient name.
   */
  name: string;
  /**
   * The phone number of the receiver of the shipment. Our courier partners will use this number to contact you in the event of card delivery issues. For individual shipments to the EU/UK, if this field is empty, we will provide them with the phone number provided when the cardholder was initially created.
   */
  phoneNumber?: string;
  /**
   * Whether a signature is required for card delivery. This feature is only supported for US users. Standard shipping service does not support signature on delivery. The default value for standard shipping service is false and for express and priority services is true.
   */
  requireSignature?: boolean;
  /**
   * Shipment service, such as `standard` or `express`.
   */
  service: string;
  /**
   * The delivery status of the card.
   */
  status?: string;
  /**
   * A tracking number for a card shipment.
   */
  trackingNumber?: string;
  /**
   * A link to the shipping carrier's site where you can view detailed information about a card shipment.
   */
  trackingUrl?: string;
  /**
   * Packaging options.
   */
  type: string;
}

export const IssuingCardShippingSchema: TypedSchema<IssuingCardShipping> = typed<IssuingCardShipping>(object({
  address: AddressSchema,
  get addressValidation() { return optional(IssuingCardShippingAddressValidationSchema) },
  carrier: optional(string()),
  get customs() { return optional(IssuingCardShippingCustomsSchema) },
  eta: optional(number()),
  name: string(),
  phoneNumber: optional(string()),
  requireSignature: optional(boolean()),
  service: string(),
  status: optional(string()),
  trackingNumber: optional(string()),
  trackingUrl: optional(string()),
  type: string(),
}));