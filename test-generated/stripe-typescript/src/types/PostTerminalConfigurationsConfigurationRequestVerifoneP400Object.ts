import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * verifone_p400
 */
export interface PostTerminalConfigurationsConfigurationRequestVerifoneP400Object {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsConfigurationRequestVerifoneP400ObjectSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestVerifoneP400Object> = typed<PostTerminalConfigurationsConfigurationRequestVerifoneP400Object>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));