import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * card
 *
 * Simulated data for the card payment method.
 */
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard {
  cvc?: string;
  expMonth: number;
  expYear: number;
  number: string;
}

export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardSchema: TypedSchema<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard> = typed<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCard>(object({
  cvc: optional(string()),
  expMonth: number(),
  expYear: number(),
  number: string(),
}));