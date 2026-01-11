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
 * PaymentRecord
 *
 * A Payment Record is a resource that allows you to represent payments that occur on- or off-Stripe.
For example, you can create a Payment Record to model a payment made on a different payment processor,
in order to mark an Invoice as paid and a Subscription as active. Payment Records consist of one or
more Payment Attempt Records, which represent individual attempts made on a payment network.
 */
export interface PaymentRecord {
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
   * ID of the Connect application that created the PaymentRecord.
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
   * ID of the latest Payment Attempt Record attached to this Payment Record.
   */
  latestPaymentAttemptRecord?: string;
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
   * PaymentsPrimitivesPaymentRecordsResourceProcessorDetails
   *
   * Processor information associated with this payment.
   */
  processorDetails: PaymentsPrimitivesPaymentRecordsResourceProcessorDetails;
  /**
   * Shipping information for this payment.
   */
  shippingDetails?: PaymentsPrimitivesPaymentRecordsResourceShippingDetails;
}

export const PaymentRecordSchema: TypedSchema<PaymentRecord> = typed<PaymentRecord>(object({
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
  latestPaymentAttemptRecord: optional(string()),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get paymentMethodDetails() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodDetailsSchema) },
  processorDetails: PaymentsPrimitivesPaymentRecordsResourceProcessorDetailsSchema,
  get shippingDetails() { return optional(PaymentsPrimitivesPaymentRecordsResourceShippingDetailsSchema) },
}));