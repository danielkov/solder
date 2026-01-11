import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTerminalReadersReaderCollectInputsRequestInputsItem } from './PostTerminalReadersReaderCollectInputsRequestInputsItem';
import { PostTerminalReadersReaderCollectInputsRequestInputsItemSchema } from './PostTerminalReadersReaderCollectInputsRequestInputsItem';
export interface PostTerminalReadersReaderCollectInputsRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * List of inputs to be collected from the customer using the Reader. Maximum 5 inputs.
   */
  inputs: Array<PostTerminalReadersReaderCollectInputsRequestInputsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
}

export const PostTerminalReadersReaderCollectInputsRequestSchema: TypedSchema<PostTerminalReadersReaderCollectInputsRequest> = typed<PostTerminalReadersReaderCollectInputsRequest>(object({
  expand: optional(array(string())),
  inputs: array(PostTerminalReadersReaderCollectInputsRequestInputsItemSchema),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
}));