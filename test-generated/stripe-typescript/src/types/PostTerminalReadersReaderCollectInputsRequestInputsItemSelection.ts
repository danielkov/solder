import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem } from './PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem';
import { PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItemSchema } from './PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem';
/**
 * selection_params
 */
export interface PostTerminalReadersReaderCollectInputsRequestInputsItemSelection {
  choices: Array<PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItem>;
}

export const PostTerminalReadersReaderCollectInputsRequestInputsItemSelectionSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequestInputsItemSelection> = typed<PostTerminalReadersReaderCollectInputsRequestInputsItemSelection>(object({
  choices: array(PostTerminalReadersReaderCollectInputsRequestInputsItemChoicesItemSchema),
}));