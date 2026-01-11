import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * recovery_params
 */
export interface PostCheckoutSessionsRequestRecovery {
  allowPromotionCodes?: boolean;
  enabled: boolean;
}

export const PostCheckoutSessionsRequestRecoverySchema: TypedSchema<PostCheckoutSessionsRequestRecovery> = typed<PostCheckoutSessionsRequestRecovery>(object({
  allowPromotionCodes: optional(boolean()),
  enabled: boolean(),
}));