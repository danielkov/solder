import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestTosAcceptance } from './PostAccountsRequestTosAcceptance';
import { PostAccountsRequestTosAcceptanceSchema } from './PostAccountsRequestTosAcceptance';
/**
 * person_additional_tos_acceptances_specs
 */
export interface PostTokensRequestAdditionalTosAcceptances {
  /**
   * settings_terms_of_service_specs
   */
  account?: PostAccountsRequestTosAcceptance;
}

export const PostTokensRequestAdditionalTosAcceptancesSchema: TypedSchema<PostTokensRequestAdditionalTosAcceptances> = typed<PostTokensRequestAdditionalTosAcceptances>(object({
  get account() { return optional(PostAccountsRequestTosAcceptanceSchema) },
}));