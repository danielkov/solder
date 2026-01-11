import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_p24
 *
 * 
 */
export interface PaymentMethodDetailsP24 {
  /**
   * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
   */
  bank?: string;
  /**
   * Unique reference for this Przelewy24 payment.
   */
  reference?: string;
  /**
   * Owner's verified full name. Values are verified or provided by Przelewy24 directly
(if supported) at the time of authorization or settlement. They cannot be set or mutated.
Przelewy24 rarely provides this information so the attribute is usually empty.
   */
  verifiedName?: string;
}

export const PaymentMethodDetailsP24Schema: TypedSchema<PaymentMethodDetailsP24> = typed<PaymentMethodDetailsP24>(object({
  bank: optional(string()),
  reference: optional(string()),
  verifiedName: optional(string()),
}));