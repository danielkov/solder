import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * encrypted_pin_param
 *
 * The desired PIN for this card.
 */
export interface PostIssuingCardsRequestPin {
  encryptedNumber?: string;
}

export const PostIssuingCardsRequestPinSchema: TypedSchema<PostIssuingCardsRequestPin> = typed<PostIssuingCardsRequestPin>(object({
  encryptedNumber: optional(string()),
}));