import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * installments_param
 */
export interface PostCheckoutSessionsRequestInstallments {
  enabled?: boolean;
}

export const PostCheckoutSessionsRequestInstallmentsSchema: TypedSchema<PostCheckoutSessionsRequestInstallments> = typed<PostCheckoutSessionsRequestInstallments>(object({
  enabled: optional(boolean()),
}));