import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * encrypted_pin_param
 *
 * The desired new PIN for this card.
 */
export interface PostIssuingCardsCardRequestPin {
  encryptedNumber?: string;
}

export const PostIssuingCardsCardRequestPinSchema: TypedSchema<PostIssuingCardsCardRequestPin> = typed<PostIssuingCardsCardRequestPin>(object({
  encryptedNumber: optional(string()),
}));