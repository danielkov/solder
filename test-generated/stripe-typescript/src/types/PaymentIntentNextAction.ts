import { TypedSchema, object, optional, string, typed, unknown } from '@speakeasy-api/tonic';

import type { PaymentIntentNextActionAlipayHandleRedirect } from './PaymentIntentNextActionAlipayHandleRedirect';
import { PaymentIntentNextActionAlipayHandleRedirectSchema } from './PaymentIntentNextActionAlipayHandleRedirect';
import type { PaymentIntentNextActionBoleto } from './PaymentIntentNextActionBoleto';
import { PaymentIntentNextActionBoletoSchema } from './PaymentIntentNextActionBoleto';
import type { PaymentIntentNextActionCardAwaitNotification } from './PaymentIntentNextActionCardAwaitNotification';
import { PaymentIntentNextActionCardAwaitNotificationSchema } from './PaymentIntentNextActionCardAwaitNotification';
import type { PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode } from './PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode';
import { PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCodeSchema } from './PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode';
import type { PaymentIntentNextActionDisplayBankTransferInstructions } from './PaymentIntentNextActionDisplayBankTransferInstructions';
import { PaymentIntentNextActionDisplayBankTransferInstructionsSchema } from './PaymentIntentNextActionDisplayBankTransferInstructions';
import type { PaymentIntentNextActionDisplayMultibancoDetails } from './PaymentIntentNextActionDisplayMultibancoDetails';
import { PaymentIntentNextActionDisplayMultibancoDetailsSchema } from './PaymentIntentNextActionDisplayMultibancoDetails';
import type { PaymentIntentNextActionDisplayOxxoDetails } from './PaymentIntentNextActionDisplayOxxoDetails';
import { PaymentIntentNextActionDisplayOxxoDetailsSchema } from './PaymentIntentNextActionDisplayOxxoDetails';
import type { PaymentIntentNextActionKonbini } from './PaymentIntentNextActionKonbini';
import { PaymentIntentNextActionKonbiniSchema } from './PaymentIntentNextActionKonbini';
import type { PaymentIntentNextActionPaynowDisplayQrCode } from './PaymentIntentNextActionPaynowDisplayQrCode';
import { PaymentIntentNextActionPaynowDisplayQrCodeSchema } from './PaymentIntentNextActionPaynowDisplayQrCode';
import type { PaymentIntentNextActionPixDisplayQrCode } from './PaymentIntentNextActionPixDisplayQrCode';
import { PaymentIntentNextActionPixDisplayQrCodeSchema } from './PaymentIntentNextActionPixDisplayQrCode';
import type { PaymentIntentNextActionPromptpayDisplayQrCode } from './PaymentIntentNextActionPromptpayDisplayQrCode';
import { PaymentIntentNextActionPromptpayDisplayQrCodeSchema } from './PaymentIntentNextActionPromptpayDisplayQrCode';
import type { PaymentIntentNextActionRedirectToUrl } from './PaymentIntentNextActionRedirectToUrl';
import { PaymentIntentNextActionRedirectToUrlSchema } from './PaymentIntentNextActionRedirectToUrl';
import type { PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode } from './PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode';
import { PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCodeSchema } from './PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode';
import type { PaymentIntentNextActionVerifyWithMicrodeposits } from './PaymentIntentNextActionVerifyWithMicrodeposits';
import { PaymentIntentNextActionVerifyWithMicrodepositsSchema } from './PaymentIntentNextActionVerifyWithMicrodeposits';
import type { PaymentIntentNextActionWechatPayDisplayQrCode } from './PaymentIntentNextActionWechatPayDisplayQrCode';
import { PaymentIntentNextActionWechatPayDisplayQrCodeSchema } from './PaymentIntentNextActionWechatPayDisplayQrCode';
import type { PaymentIntentNextActionWechatPayRedirectToAndroidApp } from './PaymentIntentNextActionWechatPayRedirectToAndroidApp';
import { PaymentIntentNextActionWechatPayRedirectToAndroidAppSchema } from './PaymentIntentNextActionWechatPayRedirectToAndroidApp';
import type { PaymentIntentNextActionWechatPayRedirectToIosApp } from './PaymentIntentNextActionWechatPayRedirectToIosApp';
import { PaymentIntentNextActionWechatPayRedirectToIosAppSchema } from './PaymentIntentNextActionWechatPayRedirectToIosApp';
/**
 * PaymentIntentNextAction
 *
 * 
 */
