import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentMethodConfigResourceDisplayPreference
 *
 * 
 */
export interface PaymentMethodConfigResourceDisplayPreference {
  /**
   * For child configs, whether or not the account's preference will be observed. If `false`, the parent configuration's default is used.
   */
  overridable?: boolean;
  /**
   * The account's display preference.
   */
  preference: string;
  /**
   * The effective display preference value.
   */
  value: string;
}

export const PaymentMethodConfigResourceDisplayPreferenceSchema: TypedSchema<PaymentMethodConfigResourceDisplayPreference> = typed<PaymentMethodConfigResourceDisplayPreference>(object({
  overridable: optional(boolean()),
  preference: string(),
  value: string(),
}));