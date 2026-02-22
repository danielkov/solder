import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAlma {
  captureMethod?: string;
}

export const PostCheckoutSessionsRequestAlmaSchema: TypedSchema<PostCheckoutSessionsRequestAlma> = typed<PostCheckoutSessionsRequestAlma>(object({ captureMethod: optional(string()) }));
