import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBusiness } from './PostCheckoutSessionsRequestBusiness';
import { PostCheckoutSessionsRequestBusinessSchema } from './PostCheckoutSessionsRequestBusiness';
import type { PostCheckoutSessionsRequestIndividual } from './PostCheckoutSessionsRequestIndividual';
import { PostCheckoutSessionsRequestIndividualSchema } from './PostCheckoutSessionsRequestIndividual';
/**
 * name_collection_params
 */
export interface PostPaymentLinksPaymentLinkRequestNameCollectionObject {
  /**
   * name_collection_business_params
   */
  business?: PostCheckoutSessionsRequestBusiness;
  /**
   * name_collection_individual_params
   */
  individual?: PostCheckoutSessionsRequestIndividual;
}

export const PostPaymentLinksPaymentLinkRequestNameCollectionObjectSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestNameCollectionObject> = typed<PostPaymentLinksPaymentLinkRequestNameCollectionObject>(object({
  get business() { return optional(PostCheckoutSessionsRequestBusinessSchema) },
  get individual() { return optional(PostCheckoutSessionsRequestIndividualSchema) },
}));