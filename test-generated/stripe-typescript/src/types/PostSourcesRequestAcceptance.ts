import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostSourcesRequestOffline } from './PostSourcesRequestOffline';
import { PostSourcesRequestOfflineSchema } from './PostSourcesRequestOffline';
import type { PostSourcesRequestOnline } from './PostSourcesRequestOnline';
import { PostSourcesRequestOnlineSchema } from './PostSourcesRequestOnline';
/**
 * mandate_acceptance_params
 */
export interface PostSourcesRequestAcceptance {
  date?: number;
  ip?: string;
  /**
   * mandate_offline_acceptance_params
   */
  offline?: PostSourcesRequestOffline;
  /**
   * mandate_online_acceptance_params
   */
  online?: PostSourcesRequestOnline;
  status: string;
  type?: string;
  userAgent?: string;
}

export const PostSourcesRequestAcceptanceSchema: TypedSchema<PostSourcesRequestAcceptance> = typed<PostSourcesRequestAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  get offline() { return optional(PostSourcesRequestOfflineSchema) },
  get online() { return optional(PostSourcesRequestOnlineSchema) },
  status: string(),
  type: optional(string()),
  userAgent: optional(string()),
}));