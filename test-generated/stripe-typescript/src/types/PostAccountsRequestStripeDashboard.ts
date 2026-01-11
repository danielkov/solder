import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * controller_dashboard_specs
 */
export interface PostAccountsRequestStripeDashboard {
  type?: string;
}

export const PostAccountsRequestStripeDashboardSchema: TypedSchema<PostAccountsRequestStripeDashboard> = typed<PostAccountsRequestStripeDashboard>(object({
  type: optional(string()),
}));