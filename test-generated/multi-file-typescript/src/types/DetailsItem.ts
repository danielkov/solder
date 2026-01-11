import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface DetailsItem {
  /**
   * Field that caused the error
   */
  field?: string;
  /**
   * Specific error message for this field
   */
  message?: string;
}

export const DetailsItemSchema: TypedSchema<DetailsItem> = typed<DetailsItem>(object({
  field: optional(string()),
  message: optional(string()),
}));