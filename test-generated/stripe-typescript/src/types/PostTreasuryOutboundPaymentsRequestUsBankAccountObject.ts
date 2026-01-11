import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostTreasuryOutboundPaymentsRequestUsBankAccountObject {
  network?: string;
}

export const PostTreasuryOutboundPaymentsRequestUsBankAccountObjectSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestUsBankAccountObject> = typed<PostTreasuryOutboundPaymentsRequestUsBankAccountObject>(object({
  network: optional(string()),
}));