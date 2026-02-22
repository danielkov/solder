import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestTippingObject } from './PostTerminalConfigurationsRequestTippingObject';
import { PostTerminalConfigurationsRequestTippingObjectSchema } from './PostTerminalConfigurationsRequestTippingObject';
/**
 * Tipping configurations for readers. supporting on-reader tips
 */
export type PostTerminalConfigurationsRequestTipping = PostTerminalConfigurationsRequestTippingObject | string;

export const PostTerminalConfigurationsRequestTippingSchema: TypedSchema<PostTerminalConfigurationsRequestTipping> = typed<PostTerminalConfigurationsRequestTipping>(union(PostTerminalConfigurationsRequestTippingObjectSchema, string()));