export interface PaymentIntentNextAction {
  /**
   * PaymentIntentNextActionAlipayHandleRedirect
   *
   * 
   */
  alipayHandleRedirect?: PaymentIntentNextActionAlipayHandleRedirect;
  /**
   * payment_intent_next_action_boleto
   *
   * 
   */
  boletoDisplayDetails?: PaymentIntentNextActionBoleto;
  /**
   * PaymentIntentNextActionCardAwaitNotification
   *
   * 
   */
  cardAwaitNotification?: PaymentIntentNextActionCardAwaitNotification;
  /**
   * PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode
   *
   * 
   */
  cashappHandleRedirectOrDisplayQrCode?: PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCode;
  /**
   * PaymentIntentNextActionDisplayBankTransferInstructions
   *
   * 
   */
  displayBankTransferInstructions?: PaymentIntentNextActionDisplayBankTransferInstructions;
  /**
   * payment_intent_next_action_konbini
   *
   * 
   */
  konbiniDisplayDetails?: PaymentIntentNextActionKonbini;
  /**
   * PaymentIntentNextActionDisplayMultibancoDetails
   *
   * 
   */
  multibancoDisplayDetails?: PaymentIntentNextActionDisplayMultibancoDetails;
  /**
   * PaymentIntentNextActionDisplayOxxoDetails
   *
   * 
   */
  oxxoDisplayDetails?: PaymentIntentNextActionDisplayOxxoDetails;
  /**
   * PaymentIntentNextActionPaynowDisplayQrCode
   *
   * 
   */
  paynowDisplayQrCode?: PaymentIntentNextActionPaynowDisplayQrCode;
  /**
   * PaymentIntentNextActionPixDisplayQrCode
   *
   * 
   */
  pixDisplayQrCode?: PaymentIntentNextActionPixDisplayQrCode;
  /**
   * PaymentIntentNextActionPromptpayDisplayQrCode
   *
   * 
   */
  promptpayDisplayQrCode?: PaymentIntentNextActionPromptpayDisplayQrCode;
  /**
   * PaymentIntentNextActionRedirectToUrl
   *
   * 
   */
  redirectToUrl?: PaymentIntentNextActionRedirectToUrl;
  /**
   * PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode
   *
   * 
   */
  swishHandleRedirectOrDisplayQrCode?: PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCode;
  /**
   * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
   */
  type: string;
  /**
   * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
   */
  useStripeSdk?: any;
  /**
   * PaymentIntentNextActionVerifyWithMicrodeposits
   *
   * 
   */
  verifyWithMicrodeposits?: PaymentIntentNextActionVerifyWithMicrodeposits;
  /**
   * PaymentIntentNextActionWechatPayDisplayQrCode
   *
   * 
   */
  wechatPayDisplayQrCode?: PaymentIntentNextActionWechatPayDisplayQrCode;
  /**
   * PaymentIntentNextActionWechatPayRedirectToAndroidApp
   *
   * 
   */
  wechatPayRedirectToAndroidApp?: PaymentIntentNextActionWechatPayRedirectToAndroidApp;
  /**
   * PaymentIntentNextActionWechatPayRedirectToIOSApp
   *
   * 
   */
  wechatPayRedirectToIosApp?: PaymentIntentNextActionWechatPayRedirectToIosApp;
}

export const PaymentIntentNextActionSchema: TypedSchema<PaymentIntentNextAction> = typed<PaymentIntentNextAction>(object({
  get alipayHandleRedirect() { return optional(PaymentIntentNextActionAlipayHandleRedirectSchema) },
  get boletoDisplayDetails() { return optional(PaymentIntentNextActionBoletoSchema) },
  get cardAwaitNotification() { return optional(PaymentIntentNextActionCardAwaitNotificationSchema) },
  get cashappHandleRedirectOrDisplayQrCode() { return optional(PaymentIntentNextActionCashappHandleRedirectOrDisplayQrCodeSchema) },
  get displayBankTransferInstructions() { return optional(PaymentIntentNextActionDisplayBankTransferInstructionsSchema) },
  get konbiniDisplayDetails() { return optional(PaymentIntentNextActionKonbiniSchema) },
  get multibancoDisplayDetails() { return optional(PaymentIntentNextActionDisplayMultibancoDetailsSchema) },
  get oxxoDisplayDetails() { return optional(PaymentIntentNextActionDisplayOxxoDetailsSchema) },
  get paynowDisplayQrCode() { return optional(PaymentIntentNextActionPaynowDisplayQrCodeSchema) },
  get pixDisplayQrCode() { return optional(PaymentIntentNextActionPixDisplayQrCodeSchema) },
  get promptpayDisplayQrCode() { return optional(PaymentIntentNextActionPromptpayDisplayQrCodeSchema) },
  get redirectToUrl() { return optional(PaymentIntentNextActionRedirectToUrlSchema) },
  get swishHandleRedirectOrDisplayQrCode() { return optional(PaymentIntentNextActionSwishHandleRedirectOrDisplayQrCodeSchema) },
  type: string(),
  useStripeSdk: optional(unknown()),
  get verifyWithMicrodeposits() { return optional(PaymentIntentNextActionVerifyWithMicrodepositsSchema) },
  get wechatPayDisplayQrCode() { return optional(PaymentIntentNextActionWechatPayDisplayQrCodeSchema) },
  get wechatPayRedirectToAndroidApp() { return optional(PaymentIntentNextActionWechatPayRedirectToAndroidAppSchema) },
  get wechatPayRedirectToIosApp() { return optional(PaymentIntentNextActionWechatPayRedirectToIosAppSchema) },
}));