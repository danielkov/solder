import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface ReasoningSummaryText {
  text: string;
  type: string;
}

export const ReasoningSummaryTextSchema: TypedSchema<ReasoningSummaryText> = typed<ReasoningSummaryText>(object({
  text: string(),
  type: string(),
}));