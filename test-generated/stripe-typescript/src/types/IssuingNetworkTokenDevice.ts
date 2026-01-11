import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingNetworkTokenDevice
 *
 * 
 */
export interface IssuingNetworkTokenDevice {
  /**
   * An obfuscated ID derived from the device ID.
   */
  deviceFingerprint?: string;
  /**
   * The IP address of the device at provisioning time.
   */
  ipAddress?: string;
  /**
   * The geographic latitude/longitude coordinates of the device at provisioning time. The format is [+-]decimal/[+-]decimal.
   */
  location?: string;
  /**
   * The name of the device used for tokenization.
   */
  name?: string;
  /**
   * The phone number of the device used for tokenization.
   */
  phoneNumber?: string;
  /**
   * The type of device used for tokenization.
   */
  type?: string;
}

export const IssuingNetworkTokenDeviceSchema: TypedSchema<IssuingNetworkTokenDevice> = typed<IssuingNetworkTokenDevice>(object({
  deviceFingerprint: optional(string()),
  ipAddress: optional(string()),
  location: optional(string()),
  name: optional(string()),
  phoneNumber: optional(string()),
  type: optional(string()),
}));