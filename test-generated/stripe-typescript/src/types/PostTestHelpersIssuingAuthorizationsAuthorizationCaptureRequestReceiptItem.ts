import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * receipt_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem {
  description?: string;
  quantity?: string;
  total?: number;
  unitCost?: number;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItemSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestReceiptItem>(object({
  description: optional(string()),
  quantity: optional(string()),
  total: optional(number()),
  unitCost: optional(number()),
}));