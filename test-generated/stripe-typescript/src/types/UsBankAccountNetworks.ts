import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * us_bank_account_networks
 *
 * 
 */
export interface UsBankAccountNetworks {
  /**
   * The preferred network.
   */
  preferred?: string;
  /**
   * All supported networks.
   */
  supported: Array<string>;
}

export const UsBankAccountNetworksSchema: TypedSchema<UsBankAccountNetworks> = typed<UsBankAccountNetworks>(object({
  preferred: optional(string()),
  supported: array(string()),
}));