import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostChargesChargeRequestFraudDetails } from './PostChargesChargeRequestFraudDetails';
import { PostChargesChargeRequestFraudDetailsSchema } from './PostChargesChargeRequestFraudDetails';
import type { PostChargesRequestShipping } from './PostChargesRequestShipping';
import { PostChargesRequestShippingSchema } from './PostChargesRequestShipping';
export interface PostChargesChargeRequest {
  /**
   * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
   */
  customer?: string;
  /**
   * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * fraud_details
   *
   * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
   */
  fraudDetails?: PostChargesChargeRequestFraudDetails;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
   */
  receiptEmail?: string;
  /**
   * optional_fields_shipping
   *
   * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
   */
  shipping?: PostChargesRequestShipping;
  /**
   * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string;
}

export const PostChargesChargeRequestSchema: TypedSchema<PostChargesChargeRequest> = typed<PostChargesChargeRequest>(object({
  customer: optional(string()),
  description: optional(string()),
  expand: optional(array(string())),
  get fraudDetails() { return optional(PostChargesChargeRequestFraudDetailsSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  receiptEmail: optional(string()),
  get shipping() { return optional(PostChargesRequestShippingSchema) },
  transferGroup: optional(string()),
}));