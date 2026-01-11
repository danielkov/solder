import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * card_present
 *
 * Simulated data for the card_present payment method.
 */
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent {
  number?: string;
}

export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresentSchema: TypedSchema<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent> = typed<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestCardPresent>(object({
  number: optional(string()),
}));