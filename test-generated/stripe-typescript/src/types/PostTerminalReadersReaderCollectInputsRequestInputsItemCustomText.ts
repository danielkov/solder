import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * custom_text_params
 */
export interface PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText {
  description?: string;
  skipButton?: string;
  submitButton?: string;
  title: string;
}

export const PostTerminalReadersReaderCollectInputsRequestInputsItemCustomTextSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText> = typed<PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText>(object({
  description: optional(string()),
  skipButton: optional(string()),
  submitButton: optional(string()),
  title: string(),
}));