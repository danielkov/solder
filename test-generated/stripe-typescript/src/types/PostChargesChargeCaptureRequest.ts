import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostChargesChargeCaptureRequestTransferData } from './PostChargesChargeCaptureRequestTransferData';
import { PostChargesChargeCaptureRequestTransferDataSchema } from './PostChargesChargeCaptureRequestTransferData';
export interface PostChargesChargeCaptureRequest {
  /**
   * The amount to capture, which must be less than or equal to the original amount.
   */
  amount?: number;
  /**
   * An application fee to add on to this charge.
   */
  applicationFee?: number;
  /**
   * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
   */
  applicationFeeAmount?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
   */
  receiptEmail?: string;
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
   * transfer_data_specs
   *
   * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
   */
  transferData?: PostChargesChargeCaptureRequestTransferData;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string;
}

export const PostChargesChargeCaptureRequestSchema: TypedSchema<PostChargesChargeCaptureRequest> = typed<PostChargesChargeCaptureRequest>(object({
  amount: optional(number()),
  applicationFee: optional(number()),
  applicationFeeAmount: optional(number()),
  expand: optional(array(string())),
  receiptEmail: optional(string()),
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostChargesChargeCaptureRequestTransferDataSchema) },
  transferGroup: optional(string()),
}));