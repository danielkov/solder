import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentIntentNextActionVerifyWithMicrodeposits
 *
 * 
 */
export interface PaymentIntentNextActionVerifyWithMicrodeposits {
  /**
   * The timestamp when the microdeposits are expected to land.
   */
  arrivalDate: number;
  /**
   * The URL for the hosted verification page, which allows customers to verify their bank account.
   */
  hostedVerificationUrl: string;
  /**
   * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
   */
  microdepositType?: string;
}

export const PaymentIntentNextActionVerifyWithMicrodepositsSchema: TypedSchema<PaymentIntentNextActionVerifyWithMicrodeposits> = typed<PaymentIntentNextActionVerifyWithMicrodeposits>(object({
  arrivalDate: number(),
  hostedVerificationUrl: string(),
  microdepositType: optional(string()),
}));