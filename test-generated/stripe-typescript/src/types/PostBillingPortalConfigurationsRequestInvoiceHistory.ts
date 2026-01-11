import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * invoice_list_param
 */
export interface PostBillingPortalConfigurationsRequestInvoiceHistory {
  enabled: boolean;
}

export const PostBillingPortalConfigurationsRequestInvoiceHistorySchema: TypedSchema<PostBillingPortalConfigurationsRequestInvoiceHistory> = typed<PostBillingPortalConfigurationsRequestInvoiceHistory>(object({
  enabled: boolean(),
}));