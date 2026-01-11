import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization {
  /**
   * Indicates whether or not the capture window is extended beyond the standard authorization.
   */
  status: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorizationSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization> = typed<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization>(object({
  status: string(),
}));