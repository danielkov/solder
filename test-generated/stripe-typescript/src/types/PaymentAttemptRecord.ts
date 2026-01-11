import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PaymentsPrimitivesPaymentRecordsResourceAmount } from './PaymentsPrimitivesPaymentRecordsResourceAmount';
import { PaymentsPrimitivesPaymentRecordsResourceAmountSchema } from './PaymentsPrimitivesPaymentRecordsResourceAmount';
import type { PaymentsPrimitivesPaymentRecordsResourceCustomerDetails } from './PaymentsPrimitivesPaymentRecordsResourceCustomerDetails';
import { PaymentsPrimitivesPaymentRecordsResourceCustomerDetailsSchema } from './PaymentsPrimitivesPaymentRecordsResourceCustomerDetails';
import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetailsSchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails';
import type { PaymentsPrimitivesPaymentRecordsResourceProcessorDetails } from './PaymentsPrimitivesPaymentRecordsResourceProcessorDetails';
import { PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsSchema } from './PaymentsPrimitivesPaymentRecordsResourceProcessorDetails';
import type { PaymentsPrimitivesPaymentRecordsResourceShippingDetails } from './PaymentsPrimitivesPaymentRecordsResourceShippingDetails';
import { PaymentsPrimitivesPaymentRecordsResourceShippingDetailsSchema } from './PaymentsPrimitivesPaymentRecordsResourceShippingDetails';
/**
 * PaymentAttemptRecord
 *
 * A Payment Attempt Record represents an individual attempt at making a payment, on or off Stripe.
Each payment attempt tries to collect a fixed amount of money from a fixed customer and payment
method. Payment Attempt Records are attached to Payment Records. Only one attempt per Payment Record
can have guaranteed funds.
 */
export interface PaymentAttemptRecord {
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amount: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountAuthorized: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountCanceled: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountFailed: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountGuaranteed: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountRefunded: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceAmount
   *
   * A representation of an amount of money, consisting of an amount and a currency.
   */
  amountRequested: PaymentsPrimitivesPaymentRecordsResourceAmount;
  /**
   * ID of the Connect application that created the PaymentAttemptRecord.
   */
  application?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Customer information for this payment.
   */
  customerDetails?: PaymentsPrimitivesPaymentRecordsResourceCustomerDetails;
  /**
   * Indicates whether the customer was present in your checkout flow during this payment.
   */
  customerPresence?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Information about the Payment Method debited for this payment.
   */
  paymentMethodDetails?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetails;
  /**
   * ID of the Payment Record this Payment Attempt Record belongs to.
   */
  paymentRecord?: string;
  /**
   * PaymentsPrimitivesPaymentRecordsResourceProcessorDetails
   *
   * Processor information associated with this payment.
   */
  processorDetails: PaymentsPrimitivesPaymentRecordsResourceProcessorDetails;
  /**
   * Indicates who reported the payment.
   */
  reportedBy: string;
  /**
   * Shipping information for this payment.
   */
  shippingDetails?: PaymentsPrimitivesPaymentRecordsResourceShippingDetails;
}

export const PaymentAttemptRecordSchema: TypedSchema<PaymentAttemptRecord> = typed<PaymentAttemptRecord>(object({
  amount: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountAuthorized: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountCanceled: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountFailed: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountGuaranteed: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountRefunded: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  amountRequested: PaymentsPrimitivesPaymentRecordsResourceAmountSchema,
  application: optional(string()),
  created: number(),
  get customerDetails() { return optional(PaymentsPrimitivesPaymentRecordsResourceCustomerDetailsSchema) },
  customerPresence: optional(string()),
  description: optional(string()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get paymentMethodDetails() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetailsSchema) },
  paymentRecord: optional(string()),
  processorDetails: PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsSchema,
  reportedBy: string(),
  get shippingDetails() { return optional(PaymentsPrimitivesPaymentRecordsResourceShippingDetailsSchema) },
}));