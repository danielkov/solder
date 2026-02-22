import { number, object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * delivery_estimate_bound
 */
export interface PostCheckoutSessionsRequestShippingOptionsItemMaximum {
  unit: string;
  value: number;
}

export const PostCheckoutSessionsRequestShippingOptionsItemMaximumSchema: TypedSchema<PostCheckoutSessionsRequestShippingOptionsItemMaximum> = typed<PostCheckoutSessionsRequestShippingOptionsItemMaximum>(object({ unit: string(), value: number() }));
