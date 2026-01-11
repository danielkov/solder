import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * choice_params
 */
export interface PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem {
  id: string;
  style?: string;
  text: string;
}

export const PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItemSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem> = typed<PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem>(object({
  id: string(),
  style: optional(string()),
  text: string(),
}));