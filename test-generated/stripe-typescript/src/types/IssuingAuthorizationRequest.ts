import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorizationAmountDetails } from './IssuingAuthorizationAmountDetails';
import { IssuingAuthorizationAmountDetailsSchema } from './IssuingAuthorizationAmountDetails';
/**
 * IssuingAuthorizationRequest
 *
 * 
 */
export interface IssuingAuthorizationRequest {
  /**
   * The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
   */
  amount: number;
  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?: IssuingAuthorizationAmountDetails;
  /**
   * Whether this request was approved.
   */
  approved: boolean;
  /**
   * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
   */
  authorizationCode?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount: number;
  /**
   * The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency: string;
  /**
   * The card network's estimate of the likelihood that an authorization is fraudulent. Takes on values between 1 and 99.
   */
  networkRiskScore?: number;
  /**
   * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
   */
  reason: string;
  /**
   * If the `request_history.reason` is `webhook_error` because the direct webhook response is invalid (for example, parsing errors or missing parameters), we surface a more detailed error message via this field.
   */
  reasonMessage?: string;
  /**
   * Time when the card network received an authorization request from the acquirer in UTC. Referred to by networks as transmission time.
   */
  requestedAt?: number;
}

export const IssuingAuthorizationRequestSchema: TypedSchema<IssuingAuthorizationRequest> = typed<IssuingAuthorizationRequest>(object({
  amount: number(),
  get amountDetails() { return optional(IssuingAuthorizationAmountDetailsSchema) },
  approved: boolean(),
  authorizationCode: optional(string()),
  created: number(),
  currency: string(),
  merchantAmount: number(),
  merchantCurrency: string(),
  networkRiskScore: optional(number()),
  reason: string(),
  reasonMessage: optional(string()),
  requestedAt: optional(number()),
}));