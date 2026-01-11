import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerAcceptance } from './CustomerAcceptance';
import { CustomerAcceptanceSchema } from './CustomerAcceptance';
import type { MandateMultiUse } from './MandateMultiUse';
import { MandateMultiUseSchema } from './MandateMultiUse';
import type { MandatePaymentMethodDetails } from './MandatePaymentMethodDetails';
import { MandatePaymentMethodDetailsSchema } from './MandatePaymentMethodDetails';
import type { MandateSingleUse } from './MandateSingleUse';
import { MandateSingleUseSchema } from './MandateSingleUse';
import type { PaymentMethodOrRef } from './PaymentMethodOrRef';
import { PaymentMethodOrRefSchema } from './PaymentMethodOrRef';
/**
 * Mandate
 *
 * A Mandate is a record of the permission that your customer gives you to debit their payment method.
 */
export interface Mandate {
  /**
   * customer_acceptance
   *
   * 
   */
  customerAcceptance: CustomerAcceptance;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * mandate_multi_use
   *
   * 
   */
  multiUse?: MandateMultiUse;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account (if any) that the mandate is intended for.
   */
  onBehalfOf?: string;
  /**
   * ID of the payment method associated with this mandate.
   */
  paymentMethod: PaymentMethodOrRef;
  /**
   * mandate_payment_method_details
   *
   * 
   */
  paymentMethodDetails: MandatePaymentMethodDetails;
  /**
   * mandate_single_use
   *
   * 
   */
  singleUse?: MandateSingleUse;
  /**
   * The mandate status indicates whether or not you can use it to initiate a payment.
   */
  status: string;
  /**
   * The type of the mandate.
   */
  type: string;
}

export const MandateSchema: TypedSchema<Mandate> = typed<Mandate>(object({
  customerAcceptance: CustomerAcceptanceSchema,
  id: string(),
  livemode: boolean(),
  get multiUse() { return optional(MandateMultiUseSchema) },
  object: string(),
  onBehalfOf: optional(string()),
  paymentMethod: PaymentMethodOrRefSchema,
  paymentMethodDetails: MandatePaymentMethodDetailsSchema,
  get singleUse() { return optional(MandateSingleUseSchema) },
  status: string(),
  type: string(),
}));