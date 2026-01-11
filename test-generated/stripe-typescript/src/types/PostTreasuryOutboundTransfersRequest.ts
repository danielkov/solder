import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData } from './PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData';
import { PostTreasuryOutboundTransfersRequestDestinationPaymentMethodDataSchema } from './PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData';
import type { PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions } from './PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions';
import { PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptionsSchema } from './PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions';
export interface PostTreasuryOutboundTransfersRequest {
  /**
   * Amount (in cents) to be transferred.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The PaymentMethod to use as the payment instrument for the OutboundTransfer.
   */
  destinationPaymentMethod?: string;
  /**
   * payment_method_data
   *
   * Hash used to generate the PaymentMethod to be used for this OutboundTransfer. Exclusive with `destination_payment_method`.
   */
  destinationPaymentMethodData?: PostTreasuryOutboundTransfersRequestDestinationPaymentMethodData;
  /**
   * payment_method_options
   *
   * Hash describing payment method configuration details.
   */
  destinationPaymentMethodOptions?: PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptions;
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
   * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is "transfer".
   */
  statementDescriptor?: string;
}

export const PostTreasuryOutboundTransfersRequestSchema: TypedSchema<PostTreasuryOutboundTransfersRequest> = typed<PostTreasuryOutboundTransfersRequest>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  destinationPaymentMethod: optional(string()),
  get destinationPaymentMethodData() { return optional(PostTreasuryOutboundTransfersRequestDestinationPaymentMethodDataSchema) },
  get destinationPaymentMethodOptions() { return optional(PostTreasuryOutboundTransfersRequestDestinationPaymentMethodOptionsSchema) },
  expand: optional(array(string())),
  financialAccount: string(),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  statementDescriptor: optional(string()),
}));