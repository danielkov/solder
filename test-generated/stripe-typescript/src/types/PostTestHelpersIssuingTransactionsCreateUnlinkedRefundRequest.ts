import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails';
import { PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetailsSchema } from './PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails';
import type { PostTestHelpersIssuingAuthorizationsRequestMerchantData } from './PostTestHelpersIssuingAuthorizationsRequestMerchantData';
import { PostTestHelpersIssuingAuthorizationsRequestMerchantDataSchema } from './PostTestHelpersIssuingAuthorizationsRequestMerchantData';
export interface PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest {
  /**
   * The total amount to attempt to refund. This amount is in the provided currency, or defaults to the cards currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Card associated with this unlinked refund transaction.
   */
  card: string;
  /**
   * The currency of the unlinked refund. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * merchant_data_specs
   *
   * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
   */
  merchantData?: PostTestHelpersIssuingAuthorizationsRequestMerchantData;
  /**
   * purchase_details_specs
   *
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?: PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetails;
}

export const PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequestSchema: TypedSchema<PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest> = typed<PostTestHelpersIssuingTransactionsCreateUnlinkedRefundRequest>(object({
  amount: number(),
  card: string(),
  currency: optional(string()),
  expand: optional(array(string())),
  get merchantData() { return optional(PostTestHelpersIssuingAuthorizationsRequestMerchantDataSchema) },
  get purchaseDetails() { return optional(PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestPurchaseDetailsSchema) },
}));