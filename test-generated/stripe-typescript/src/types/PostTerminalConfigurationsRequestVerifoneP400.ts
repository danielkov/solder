import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * verifone_p400
 *
 * An object containing device type specific settings for Verifone P400 readers.
 */
export interface PostTerminalConfigurationsRequestVerifoneP400 {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsRequestVerifoneP400Schema: TypedSchema<PostTerminalConfigurationsRequestVerifoneP400> = typed<PostTerminalConfigurationsRequestVerifoneP400>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));