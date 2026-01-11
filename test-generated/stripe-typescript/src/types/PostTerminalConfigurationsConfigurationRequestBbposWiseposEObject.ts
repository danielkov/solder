import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * bbpos_wise_pose
 */
export interface PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject {
  splashscreen?: PostAccountsRequestSupportUrl;
}

export const PostTerminalConfigurationsConfigurationRequestBbposWiseposEObjectSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject> = typed<PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject>(object({
  get splashscreen() { return optional(PostAccountsRequestSupportUrlSchema) },
}));