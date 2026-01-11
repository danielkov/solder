import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * end_behavior
 */
export interface PostCheckoutSessionsRequestEndBehavior {
  missingPaymentMethod: string;
}

export const PostCheckoutSessionsRequestEndBehaviorSchema: TypedSchema<PostCheckoutSessionsRequestEndBehavior> = typed<PostCheckoutSessionsRequestEndBehavior>(object({
  missingPaymentMethod: string(),
}));