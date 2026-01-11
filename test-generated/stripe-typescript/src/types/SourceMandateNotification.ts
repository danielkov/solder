import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Source } from './Source';
import { SourceSchema } from './Source';
import type { SourceMandateNotificationAcssDebitData } from './SourceMandateNotificationAcssDebitData';
import { SourceMandateNotificationAcssDebitDataSchema } from './SourceMandateNotificationAcssDebitData';
import type { SourceMandateNotificationBacsDebitData } from './SourceMandateNotificationBacsDebitData';
import { SourceMandateNotificationBacsDebitDataSchema } from './SourceMandateNotificationBacsDebitData';
import type { SourceMandateNotificationSepaDebitData } from './SourceMandateNotificationSepaDebitData';
import { SourceMandateNotificationSepaDebitDataSchema } from './SourceMandateNotificationSepaDebitData';
/**
 * SourceMandateNotification
 *
 * Source mandate notifications should be created when a notification related to
a source mandate must be sent to the payer. They will trigger a webhook or
deliver an email to the customer.
 */
export interface SourceMandateNotification {
  /**
   * SourceMandateNotificationAcssDebitData
   *
   * 
   */
  acssDebit?: SourceMandateNotificationAcssDebitData;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
   */
  amount?: number;
  /**
   * SourceMandateNotificationBacsDebitData
   *
   * 
   */
  bacsDebit?: SourceMandateNotificationBacsDebitData;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The reason of the mandate notification. Valid reasons are `mandate_confirmed` or `debit_initiated`.
   */
  reason: string;
  /**
   * SourceMandateNotificationSepaDebitData
   *
   * 
   */
  sepaDebit?: SourceMandateNotificationSepaDebitData;
  /**
   * Source
   *
   * `Source` objects allow you to accept a variety of payment methods. They
represent a customer's payment instrument, and can be used with the Stripe API
just like a `Card` object: once chargeable, they can be charged, or can be
attached to customers.

Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
This newer API provides access to our latest features and payment method types.

Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
   */
  source: Source;
  /**
   * The status of the mandate notification. Valid statuses are `pending` or `submitted`.
   */
  status: string;
  /**
   * The type of source this mandate notification is attached to. Should be the source type identifier code for the payment method, such as `three_d_secure`.
   */
  type: string;
}

export const SourceMandateNotificationSchema: TypedSchema<SourceMandateNotification> = typed<SourceMandateNotification>(object({
  get acssDebit() { return optional(SourceMandateNotificationAcssDebitDataSchema) },
  amount: optional(number()),
  get bacsDebit() { return optional(SourceMandateNotificationBacsDebitDataSchema) },
  created: number(),
  id: string(),
  livemode: boolean(),
  object: string(),
  reason: string(),
  get sepaDebit() { return optional(SourceMandateNotificationSepaDebitDataSchema) },
  source: SourceSchema,
  status: string(),
  type: string(),
}));