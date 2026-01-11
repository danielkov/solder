import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * balance_settings_param
 *
 * A hash of settings for this cash balance.
 */
export interface PostCustomersCustomerCashBalanceRequestSettings {
  reconciliationMode?: string;
}

export const PostCustomersCustomerCashBalanceRequestSettingsSchema: TypedSchema<PostCustomersCustomerCashBalanceRequestSettings> = typed<PostCustomersCustomerCashBalanceRequestSettings>(object({
  reconciliationMode: optional(string()),
}));