import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestTippingObject } from './PostTerminalConfigurationsRequestTippingObject';
import { PostTerminalConfigurationsRequestTippingObjectSchema } from './PostTerminalConfigurationsRequestTippingObject';
export type PostTerminalConfigurationsRequestTipping = PostTerminalConfigurationsRequestTippingObject | string;

export const PostTerminalConfigurationsRequestTippingSchema: TypedSchema<PostTerminalConfigurationsRequestTipping> = typed<PostTerminalConfigurationsRequestTipping>(union(PostTerminalConfigurationsRequestTippingObjectSchema, string()));