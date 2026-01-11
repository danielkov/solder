import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBusiness } from './PostCheckoutSessionsRequestBusiness';
import { PostCheckoutSessionsRequestBusinessSchema } from './PostCheckoutSessionsRequestBusiness';
import type { PostCheckoutSessionsRequestIndividual } from './PostCheckoutSessionsRequestIndividual';
import { PostCheckoutSessionsRequestIndividualSchema } from './PostCheckoutSessionsRequestIndividual';
/**
 * name_collection_params
 *
 * Controls settings applied for collecting the customer's name.
 */
export interface PostPaymentLinksRequestNameCollection {
  /**
   * name_collection_business_params
   */
  business?: PostCheckoutSessionsRequestBusiness;
  /**
   * name_collection_individual_params
   */
  individual?: PostCheckoutSessionsRequestIndividual;
}

export const PostPaymentLinksRequestNameCollectionSchema: TypedSchema<PostPaymentLinksRequestNameCollection> = typed<PostPaymentLinksRequestNameCollection>(object({
  get business() { return optional(PostCheckoutSessionsRequestBusinessSchema) },
  get individual() { return optional(PostCheckoutSessionsRequestIndividualSchema) },
}));