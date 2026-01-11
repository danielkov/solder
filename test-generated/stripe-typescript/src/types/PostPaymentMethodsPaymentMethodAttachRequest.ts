import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostPaymentMethodsPaymentMethodAttachRequest {
  /**
   * The ID of the customer to which to attach the PaymentMethod.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostPaymentMethodsPaymentMethodAttachRequestSchema: TypedSchema<PostPaymentMethodsPaymentMethodAttachRequest> = typed<PostPaymentMethodsPaymentMethodAttachRequest>(object({
  customer: string(),
  expand: optional(array(string())),
}));