import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIssuingCardsRequestPin } from './PostIssuingCardsRequestPin';
import { PostIssuingCardsRequestPinSchema } from './PostIssuingCardsRequestPin';
import type { PostIssuingCardsRequestSecondLine } from './PostIssuingCardsRequestSecondLine';
import { PostIssuingCardsRequestSecondLineSchema } from './PostIssuingCardsRequestSecondLine';
import type { PostIssuingCardsRequestShipping } from './PostIssuingCardsRequestShipping';
import { PostIssuingCardsRequestShippingSchema } from './PostIssuingCardsRequestShipping';
import type { PostIssuingCardsRequestSpendingControls } from './PostIssuingCardsRequestSpendingControls';
import { PostIssuingCardsRequestSpendingControlsSchema } from './PostIssuingCardsRequestSpendingControls';
export interface PostIssuingCardsRequest {
  /**
   * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object with which the card will be associated.
   */
  cardholder?: string;
  /**
   * The currency for the card.
   */
  currency: string;
  /**
   * The desired expiration month (1-12) for this card if [specifying a custom expiration date](/issuing/cards/virtual/issue-cards?testing-method=with-code#exp-dates).
   */
  expMonth?: number;
  /**
   * The desired 4-digit expiration year for this card if [specifying a custom expiration date](/issuing/cards/virtual/issue-cards?testing-method=with-code#exp-dates).
   */
  expYear?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The new financial account ID the card will be associated with. This field allows a card to be reassigned to a different financial account.
   */
  financialAccount?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The personalization design object belonging to this card.
   */
  personalizationDesign?: string;
  /**
   * encrypted_pin_param
   *
   * The desired PIN for this card.
   */
  pin?: PostIssuingCardsRequestPin;
  /**
   * The card this is meant to be a replacement for (if any).
   */
  replacementFor?: string;
  /**
   * If `replacement_for` is specified, this should indicate why that card is being replaced.
   */
  replacementReason?: string;
  /**
   * The second line to print on the card. Max length: 24 characters.
   */
  secondLine?: PostIssuingCardsRequestSecondLine;
  /**
   * shipping_specs
   *
   * The address where the card will be shipped.
   */
  shipping?: PostIssuingCardsRequestShipping;
  /**
   * authorization_controls_param
   *
   * Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: PostIssuingCardsRequestSpendingControls;
  /**
   * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
   */
  status?: string;
  /**
   * The type of card to issue. Possible values are `physical` or `virtual`.
   */
  type: string;
}

export const PostIssuingCardsRequestSchema: TypedSchema<PostIssuingCardsRequest> = typed<PostIssuingCardsRequest>(object({
  cardholder: optional(string()),
  currency: string(),
  expMonth: optional(number()),
  expYear: optional(number()),
  expand: optional(array(string())),
  financialAccount: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  personalizationDesign: optional(string()),
  get pin() { return optional(PostIssuingCardsRequestPinSchema) },
  replacementFor: optional(string()),
  replacementReason: optional(string()),
  get secondLine() { return optional(PostIssuingCardsRequestSecondLineSchema) },
  get shipping() { return optional(PostIssuingCardsRequestShippingSchema) },
  get spendingControls() { return optional(PostIssuingCardsRequestSpendingControlsSchema) },
  status: optional(string()),
  type: string(),
}));