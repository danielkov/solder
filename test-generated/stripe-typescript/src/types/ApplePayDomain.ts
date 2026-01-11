import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ApplePayDomain
 *
 * 
 */
export interface ApplePayDomain {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  domainName: string;
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
}

export const ApplePayDomainSchema: TypedSchema<ApplePayDomain> = typed<ApplePayDomain>(object({
  created: number(),
  domainName: string(),
  id: string(),
  livemode: boolean(),
  object: string(),
}));