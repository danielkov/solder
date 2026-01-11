import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
/**
 * RadarEarlyFraudWarning
 *
 * An early fraud warning indicates that the card issuer has notified us that a
charge may be fraudulent.

Related guide: [Early fraud warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings)
 */
export interface RadarEarlyFraudWarning {
  /**
   * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
   */
  actionable: boolean;
  /**
   * ID of the charge this early fraud warning is for, optionally expanded.
   */
  charge: ChargeOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
   */
  fraudType: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * ID of the Payment Intent this early fraud warning is for, optionally expanded.
   */
  paymentIntent?: PaymentIntentOrRef;
}

export const RadarEarlyFraudWarningSchema: TypedSchema<RadarEarlyFraudWarning> = typed<RadarEarlyFraudWarning>(object({
  actionable: boolean(),
  charge: ChargeOrRefSchema,
  created: number(),
  fraudType: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
}));