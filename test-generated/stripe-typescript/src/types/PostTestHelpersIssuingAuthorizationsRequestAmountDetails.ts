import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * amount_details_specs
 *
 * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
 */
export interface PostTestHelpersIssuingAuthorizationsRequestAmountDetails {
  atmFee?: number;
  cashbackAmount?: number;
}

export const PostTestHelpersIssuingAuthorizationsRequestAmountDetailsSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestAmountDetails> = typed<PostTestHelpersIssuingAuthorizationsRequestAmountDetails>(object({
  atmFee: optional(number()),
  cashbackAmount: optional(number()),
}));