import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostIssuingCardsCardRequestPin } from './PostIssuingCardsCardRequestPin';
import { PostIssuingCardsCardRequestPinSchema } from './PostIssuingCardsCardRequestPin';
import type { PostIssuingCardsCardRequestShipping } from './PostIssuingCardsCardRequestShipping';
import { PostIssuingCardsCardRequestShippingSchema } from './PostIssuingCardsCardRequestShipping';
import type { PostIssuingCardsRequestSpendingControls } from './PostIssuingCardsRequestSpendingControls';
import { PostIssuingCardsRequestSpendingControlsSchema } from './PostIssuingCardsRequestSpendingControls';
export interface PostIssuingCardsCardRequest {
  /**
   * Reason why the `status` of this card is `canceled`.
   */
  cancellationReason?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  personalizationDesign?: string;
  /**
   * encrypted_pin_param
   *
   * The desired new PIN for this card.
   */
  pin?: PostIssuingCardsCardRequestPin;
  /**
   * shipping_specs
   *
   * Updated shipping information for the card.
   */
  shipping?: PostIssuingCardsCardRequestShipping;
  /**
   * authorization_controls_param
   *
   * Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: PostIssuingCardsRequestSpendingControls;
  /**
   * Dictates whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`. If this card is being canceled because it was lost or stolen, this information should be provided as `cancellation_reason`.
   */
  status?: string;
}

export const PostIssuingCardsCardRequestSchema: TypedSchema<PostIssuingCardsCardRequest> = typed<PostIssuingCardsCardRequest>(object({
  cancellationReason: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  personalizationDesign: optional(string()),
  get pin() { return optional(PostIssuingCardsCardRequestPinSchema) },
  get shipping() { return optional(PostIssuingCardsCardRequestShippingSchema) },
  get spendingControls() { return optional(PostIssuingCardsRequestSpendingControlsSchema) },
  status: optional(string()),
}));