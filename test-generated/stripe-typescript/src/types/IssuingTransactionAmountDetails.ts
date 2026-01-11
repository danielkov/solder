import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionAmountDetails
 *
 * 
 */
export interface IssuingTransactionAmountDetails {
  /**
   * The fee charged by the ATM for the cash withdrawal.
   */
  atmFee?: number;
  /**
   * The amount of cash requested by the cardholder.
   */
  cashbackAmount?: number;
}

export const IssuingTransactionAmountDetailsSchema: TypedSchema<IssuingTransactionAmountDetails> = typed<IssuingTransactionAmountDetails>(object({
  atmFee: optional(number()),
  cashbackAmount: optional(number()),
}));