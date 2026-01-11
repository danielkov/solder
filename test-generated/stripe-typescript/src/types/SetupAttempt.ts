import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApiErrors } from './ApiErrors';
import { ApiErrorsSchema } from './ApiErrors';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentMethodOrRef } from './PaymentMethodOrRef';
import { PaymentMethodOrRefSchema } from './PaymentMethodOrRef';
import type { SetupAttemptPaymentMethodDetails } from './SetupAttemptPaymentMethodDetails';
import { SetupAttemptPaymentMethodDetailsSchema } from './SetupAttemptPaymentMethodDetails';
import type { SetupIntentOrRef } from './SetupIntentOrRef';
import { SetupIntentOrRefSchema } from './SetupIntentOrRef';
/**
 * PaymentFlowsSetupIntentSetupAttempt
 *
 * A SetupAttempt describes one attempted confirmation of a SetupIntent,
whether that confirmation is successful or unsuccessful. You can use
SetupAttempts to inspect details of a specific attempt at setting up a
payment method using a SetupIntent.
 */
export interface SetupAttempt {
  /**
   * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
   */
  application?: ApplicationOrRef;
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.

It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
   */
  customer?: CustomerUnion;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.

Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: Array<string>;
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
   * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * ID of the payment method used with this SetupAttempt.
   */
  paymentMethod: PaymentMethodOrRef;
  /**
   * SetupAttemptPaymentMethodDetails
   *
   * 
   */
  paymentMethodDetails: SetupAttemptPaymentMethodDetails;
  /**
   * The error encountered during this attempt to confirm the SetupIntent, if any.
   */
  setupError?: ApiErrors;
  /**
   * ID of the SetupIntent that this attempt belongs to.
   */
  setupIntent: SetupIntentOrRef;
  /**
   * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
   */
  status: string;
  /**
   * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
   */
  usage: string;
}

export const SetupAttemptSchema: TypedSchema<SetupAttempt> = typed<SetupAttempt>(object({
  get application() { return optional(ApplicationOrRefSchema) },
  attachToSelf: optional(boolean()),
  created: number(),
  get customer() { return optional(CustomerUnionSchema) },
  flowDirections: optional(array(string())),
  id: string(),
  livemode: boolean(),
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  paymentMethod: PaymentMethodOrRefSchema,
  paymentMethodDetails: SetupAttemptPaymentMethodDetailsSchema,
  get setupError() { return optional(ApiErrorsSchema) },
  setupIntent: SetupIntentOrRefSchema,
  status: string(),
  usage: string(),
}));