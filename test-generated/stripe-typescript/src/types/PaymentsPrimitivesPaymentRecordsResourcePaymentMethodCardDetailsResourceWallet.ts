import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePaySchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay';
import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePaySchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet
 *
 * 
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet {
  /**
   * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay
   *
   * 
   */
  applePay?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePay;
  /**
   * (For tokenized numbers only.) The last four digits of the device account number.
   */
  dynamicLast4?: string;
  /**
   * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay
   *
   * 
   */
  googlePay?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePay;
  /**
   * The type of the card wallet, one of `apple_pay` or `google_pay`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
   */
  type: string;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet>(object({
  get applePay() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceApplePaySchema) },
  dynamicLast4: optional(string()),
  get googlePay() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletResourceGooglePaySchema) },
  type: string(),
}));