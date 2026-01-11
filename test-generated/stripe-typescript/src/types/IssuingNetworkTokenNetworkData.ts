import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingNetworkTokenDevice } from './IssuingNetworkTokenDevice';
import { IssuingNetworkTokenDeviceSchema } from './IssuingNetworkTokenDevice';
import type { IssuingNetworkTokenMastercard } from './IssuingNetworkTokenMastercard';
import { IssuingNetworkTokenMastercardSchema } from './IssuingNetworkTokenMastercard';
import type { IssuingNetworkTokenVisa } from './IssuingNetworkTokenVisa';
import { IssuingNetworkTokenVisaSchema } from './IssuingNetworkTokenVisa';
import type { IssuingNetworkTokenWalletProvider } from './IssuingNetworkTokenWalletProvider';
import { IssuingNetworkTokenWalletProviderSchema } from './IssuingNetworkTokenWalletProvider';
/**
 * IssuingNetworkTokenNetworkData
 *
 * 
 */
export interface IssuingNetworkTokenNetworkData {
  /**
   * IssuingNetworkTokenDevice
   *
   * 
   */
  device?: IssuingNetworkTokenDevice;
  /**
   * IssuingNetworkTokenMastercard
   *
   * 
   */
  mastercard?: IssuingNetworkTokenMastercard;
  /**
   * The network that the token is associated with. An additional hash is included with a name matching this value, containing tokenization data specific to the card network.
   */
  type: string;
  /**
   * IssuingNetworkTokenVisa
   *
   * 
   */
  visa?: IssuingNetworkTokenVisa;
  /**
   * IssuingNetworkTokenWalletProvider
   *
   * 
   */
  walletProvider?: IssuingNetworkTokenWalletProvider;
}

export const IssuingNetworkTokenNetworkDataSchema: TypedSchema<IssuingNetworkTokenNetworkData> = typed<IssuingNetworkTokenNetworkData>(object({
  get device() { return optional(IssuingNetworkTokenDeviceSchema) },
  get mastercard() { return optional(IssuingNetworkTokenMastercardSchema) },
  type: string(),
  get visa() { return optional(IssuingNetworkTokenVisaSchema) },
  get walletProvider() { return optional(IssuingNetworkTokenWalletProviderSchema) },
}));