import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DisputePaymentMethodDetailsAmazonPay } from './DisputePaymentMethodDetailsAmazonPay';
import { DisputePaymentMethodDetailsAmazonPaySchema } from './DisputePaymentMethodDetailsAmazonPay';
import type { DisputePaymentMethodDetailsCard } from './DisputePaymentMethodDetailsCard';
import { DisputePaymentMethodDetailsCardSchema } from './DisputePaymentMethodDetailsCard';
import type { DisputePaymentMethodDetailsKlarna } from './DisputePaymentMethodDetailsKlarna';
import { DisputePaymentMethodDetailsKlarnaSchema } from './DisputePaymentMethodDetailsKlarna';
import type { DisputePaymentMethodDetailsPaypal } from './DisputePaymentMethodDetailsPaypal';
import { DisputePaymentMethodDetailsPaypalSchema } from './DisputePaymentMethodDetailsPaypal';
/**
 * DisputePaymentMethodDetails
 *
 * 
 */
export interface DisputePaymentMethodDetails {
  /**
   * DisputePaymentMethodDetailsAmazonPay
   *
   * 
   */
  amazonPay?: DisputePaymentMethodDetailsAmazonPay;
  /**
   * DisputePaymentMethodDetailsCard
   *
   * 
   */
  card?: DisputePaymentMethodDetailsCard;
  /**
   * DisputePaymentMethodDetailsKlarna
   *
   * 
   */
  klarna?: DisputePaymentMethodDetailsKlarna;
  /**
   * DisputePaymentMethodDetailsPaypal
   *
   * 
   */
  paypal?: DisputePaymentMethodDetailsPaypal;
  /**
   * Payment method type.
   */
  type: string;
}

export const DisputePaymentMethodDetailsSchema: TypedSchema<DisputePaymentMethodDetails> = typed<DisputePaymentMethodDetails>(object({
  get amazonPay() { return optional(DisputePaymentMethodDetailsAmazonPaySchema) },
  get card() { return optional(DisputePaymentMethodDetailsCardSchema) },
  get klarna() { return optional(DisputePaymentMethodDetailsKlarnaSchema) },
  get paypal() { return optional(DisputePaymentMethodDetailsPaypalSchema) },
  type: string(),
}));