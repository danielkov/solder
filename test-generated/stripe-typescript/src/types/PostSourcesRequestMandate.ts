import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostSourcesRequestAcceptance } from './PostSourcesRequestAcceptance';
import { PostSourcesRequestAcceptanceSchema } from './PostSourcesRequestAcceptance';
/**
 * mandate_params
 *
 * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
 */
export interface PostSourcesRequestMandate {
  /**
   * mandate_acceptance_params
   */
  acceptance?: PostSourcesRequestAcceptance;
  amount?: PostBalanceSettingsRequestDelayDaysOverride;
  currency?: string;
  interval?: string;
  notificationMethod?: string;
}

export const PostSourcesRequestMandateSchema: TypedSchema<PostSourcesRequestMandate> = typed<PostSourcesRequestMandate>(object({
  get acceptance() { return optional(PostSourcesRequestAcceptanceSchema) },
  get amount() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
  currency: optional(string()),
  interval: optional(string()),
  notificationMethod: optional(string()),
}));