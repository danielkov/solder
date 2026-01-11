import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostTestHelpersIssuingAuthorizationsRequestFuel } from './DefaultPostTestHelpersIssuingAuthorizationsRequestFuel';
import { DefaultPostTestHelpersIssuingAuthorizationsRequestFuelSchema } from './DefaultPostTestHelpersIssuingAuthorizationsRequestFuel';
import type { PostTestHelpersIssuingAuthorizationsRequestAmountDetails } from './PostTestHelpersIssuingAuthorizationsRequestAmountDetails';
import { PostTestHelpersIssuingAuthorizationsRequestAmountDetailsSchema } from './PostTestHelpersIssuingAuthorizationsRequestAmountDetails';
import type { PostTestHelpersIssuingAuthorizationsRequestFleet } from './PostTestHelpersIssuingAuthorizationsRequestFleet';
import { PostTestHelpersIssuingAuthorizationsRequestFleetSchema } from './PostTestHelpersIssuingAuthorizationsRequestFleet';
import type { PostTestHelpersIssuingAuthorizationsRequestMerchantData } from './PostTestHelpersIssuingAuthorizationsRequestMerchantData';
import { PostTestHelpersIssuingAuthorizationsRequestMerchantDataSchema } from './PostTestHelpersIssuingAuthorizationsRequestMerchantData';
import type { PostTestHelpersIssuingAuthorizationsRequestNetworkData } from './PostTestHelpersIssuingAuthorizationsRequestNetworkData';
import { PostTestHelpersIssuingAuthorizationsRequestNetworkDataSchema } from './PostTestHelpersIssuingAuthorizationsRequestNetworkData';
import type { PostTestHelpersIssuingAuthorizationsRequestRiskAssessment } from './PostTestHelpersIssuingAuthorizationsRequestRiskAssessment';
import { PostTestHelpersIssuingAuthorizationsRequestRiskAssessmentSchema } from './PostTestHelpersIssuingAuthorizationsRequestRiskAssessment';
import type { PostTestHelpersIssuingAuthorizationsRequestVerificationData } from './PostTestHelpersIssuingAuthorizationsRequestVerificationData';
import { PostTestHelpersIssuingAuthorizationsRequestVerificationDataSchema } from './PostTestHelpersIssuingAuthorizationsRequestVerificationData';
export interface PostTestHelpersIssuingAuthorizationsRequest {
  /**
   * The total amount to attempt to authorize. This amount is in the provided currency, or defaults to the card's currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount?: number;
  /**
   * amount_details_specs
   *
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?: PostTestHelpersIssuingAuthorizationsRequestAmountDetails;
  /**
   * How the card details were provided. Defaults to online.
   */
  authorizationMethod?: string;
  /**
   * Card associated with this authorization.
   */
  card: string;
  /**
   * The currency of the authorization. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * fleet_testmode_authorization_specs
   *
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: PostTestHelpersIssuingAuthorizationsRequestFleet;
  /**
   * Probability that this transaction can be disputed in the event of fraud. Assessed by comparing the characteristics of the authorization to card network rules.
   */
  fraudDisputabilityLikelihood?: string;
  /**
   * fuel_specs
   *
   * Information about fuel that was purchased with this transaction.
   */
  fuel?: DefaultPostTestHelpersIssuingAuthorizationsRequestFuel;
  /**
   * If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
   */
  isAmountControllable?: boolean;
  /**
   * The total amount to attempt to authorize. This amount is in the provided merchant currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  merchantAmount?: number;
  /**
   * The currency of the authorization. If not provided, defaults to the currency of the card. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency?: string;
  /**
   * merchant_data_specs
   *
   * Details about the seller (grocery store, e-commerce website, etc.) where the card authorization happened.
   */
  merchantData?: PostTestHelpersIssuingAuthorizationsRequestMerchantData;
  /**
   * network_data_specs
   *
   * Details about the authorization, such as identifiers, set by the card network.
   */
  networkData?: PostTestHelpersIssuingAuthorizationsRequestNetworkData;
  /**
   * risk_assessment_specs
   *
   * Stripe’s assessment of the fraud risk for this authorization.
   */
  riskAssessment?: PostTestHelpersIssuingAuthorizationsRequestRiskAssessment;
  /**
   * verification_data_specs
   *
   * Verifications that Stripe performed on information that the cardholder provided to the merchant.
   */
  verificationData?: PostTestHelpersIssuingAuthorizationsRequestVerificationData;
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
   */
  wallet?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequest> = typed<PostTestHelpersIssuingAuthorizationsRequest>(object({
  amount: optional(number()),
  get amountDetails() { return optional(PostTestHelpersIssuingAuthorizationsRequestAmountDetailsSchema) },
  authorizationMethod: optional(string()),
  card: string(),
  currency: optional(string()),
  expand: optional(array(string())),
  get fleet() { return optional(PostTestHelpersIssuingAuthorizationsRequestFleetSchema) },
  fraudDisputabilityLikelihood: optional(string()),
  get fuel() { return optional(DefaultPostTestHelpersIssuingAuthorizationsRequestFuelSchema) },
  isAmountControllable: optional(boolean()),
  merchantAmount: optional(number()),
  merchantCurrency: optional(string()),
  get merchantData() { return optional(PostTestHelpersIssuingAuthorizationsRequestMerchantDataSchema) },
  get networkData() { return optional(PostTestHelpersIssuingAuthorizationsRequestNetworkDataSchema) },
  get riskAssessment() { return optional(PostTestHelpersIssuingAuthorizationsRequestRiskAssessmentSchema) },
  get verificationData() { return optional(PostTestHelpersIssuingAuthorizationsRequestVerificationDataSchema) },
  wallet: optional(string()),
}));