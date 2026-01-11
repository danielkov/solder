import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SetupIntentTypeSpecificPaymentMethodOptionsClient
 *
 * 
 */
export interface SetupIntentTypeSpecificPaymentMethodOptionsClient {
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const SetupIntentTypeSpecificPaymentMethodOptionsClientSchema: TypedSchema<SetupIntentTypeSpecificPaymentMethodOptionsClient> = typed<SetupIntentTypeSpecificPaymentMethodOptionsClient>(object({
  verificationMethod: optional(string()),
}));