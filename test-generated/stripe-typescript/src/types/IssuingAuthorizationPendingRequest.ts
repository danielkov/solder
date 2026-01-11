import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorizationAmountDetails } from './IssuingAuthorizationAmountDetails';
import { IssuingAuthorizationAmountDetailsSchema } from './IssuingAuthorizationAmountDetails';
/**
 * IssuingAuthorizationPendingRequest
 *
 * 
 */
export interface IssuingAuthorizationPendingRequest {
  /**
   * The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?: IssuingAuthorizationAmountDetails;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable: boolean;
  /**
   * The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount: number;
  /**
   * The local currency the merchant is requesting to authorize.
   */
  merchantCurrency: string;
  /**
   * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
   */
  networkRiskScore?: number;
}

export const IssuingAuthorizationPendingRequestSchema: TypedSchema<IssuingAuthorizationPendingRequest> = typed<IssuingAuthorizationPendingRequest>(object({
  amount: number(),
  get amountDetails() { return optional(IssuingAuthorizationAmountDetailsSchema) },
  currency: string(),
  isAmountControllable: boolean(),
  merchantAmount: number(),
  merchantCurrency: string(),
  networkRiskScore: optional(number()),
}));