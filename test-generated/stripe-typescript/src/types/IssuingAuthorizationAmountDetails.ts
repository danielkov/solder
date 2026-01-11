import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationAmountDetails
 *
 * 
 */
export interface IssuingAuthorizationAmountDetails {
  /**
   * The fee charged by the ATM for the cash withdrawal.
   */
  atmFee?: number;
  /**
   * The amount of cash requested by the cardholder.
   */
  cashbackAmount?: number;
}

export const IssuingAuthorizationAmountDetailsSchema: TypedSchema<IssuingAuthorizationAmountDetails> = typed<IssuingAuthorizationAmountDetails>(object({
  atmFee: optional(number()),
  cashbackAmount: optional(number()),
}));