import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { DisputeEvidence } from './DisputeEvidence';
import { DisputeEvidenceSchema } from './DisputeEvidence';
import type { DisputeEvidenceDetails } from './DisputeEvidenceDetails';
import { DisputeEvidenceDetailsSchema } from './DisputeEvidenceDetails';
import type { DisputePaymentMethodDetails } from './DisputePaymentMethodDetails';
import { DisputePaymentMethodDetailsSchema } from './DisputePaymentMethodDetails';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
/**
 * Dispute
 *
 * A dispute occurs when a customer questions your charge with their card issuer.
When this happens, you have the opportunity to respond to the dispute with
evidence that shows that the charge is legitimate.

Related guide: [Disputes and fraud](https://stripe.com/docs/disputes)
 */
export interface Dispute {
  /**
   * Disputed amount. Usually the amount of the charge, but it can differ (usually because of currency fluctuation or because only part of the order is disputed).
   */
  amount: number;
  /**
   * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
   */
  balanceTransactions: Array<BalanceTransaction>;
  /**
   * ID of the charge that's disputed.
   */
  charge: ChargeOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * List of eligibility types that are included in `enhanced_evidence`.
   */
  enhancedEligibilityTypes: Array<string>;
  /**
   * DisputeEvidence
   *
   * 
   */
  evidence: DisputeEvidence;
  /**
   * DisputeEvidenceDetails
   *
   * 
   */
  evidenceDetails: DisputeEvidenceDetails;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * If true, it's still possible to refund the disputed payment. After the payment has been fully refunded, no further funds are withdrawn from your Stripe account as a result of this dispute.
   */
  isChargeRefundable: boolean;
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
   * ID of the PaymentIntent that's disputed.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * DisputePaymentMethodDetails
   *
   * 
   */
  paymentMethodDetails?: DisputePaymentMethodDetails;
  /**
   * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `noncompliant`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Learn more about [dispute reasons](https://stripe.com/docs/disputes/categories).
   */
  reason: string;
  /**
   * The current status of a dispute. Possible values include:`warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, `lost`, or `prevented`.
   */
  status: string;
}

export const DisputeSchema: TypedSchema<Dispute> = typed<Dispute>(object({
  amount: number(),
  balanceTransactions: array(BalanceTransactionSchema),
  charge: ChargeOrRefSchema,
  created: number(),
  currency: string(),
  enhancedEligibilityTypes: array(string()),
  evidence: DisputeEvidenceSchema,
  evidenceDetails: DisputeEvidenceDetailsSchema,
  id: string(),
  isChargeRefundable: boolean(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  get paymentMethodDetails() { return optional(DisputePaymentMethodDetailsSchema) },
  reason: string(),
  status: string(),
}));