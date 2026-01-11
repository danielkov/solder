import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard';
import { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardSchema } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard';
import type { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent';
import { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresentSchema } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent';
import type { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent';
import { PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresentSchema } from './PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent';
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest {
  /**
   * Simulated on-reader tip amount.
   */
  amountTip?: number;
  /**
   * card
   *
   * Simulated data for the card payment method.
   */
  card?: PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard;
  /**
   * card_present
   *
   * Simulated data for the card_present payment method.
   */
  cardPresent?: PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * interac_present
   *
   * Simulated data for the interac_present payment method.
   */
  interacPresent?: PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent;
  /**
   * Simulated payment type.
   */
  type?: string;
}

export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestSchema: TypedSchema<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest> = typed<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequest>(object({
  amountTip: optional(number()),
  get card() { return optional(PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardSchema) },
  get cardPresent() { return optional(PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresentSchema) },
  expand: optional(array(string())),
  get interacPresent() { return optional(PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresentSchema) },
  type: optional(string()),
}));