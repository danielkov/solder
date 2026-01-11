import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomerSessionsRequestComponents } from './PostCustomerSessionsRequestComponents';
import { PostCustomerSessionsRequestComponentsSchema } from './PostCustomerSessionsRequestComponents';
export interface PostCustomerSessionsRequest {
  /**
   * components
   *
   * Configuration for each component. At least 1 component must be enabled.
   */
  components: PostCustomerSessionsRequestComponents;
  /**
   * The ID of an existing customer for which to create the Customer Session.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostCustomerSessionsRequestSchema: TypedSchema<PostCustomerSessionsRequest> = typed<PostCustomerSessionsRequest>(object({
  components: PostCustomerSessionsRequestComponentsSchema,
  customer: string(),
  expand: optional(array(string())),
}));