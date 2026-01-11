import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * toggle_params
 */
export interface PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem {
  defaultValue?: string;
  description?: string;
  title?: string;
}

export const PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItemSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem> = typed<PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem>(object({
  defaultValue: optional(string()),
  description: optional(string()),
  title: optional(string()),
}));