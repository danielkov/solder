import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * automatic_payment_methods_param
 *
 * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
 */
export interface PostSetupIntentsRequestAutomaticPaymentMethods {
  allowRedirects?: string;
  enabled: boolean;
}

export const PostSetupIntentsRequestAutomaticPaymentMethodsSchema: TypedSchema<PostSetupIntentsRequestAutomaticPaymentMethods> = typed<PostSetupIntentsRequestAutomaticPaymentMethods>(object({
  allowRedirects: optional(string()),
  enabled: boolean(),
}));