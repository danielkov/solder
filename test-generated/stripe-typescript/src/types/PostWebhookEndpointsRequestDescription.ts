import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostWebhookEndpointsRequestDescription = string | string;

export const PostWebhookEndpointsRequestDescriptionSchema: TypedSchema<PostWebhookEndpointsRequestDescription> = typed<PostWebhookEndpointsRequestDescription>(union(string(), string()));