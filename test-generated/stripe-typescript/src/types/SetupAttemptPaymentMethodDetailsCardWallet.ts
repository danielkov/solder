import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardWalletApplePay } from './PaymentMethodDetailsCardWalletApplePay';
import { PaymentMethodDetailsCardWalletApplePaySchema } from './PaymentMethodDetailsCardWalletApplePay';
import type { PaymentMethodDetailsCardWalletGooglePay } from './PaymentMethodDetailsCardWalletGooglePay';
import { PaymentMethodDetailsCardWalletGooglePaySchema } from './PaymentMethodDetailsCardWalletGooglePay';
/**
 * setup_attempt_payment_method_details_card_wallet
 *
 * 
 */
export interface SetupAttemptPaymentMethodDetailsCardWallet {
  /**
   * payment_method_details_card_wallet_apple_pay
   *
   * 
   */
  applePay?: PaymentMethodDetailsCardWalletApplePay;
  /**
   * payment_method_details_card_wallet_google_pay
   *
   * 
   */
  googlePay?: PaymentMethodDetailsCardWalletGooglePay;
  /**
   * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type: string;
}

export const SetupAttemptPaymentMethodDetailsCardWalletSchema: TypedSchema<SetupAttemptPaymentMethodDetailsCardWallet> = typed<SetupAttemptPaymentMethodDetailsCardWallet>(object({
  get applePay() { return optional(PaymentMethodDetailsCardWalletApplePaySchema) },
  get googlePay() { return optional(PaymentMethodDetailsCardWalletGooglePaySchema) },
  type: string(),
}));