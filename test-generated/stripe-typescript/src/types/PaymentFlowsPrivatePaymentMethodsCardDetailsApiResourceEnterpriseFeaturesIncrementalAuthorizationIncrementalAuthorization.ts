import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization {
  /**
   * Indicates whether or not the incremental authorization feature is supported.
   */
  status: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorizationSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization> = typed<PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization>(object({
  status: string(),
}));