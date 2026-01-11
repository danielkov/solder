import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBusiness } from './PostCheckoutSessionsRequestBusiness';
import { PostCheckoutSessionsRequestBusinessSchema } from './PostCheckoutSessionsRequestBusiness';
import type { PostCheckoutSessionsRequestIndividual } from './PostCheckoutSessionsRequestIndividual';
import { PostCheckoutSessionsRequestIndividualSchema } from './PostCheckoutSessionsRequestIndividual';
/**
 * name_collection_params
 *
 * Controls name collection settings for the session.

You can configure Checkout to collect your customers' business names, individual names, or both. Each name field can be either required or optional.

If a [Customer](https://stripe.com/docs/api/customers) is created or provided, the names can be saved to the Customer object as well.
 */
export interface PostCheckoutSessionsRequestNameCollection {
  /**
   * name_collection_business_params
   */
  business?: PostCheckoutSessionsRequestBusiness;
  /**
   * name_collection_individual_params
   */
  individual?: PostCheckoutSessionsRequestIndividual;
}

export const PostCheckoutSessionsRequestNameCollectionSchema: TypedSchema<PostCheckoutSessionsRequestNameCollection> = typed<PostCheckoutSessionsRequestNameCollection>(object({
  get business() { return optional(PostCheckoutSessionsRequestBusinessSchema) },
  get individual() { return optional(PostCheckoutSessionsRequestIndividualSchema) },
}));