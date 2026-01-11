import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * EphemeralKey
 *
 * 
 */
export interface EphemeralKey {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Time at which the key will expire. Measured in seconds since the Unix epoch.
   */
  expires: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The key's secret. You can use this value to make authorized requests to the Stripe API.
   */
  secret?: string;
}

export const EphemeralKeySchema: TypedSchema<EphemeralKey> = typed<EphemeralKey>(object({
  created: number(),
  expires: number(),
  id: string(),
  livemode: boolean(),
  object: string(),
  secret: optional(string()),
}));