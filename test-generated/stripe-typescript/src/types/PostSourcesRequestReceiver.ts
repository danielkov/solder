import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * receiver_params
 *
 * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
 */
export interface PostSourcesRequestReceiver {
  refundAttributesMethod?: string;
}

export const PostSourcesRequestReceiverSchema: TypedSchema<PostSourcesRequestReceiver> = typed<PostSourcesRequestReceiver>(object({
  refundAttributesMethod: optional(string()),
}));