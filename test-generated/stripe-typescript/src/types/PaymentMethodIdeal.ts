import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_ideal
 *
 * 
 */
export interface PaymentMethodIdeal {
  /**
   * The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `buut`, `finom`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
   */
  bank?: string;
  /**
   * The Bank Identifier Code of the customer's bank, if the bank was provided.
   */
  bic?: string;
}

export const PaymentMethodIdealSchema: TypedSchema<PaymentMethodIdeal> = typed<PaymentMethodIdeal>(object({
  bank: optional(string()),
  bic: optional(string()),
}));