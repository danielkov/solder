import { TypedSchema, boolean, object, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerBalanceCustomerBalanceSettings
 *
 * 
 */
export interface CustomerBalanceCustomerBalanceSettings {
  /**
   * The configuration for how funds that land in the customer cash balance are reconciled.
   */
  reconciliationMode: string;
  /**
   * A flag to indicate if reconciliation mode returned is the user's default or is specific to this customer cash balance
   */
  usingMerchantDefault: boolean;
}

export const CustomerBalanceCustomerBalanceSettingsSchema: TypedSchema<CustomerBalanceCustomerBalanceSettings> = typed<CustomerBalanceCustomerBalanceSettings>(object({
  reconciliationMode: string(),
  usingMerchantDefault: boolean(),
}));