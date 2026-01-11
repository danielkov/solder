import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * bbpos_wise_pad3
 *
 * An object containing device type specific settings for BBPOS WisePad 3 readers.
 */
export interface PostTerminalConfigurationsRequestBbposWisepad3 {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsRequestBbposWisepad3Schema: TypedSchema<PostTerminalConfigurationsRequestBbposWisepad3> = typed<PostTerminalConfigurationsRequestBbposWisepad3>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));