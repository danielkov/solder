import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * An optional description of what the webhook is used for.
 */
export type PostWebhookEndpointsRequestDescription = string | string;

export const PostWebhookEndpointsRequestDescriptionSchema: TypedSchema<PostWebhookEndpointsRequestDescription> = typed<PostWebhookEndpointsRequestDescription>(union(string(), string()));
