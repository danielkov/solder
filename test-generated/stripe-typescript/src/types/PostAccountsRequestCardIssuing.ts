import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestTosAcceptance } from './PostAccountsRequestTosAcceptance';
import { PostAccountsRequestTosAcceptanceSchema } from './PostAccountsRequestTosAcceptance';
/**
 * card_issuing_settings_specs
 */
export interface PostAccountsRequestCardIssuing {
  /**
   * settings_terms_of_service_specs
   */
  tosAcceptance?: PostAccountsRequestTosAcceptance;
}

export const PostAccountsRequestCardIssuingSchema: TypedSchema<PostAccountsRequestCardIssuing> = typed<PostAccountsRequestCardIssuing>(object({
  get tosAcceptance() { return optional(PostAccountsRequestTosAcceptanceSchema) },
}));