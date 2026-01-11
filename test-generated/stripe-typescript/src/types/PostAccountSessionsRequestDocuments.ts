import { TypedSchema, boolean, object, optional, typed, unknown } from '@speakeasy-api/tonic';
/**
 * base_config_param
 */
export interface PostAccountSessionsRequestDocuments {
  enabled: boolean;
  /**
   * base_features_param
   */
  features?: any;
}

export const PostAccountSessionsRequestDocumentsSchema: TypedSchema<PostAccountSessionsRequestDocuments> = typed<PostAccountSessionsRequestDocuments>(object({
  enabled: boolean(),
  features: optional(unknown()),
}));