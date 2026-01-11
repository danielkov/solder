import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomLogo } from './CustomLogo';
import { CustomLogoSchema } from './CustomLogo';
/**
 * payment_method_custom
 *
 * 
 */
export interface PaymentMethodCustom {
  /**
   * Display name of the Dashboard-only CustomPaymentMethodType.
   */
  displayName?: string;
  /**
   * Contains information about the Dashboard-only CustomPaymentMethodType logo.
   */
  logo?: CustomLogo;
  /**
   * ID of the Dashboard-only CustomPaymentMethodType. Not expandable.
   */
  type: string;
}

export const PaymentMethodCustomSchema: TypedSchema<PaymentMethodCustom> = typed<PaymentMethodCustom>(object({
  displayName: optional(string()),
  get logo() { return optional(CustomLogoSchema) },
  type: string(),
}));