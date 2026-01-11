import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * installment_plan
 */
export interface PostInvoicesRequestCardObjectPlanObject {
  count?: number;
  interval?: string;
  type: string;
}

export const PostInvoicesRequestCardObjectPlanObjectSchema: TypedSchema<PostInvoicesRequestCardObjectPlanObject> = typed<PostInvoicesRequestCardObjectPlanObject>(object({
  count: optional(number()),
  interval: optional(string()),
  type: string(),
}));