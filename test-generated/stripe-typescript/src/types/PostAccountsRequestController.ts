import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestFees } from './PostAccountsRequestFees';
import { PostAccountsRequestFeesSchema } from './PostAccountsRequestFees';
import type { PostAccountsRequestLosses } from './PostAccountsRequestLosses';
import { PostAccountsRequestLossesSchema } from './PostAccountsRequestLosses';
import type { PostAccountsRequestStripeDashboard } from './PostAccountsRequestStripeDashboard';
import { PostAccountsRequestStripeDashboardSchema } from './PostAccountsRequestStripeDashboard';
/**
 * controller_specs
 *
 * A hash of configuration describing the account controller's attributes.
 */
export interface PostAccountsRequestController {
  /**
   * controller_fees_specs
   */
  fees?: PostAccountsRequestFees;
  /**
   * controller_losses_specs
   */
  losses?: PostAccountsRequestLosses;
  requirementCollection?: string;
  /**
   * controller_dashboard_specs
   */
  stripeDashboard?: PostAccountsRequestStripeDashboard;
}

export const PostAccountsRequestControllerSchema: TypedSchema<PostAccountsRequestController> = typed<PostAccountsRequestController>(object({
  get fees() { return optional(PostAccountsRequestFeesSchema) },
  get losses() { return optional(PostAccountsRequestLossesSchema) },
  requirementCollection: optional(string()),
  get stripeDashboard() { return optional(PostAccountsRequestStripeDashboardSchema) },
}));