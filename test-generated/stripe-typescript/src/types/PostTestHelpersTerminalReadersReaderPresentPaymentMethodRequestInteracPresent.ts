import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * interac_present
 *
 * Simulated data for the interac_present payment method.
 */
export interface PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent {
  number?: string;
}

export const PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresentSchema: TypedSchema<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent> = typed<PostTestHelpersTerminalReadersReaderPresentPaymentMethodRequestInteracPresent>(object({
  number: optional(string()),
}));