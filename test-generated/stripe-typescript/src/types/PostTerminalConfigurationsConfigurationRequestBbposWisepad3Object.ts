import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * bbpos_wise_pad3
 */
export interface PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsConfigurationRequestBbposWisepad3ObjectSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object> = typed<PostTerminalConfigurationsConfigurationRequestBbposWisepad3Object>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));