import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingCardholderSpendingLimit
 *
 * 
 */
export interface IssuingCardholderSpendingLimit {
  /**
   * Maximum amount allowed to spend per interval. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories.
   */
  categories?: Array<string>;
  /**
   * Interval (or event) to which the amount applies.
   */
  interval: string;
}

export const IssuingCardholderSpendingLimitSchema: TypedSchema<IssuingCardholderSpendingLimit> = typed<IssuingCardholderSpendingLimit>(object({
  amount: number(),
  categories: optional(array(string())),
  interval: string(),
}));