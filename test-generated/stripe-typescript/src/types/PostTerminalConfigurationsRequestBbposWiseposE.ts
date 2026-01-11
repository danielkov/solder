import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * bbpos_wise_pose
 *
 * An object containing device type specific settings for BBPOS WisePOS E readers.
 */
export interface PostTerminalConfigurationsRequestBbposWiseposE {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsRequestBbposWiseposESchema: TypedSchema<PostTerminalConfigurationsRequestBbposWiseposE> = typed<PostTerminalConfigurationsRequestBbposWiseposE>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));