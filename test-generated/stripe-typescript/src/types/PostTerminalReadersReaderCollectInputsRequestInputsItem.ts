import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText } from './PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText';
import { PostTerminalReadersReaderCollectInputsRequestInputsItemCustomTextSchema } from './PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText';
import type { PostTerminalReadersReaderCollectInputsRequestInputsItemSelection } from './PostTerminalReadersReaderCollectInputsRequestInputsItemSelection';
import { PostTerminalReadersReaderCollectInputsRequestInputsItemSelectionSchema } from './PostTerminalReadersReaderCollectInputsRequestInputsItemSelection';
import type { PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem } from './PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem';
import { PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItemSchema } from './PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem';
/**
 * input_params
 */
export interface PostTerminalReadersReaderCollectInputsRequestInputsItem {
  /**
   * custom_text_params
   */
  customText: PostTerminalReadersReaderCollectInputsRequestInputsItemCustomText;
  required?: boolean;
  /**
   * selection_params
   */
  selection?: PostTerminalReadersReaderCollectInputsRequestInputsItemSelection;
  toggles?: Array<PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItem>;
  type: string;
}

export const PostTerminalReadersReaderCollectInputsRequestInputsItemSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequestInputsItem> = typed<PostTerminalReadersReaderCollectInputsRequestInputsItem>(object({
  customText: PostTerminalReadersReaderCollectInputsRequestInputsItemCustomTextSchema,
  required: optional(boolean()),
  get selection() { return optional(PostTerminalReadersReaderCollectInputsRequestInputsItemSelectionSchema) },
  get toggles() { return optional(array(PostTerminalReadersReaderCollectInputsRequestInputsItemTogglesItemSchema)) },
  type: string(),
}));