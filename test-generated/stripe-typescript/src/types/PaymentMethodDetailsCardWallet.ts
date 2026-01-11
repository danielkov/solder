import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardWalletAmexExpressCheckout } from './PaymentMethodDetailsCardWalletAmexExpressCheckout';
import { PaymentMethodDetailsCardWalletAmexExpressCheckoutSchema } from './PaymentMethodDetailsCardWalletAmexExpressCheckout';
import type { PaymentMethodDetailsCardWalletApplePay } from './PaymentMethodDetailsCardWalletApplePay';
import { PaymentMethodDetailsCardWalletApplePaySchema } from './PaymentMethodDetailsCardWalletApplePay';
import type { PaymentMethodDetailsCardWalletGooglePay } from './PaymentMethodDetailsCardWalletGooglePay';
import { PaymentMethodDetailsCardWalletGooglePaySchema } from './PaymentMethodDetailsCardWalletGooglePay';
import type { PaymentMethodDetailsCardWalletLink } from './PaymentMethodDetailsCardWalletLink';
import { PaymentMethodDetailsCardWalletLinkSchema } from './PaymentMethodDetailsCardWalletLink';
import type { PaymentMethodDetailsCardWalletMasterpass } from './PaymentMethodDetailsCardWalletMasterpass';
import { PaymentMethodDetailsCardWalletMasterpassSchema } from './PaymentMethodDetailsCardWalletMasterpass';
import type { PaymentMethodDetailsCardWalletSamsungPay } from './PaymentMethodDetailsCardWalletSamsungPay';
import { PaymentMethodDetailsCardWalletSamsungPaySchema } from './PaymentMethodDetailsCardWalletSamsungPay';
import type { PaymentMethodDetailsCardWalletVisaCheckout } from './PaymentMethodDetailsCardWalletVisaCheckout';
import { PaymentMethodDetailsCardWalletVisaCheckoutSchema } from './PaymentMethodDetailsCardWalletVisaCheckout';
/**
 * payment_method_details_card_wallet
 *
 * 
 */
export interface PaymentMethodDetailsCardWallet {
  /**
   * payment_method_details_card_wallet_amex_express_checkout
   *
   * 
   */
  amexExpressCheckout?: PaymentMethodDetailsCardWalletAmexExpressCheckout;
  /**
   * payment_method_details_card_wallet_apple_pay
   *
   * 
   */
  applePay?: PaymentMethodDetailsCardWalletApplePay;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string;
  /**
   * payment_method_details_card_wallet_google_pay
   *
   * 
   */
  googlePay?: PaymentMethodDetailsCardWalletGooglePay;
  /**
   * payment_method_details_card_wallet_link
   *
   * 
   */
  link?: PaymentMethodDetailsCardWalletLink;
  /**
   * payment_method_details_card_wallet_masterpass
   *
   * 
   */
  masterpass?: PaymentMethodDetailsCardWalletMasterpass;
  /**
   * payment_method_details_card_wallet_samsung_pay
   *
   * 
   */
  samsungPay?: PaymentMethodDetailsCardWalletSamsungPay;
  /**
   * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type: string;
  /**
   * payment_method_details_card_wallet_visa_checkout
   *
   * 
   */
  visaCheckout?: PaymentMethodDetailsCardWalletVisaCheckout;
}

export const PaymentMethodDetailsCardWalletSchema: TypedSchema<PaymentMethodDetailsCardWallet> = typed<PaymentMethodDetailsCardWallet>(object({
  get amexExpressCheckout() { return optional(PaymentMethodDetailsCardWalletAmexExpressCheckoutSchema) },
  get applePay() { return optional(PaymentMethodDetailsCardWalletApplePaySchema) },
  dynamicLast4: optional(string()),
  get googlePay() { return optional(PaymentMethodDetailsCardWalletGooglePaySchema) },
  get link() { return optional(PaymentMethodDetailsCardWalletLinkSchema) },
  get masterpass() { return optional(PaymentMethodDetailsCardWalletMasterpassSchema) },
  get samsungPay() { return optional(PaymentMethodDetailsCardWalletSamsungPaySchema) },
  type: string(),
  get visaCheckout() { return optional(PaymentMethodDetailsCardWalletVisaCheckoutSchema) },
}));