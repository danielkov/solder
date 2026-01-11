import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutCardInstallmentsOptions
 *
 * 
 */
export interface CheckoutCardInstallmentsOptions {
  /**
   * Indicates if installments are enabled
   */
  enabled?: boolean;
}

export const CheckoutCardInstallmentsOptionsSchema: TypedSchema<CheckoutCardInstallmentsOptions> = typed<CheckoutCardInstallmentsOptions>(object({
  enabled: optional(boolean()),
}));