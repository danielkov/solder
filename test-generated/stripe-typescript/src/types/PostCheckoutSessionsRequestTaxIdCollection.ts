import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * tax_id_collection_params
 *
 * Controls tax ID collection during checkout.
 */
export interface PostCheckoutSessionsRequestTaxIdCollection {
  enabled: boolean;
  required?: string;
}

export const PostCheckoutSessionsRequestTaxIdCollectionSchema: TypedSchema<PostCheckoutSessionsRequestTaxIdCollection> = typed<PostCheckoutSessionsRequestTaxIdCollection>(object({
  enabled: boolean(),
  required: optional(string()),
}));