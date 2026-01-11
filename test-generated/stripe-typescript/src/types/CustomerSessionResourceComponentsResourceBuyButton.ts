import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * CustomerSessionResourceComponentsResourceBuyButton
 *
 * This hash contains whether the buy button is enabled.
 */
export interface CustomerSessionResourceComponentsResourceBuyButton {
  /**
   * Whether the buy button is enabled.
   */
  enabled: boolean;
}

export const CustomerSessionResourceComponentsResourceBuyButtonSchema: TypedSchema<CustomerSessionResourceComponentsResourceBuyButton> = typed<CustomerSessionResourceComponentsResourceBuyButton>(object({
  enabled: boolean(),
}));