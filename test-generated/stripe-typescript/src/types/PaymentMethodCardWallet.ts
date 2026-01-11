import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodCardWalletAmexExpressCheckout } from './PaymentMethodCardWalletAmexExpressCheckout';
import { PaymentMethodCardWalletAmexExpressCheckoutSchema } from './PaymentMethodCardWalletAmexExpressCheckout';
import type { PaymentMethodCardWalletApplePay } from './PaymentMethodCardWalletApplePay';
import { PaymentMethodCardWalletApplePaySchema } from './PaymentMethodCardWalletApplePay';
import type { PaymentMethodCardWalletGooglePay } from './PaymentMethodCardWalletGooglePay';
import { PaymentMethodCardWalletGooglePaySchema } from './PaymentMethodCardWalletGooglePay';
import type { PaymentMethodCardWalletLink } from './PaymentMethodCardWalletLink';
import { PaymentMethodCardWalletLinkSchema } from './PaymentMethodCardWalletLink';
import type { PaymentMethodCardWalletMasterpass } from './PaymentMethodCardWalletMasterpass';
import { PaymentMethodCardWalletMasterpassSchema } from './PaymentMethodCardWalletMasterpass';
import type { PaymentMethodCardWalletSamsungPay } from './PaymentMethodCardWalletSamsungPay';
import { PaymentMethodCardWalletSamsungPaySchema } from './PaymentMethodCardWalletSamsungPay';
import type { PaymentMethodCardWalletVisaCheckout } from './PaymentMethodCardWalletVisaCheckout';
import { PaymentMethodCardWalletVisaCheckoutSchema } from './PaymentMethodCardWalletVisaCheckout';
/**
 * payment_method_card_wallet
 *
 * 
 */
export interface PaymentMethodCardWallet {
  /**
   * payment_method_card_wallet_amex_express_checkout
   *
   * 
   */
  amexExpressCheckout?: PaymentMethodCardWalletAmexExpressCheckout;
  /**
   * payment_method_card_wallet_apple_pay
   *
   * 
   */
  applePay?: PaymentMethodCardWalletApplePay;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string;
  /**
   * payment_method_card_wallet_google_pay
   *
   * 
   */
  googlePay?: PaymentMethodCardWalletGooglePay;
  /**
   * payment_method_card_wallet_link
   *
   * 
   */
  link?: PaymentMethodCardWalletLink;
  /**
   * payment_method_card_wallet_masterpass
   *
   * 
   */
  masterpass?: PaymentMethodCardWalletMasterpass;
  /**
   * payment_method_card_wallet_samsung_pay
   *
   * 
   */
  samsungPay?: PaymentMethodCardWalletSamsungPay;
  /**
   * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type: string;
  /**
   * payment_method_card_wallet_visa_checkout
   *
   * 
   */
  visaCheckout?: PaymentMethodCardWalletVisaCheckout;
}

export const PaymentMethodCardWalletSchema: TypedSchema<PaymentMethodCardWallet> = typed<PaymentMethodCardWallet>(object({
  get amexExpressCheckout() { return optional(PaymentMethodCardWalletAmexExpressCheckoutSchema) },
  get applePay() { return optional(PaymentMethodCardWalletApplePaySchema) },
  dynamicLast4: optional(string()),
  get googlePay() { return optional(PaymentMethodCardWalletGooglePaySchema) },
  get link() { return optional(PaymentMethodCardWalletLinkSchema) },
  get masterpass() { return optional(PaymentMethodCardWalletMasterpassSchema) },
  get samsungPay() { return optional(PaymentMethodCardWalletSamsungPaySchema) },
  type: string(),
  get visaCheckout() { return optional(PaymentMethodCardWalletVisaCheckoutSchema) },
}));