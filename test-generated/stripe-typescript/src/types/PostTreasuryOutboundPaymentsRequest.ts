import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData } from './PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData';
import { PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodDataSchema } from './PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData';
import type { PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions } from './PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions';
import { PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptionsSchema } from './PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions';
import type { PostTreasuryOutboundPaymentsRequestEndUserDetails } from './PostTreasuryOutboundPaymentsRequestEndUserDetails';
import { PostTreasuryOutboundPaymentsRequestEndUserDetailsSchema } from './PostTreasuryOutboundPaymentsRequestEndUserDetails';
export interface PostTreasuryOutboundPaymentsRequest {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer to whom the OutboundPayment is sent. Must match the Customer attached to the `destination_payment_method` passed in.
   */
  customer?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The PaymentMethod to use as the payment instrument for the OutboundPayment. Exclusive with `destination_payment_method_data`.
   */
  destinationPaymentMethod?: string;
  /**
   * payment_method_data
   *
   * Hash used to generate the PaymentMethod to be used for this OutboundPayment. Exclusive with `destination_payment_method`.
   */
  destinationPaymentMethodData?: PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodData;
  /**
   * payment_method_options
   *
   * Payment method-specific configuration for this OutboundPayment.
   */
  destinationPaymentMethodOptions?: PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptions;
  /**
   * end_user_details_params
   *
   * End user details.
   */
  endUserDetails?: PostTreasuryOutboundPaymentsRequestEndUserDetails;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The FinancialAccount to pull funds from.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The description that appears on the receiving end for this OutboundPayment (for example, bank statement for external bank transfer). Maximum 10 characters for `ach` payments, 140 characters for `us_domestic_wire` payments, or 500 characters for `stripe` network transfers. The default value is "payment".
   */
  statementDescriptor?: string;
}

export const PostTreasuryOutboundPaymentsRequestSchema: TypedSchema<PostTreasuryOutboundPaymentsRequest> = typed<PostTreasuryOutboundPaymentsRequest>(object({
  amount: number(),
  currency: string(),
  customer: optional(string()),
  description: optional(string()),
  destinationPaymentMethod: optional(string()),
  get destinationPaymentMethodData() { return optional(PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodDataSchema) },
  get destinationPaymentMethodOptions() { return optional(PostTreasuryOutboundPaymentsRequestDestinationPaymentMethodOptionsSchema) },
  get endUserDetails() { return optional(PostTreasuryOutboundPaymentsRequestEndUserDetailsSchema) },
  expand: optional(array(string())),
  financialAccount: string(),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  statementDescriptor: optional(string()),
}));