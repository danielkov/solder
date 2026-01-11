import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationFeeOrRef } from './ApplicationFeeOrRef';
import { ApplicationFeeOrRefSchema } from './ApplicationFeeOrRef';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { BillingDetails } from './BillingDetails';
import { BillingDetailsSchema } from './BillingDetails';
import type { ChargeFraudDetails } from './ChargeFraudDetails';
import { ChargeFraudDetailsSchema } from './ChargeFraudDetails';
import type { ChargeOutcome } from './ChargeOutcome';
import { ChargeOutcomeSchema } from './ChargeOutcome';
import type { ChargeTransferData } from './ChargeTransferData';
import { ChargeTransferDataSchema } from './ChargeTransferData';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { FailureBalanceTransactionOrRef } from './FailureBalanceTransactionOrRef';
import { FailureBalanceTransactionOrRefSchema } from './FailureBalanceTransactionOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentFlowsPaymentIntentPresentmentDetails } from './PaymentFlowsPaymentIntentPresentmentDetails';
import { PaymentFlowsPaymentIntentPresentmentDetailsSchema } from './PaymentFlowsPaymentIntentPresentmentDetails';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { PaymentMethodDetails } from './PaymentMethodDetails';
import { PaymentMethodDetailsSchema } from './PaymentMethodDetails';
import type { RadarRadarOptions } from './RadarRadarOptions';
import { RadarRadarOptionsSchema } from './RadarRadarOptions';
import type { RefundsProperty2 } from './RefundsProperty2';
import { RefundsProperty2Schema } from './RefundsProperty2';
import type { ReviewOrRef } from './ReviewOrRef';
import { ReviewOrRefSchema } from './ReviewOrRef';
import type { Shipping } from './Shipping';
import { ShippingSchema } from './Shipping';
import type { SourceTransferOrRef } from './SourceTransferOrRef';
import { SourceTransferOrRefSchema } from './SourceTransferOrRef';
import type { TransferOrRef } from './TransferOrRef';
import { TransferOrRefSchema } from './TransferOrRef';
/**
 * Charge
 *
 * The `Charge` object represents a single attempt to move money into your Stripe account.
PaymentIntent confirmation is the most common way to create Charges, but [Account Debits](https://stripe.com/docs/connect/account-debits) may also create Charges.
Some legacy payment flows create Charges directly, which is not recommended for new integrations.
 */
export interface Charge {
  /**
   * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
   */
  amountCaptured: number;
  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
   */
  amountRefunded: number;
  /**
   * ID of the Connect application that created the charge.
   */
  application?: ApplicationOrRef;
  /**
   * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
   */
  applicationFee?: ApplicationFeeOrRef;
  /**
   * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
   */
  applicationFeeAmount?: number;
  /**
   * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
   */
  balanceTransaction?: BalanceTransactionOrRef;
  /**
   * billing_details
   *
   * 
   */
  billingDetails: BillingDetails;
  /**
   * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. This value only exists for card payments.
   */
  calculatedStatementDescriptor?: string;
  /**
   * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
   */
  captured: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer this charge is for if one exists.
   */
  customer?: CustomerUnion;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Whether the charge has been disputed.
   */
  disputed: boolean;
  /**
   * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
   */
  failureBalanceTransaction?: FailureBalanceTransactionOrRef;
  /**
   * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/error-codes) for a list of codes).
   */
  failureCode?: string;
  /**
   * Message to user further explaining reason for charge failure if available.
   */
  failureMessage?: string;
  /**
   * Information on fraud assessments for the charge.
   */
  fraudDetails?: ChargeFraudDetails;
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
   * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
   */
  outcome?: ChargeOutcome;
  /**
   * `true` if the charge succeeded, or was successfully authorized for later capture.
   */
  paid: boolean;
  /**
   * ID of the PaymentIntent associated with this charge, if one exists.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * ID of the payment method used in this charge.
   */
  paymentMethod?: string;
  /**
   * Details about the payment method at the time of the transaction.
   */
  paymentMethodDetails?: PaymentMethodDetails;
  /**
   * PaymentFlowsPaymentIntentPresentmentDetails
   *
   * 
   */
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails;
  /**
   * RadarRadarOptions
   *
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: RadarRadarOptions;
  /**
   * This is the email address that the receipt for this charge was sent to.
   */
  receiptEmail?: string;
  /**
   * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
   */
  receiptNumber?: string;
  /**
   * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
   */
  receiptUrl?: string;
  /**
   * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;
  /**
   * RefundList
   *
   * A list of refunds that have been applied to the charge.
   */
  refunds?: RefundsProperty2;
  /**
   * ID of the review associated with this charge if one exists.
   */
  review?: ReviewOrRef;
  /**
   * Shipping information for the charge.
   */
  shipping?: Shipping;
  /**
   * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
   */
  sourceTransfer?: SourceTransferOrRef;
  /**
   * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).

For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
   */
  statementDescriptor?: string;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
   */
  statementDescriptorSuffix?: string;
  /**
   * The status of the payment is either `succeeded`, `pending`, or `failed`.
   */
  status: string;
  /**
   * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
   */
  transfer?: TransferOrRef;
  /**
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: ChargeTransferData;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string;
}

export const ChargeSchema: TypedSchema<Charge> = typed<Charge>(object({
  amount: number(),
  amountCaptured: number(),
  amountRefunded: number(),
  get application() { return optional(ApplicationOrRefSchema) },
  get applicationFee() { return optional(ApplicationFeeOrRefSchema) },
  applicationFeeAmount: optional(number()),
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  billingDetails: BillingDetailsSchema,
  calculatedStatementDescriptor: optional(string()),
  captured: boolean(),
  created: number(),
  currency: string(),
  get customer() { return optional(CustomerUnionSchema) },
  description: optional(string()),
  disputed: boolean(),
  get failureBalanceTransaction() { return optional(FailureBalanceTransactionOrRefSchema) },
  failureCode: optional(string()),
  failureMessage: optional(string()),
  get fraudDetails() { return optional(ChargeFraudDetailsSchema) },
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get outcome() { return optional(ChargeOutcomeSchema) },
  paid: boolean(),
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  paymentMethod: optional(string()),
  get paymentMethodDetails() { return optional(PaymentMethodDetailsSchema) },
  get presentmentDetails() { return optional(PaymentFlowsPaymentIntentPresentmentDetailsSchema) },
  get radarOptions() { return optional(RadarRadarOptionsSchema) },
  receiptEmail: optional(string()),
  receiptNumber: optional(string()),
  receiptUrl: optional(string()),
  refunded: boolean(),
  get refunds() { return optional(RefundsProperty2Schema) },
  get review() { return optional(ReviewOrRefSchema) },
  get shipping() { return optional(ShippingSchema) },
  get sourceTransfer() { return optional(SourceTransferOrRefSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  status: string(),
  get transfer() { return optional(TransferOrRefSchema) },
  get transferData() { return optional(ChargeTransferDataSchema) },
  transferGroup: optional(string()),
}));