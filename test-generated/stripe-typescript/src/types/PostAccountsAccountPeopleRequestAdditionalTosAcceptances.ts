import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestTosAcceptance } from './PostAccountsRequestTosAcceptance';
import { PostAccountsRequestTosAcceptanceSchema } from './PostAccountsRequestTosAcceptance';
/**
 * person_additional_tos_acceptances_specs
 *
 * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
 */
export interface PostAccountsAccountPeopleRequestAdditionalTosAcceptances {
  /**
   * settings_terms_of_service_specs
   */
  account?: PostAccountsRequestTosAcceptance;
}

export const PostAccountsAccountPeopleRequestAdditionalTosAcceptancesSchema: TypedSchema<PostAccountsAccountPeopleRequestAdditionalTosAcceptances> = typed<PostAccountsAccountPeopleRequestAdditionalTosAcceptances>(object({
  get account() { return optional(PostAccountsRequestTosAcceptanceSchema) },
}));