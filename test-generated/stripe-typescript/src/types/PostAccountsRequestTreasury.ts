import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestTosAcceptance } from './PostAccountsRequestTosAcceptance';
import { PostAccountsRequestTosAcceptanceSchema } from './PostAccountsRequestTosAcceptance';
/**
 * treasury_settings_specs
 */
export interface PostAccountsRequestTreasury {
  /**
   * settings_terms_of_service_specs
   */
  tosAcceptance?: PostAccountsRequestTosAcceptance;
}

export const PostAccountsRequestTreasurySchema: TypedSchema<PostAccountsRequestTreasury> = typed<PostAccountsRequestTreasury>(object({
  get tosAcceptance() { return optional(PostAccountsRequestTosAcceptanceSchema) },
}));