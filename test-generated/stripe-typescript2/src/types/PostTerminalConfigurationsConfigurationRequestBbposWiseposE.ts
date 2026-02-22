import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject } from './PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject';
import { PostTerminalConfigurationsConfigurationRequestBbposWiseposEObjectSchema } from './PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject';
/**
 * An object containing device type specific settings for BBPOS WisePOS E readers.
 */
export type PostTerminalConfigurationsConfigurationRequestBbposWiseposE = PostTerminalConfigurationsConfigurationRequestBbposWiseposEObject | string;

export const PostTerminalConfigurationsConfigurationRequestBbposWiseposESchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestBbposWiseposE> = typed<PostTerminalConfigurationsConfigurationRequestBbposWiseposE>(union(PostTerminalConfigurationsConfigurationRequestBbposWiseposEObjectSchema, string()));
