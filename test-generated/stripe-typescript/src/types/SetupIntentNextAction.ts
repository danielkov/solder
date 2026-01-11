import { TypedSchema, object, optional, string, typed, unknown } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode } from './PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode';
import { PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCodeSchema } from './PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode';
import type { SetupIntentNextActionRedirectToUrl } from './SetupIntentNextActionRedirectToUrl';
import { SetupIntentNextActionRedirectToUrlSchema } from './SetupIntentNextActionRedirectToUrl';
import type { SetupIntentNextActionVerifyWithMicrodeposits } from './SetupIntentNextActionVerifyWithMicrodeposits';
import { SetupIntentNextActionVerifyWithMicrodepositsSchema } from './SetupIntentNextActionVerifyWithMicrodeposits';
/**
 * SetupIntentNextAction
 *
 * 
 */
export interface SetupIntentNextAction {
  /**
   * PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
   *
   * 
   */
  cashappHandleRedirectOrDisplayQrCode?: PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode;
  /**
   * SetupIntentNextActionRedirectToUrl
   *
   * 
   */
  redirectToUrl?: SetupIntentNextActionRedirectToUrl;
  /**
   * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
   */
  type: string;
  /**
   * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
   */
  useStripeSdk?: any;
  /**
   * SetupIntentNextActionVerifyWithMicrodeposits
   *
   * 
   */
  verifyWithMicrodeposits?: SetupIntentNextActionVerifyWithMicrodeposits;
}

export const SetupIntentNextActionSchema: TypedSchema<SetupIntentNextAction> = typed<SetupIntentNextAction>(object({
  get cashappHandleRedirectOrDisplayQrCode() { return optional(PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCodeSchema) },
  get redirectToUrl() { return optional(SetupIntentNextActionRedirectToUrlSchema) },
  type: string(),
  useStripeSdk: optional(unknown()),
  get verifyWithMicrodeposits() { return optional(SetupIntentNextActionVerifyWithMicrodepositsSchema) },
}));