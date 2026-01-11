import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFleetCardholderPromptData
 *
 * 
 */
export interface IssuingAuthorizationFleetCardholderPromptData {
  /**
   * [Deprecated] An alphanumeric ID, though typical point of sales only support numeric entry. The card program can be configured to prompt for a vehicle ID, driver ID, or generic ID.
   */
  alphanumericId?: string;
  /**
   * Driver ID.
   */
  driverId?: string;
  /**
   * Odometer reading.
   */
  odometer?: number;
  /**
   * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
   */
  unspecifiedId?: string;
  /**
   * User ID.
   */
  userId?: string;
  /**
   * Vehicle number.
   */
  vehicleNumber?: string;
}

export const IssuingAuthorizationFleetCardholderPromptDataSchema: TypedSchema<IssuingAuthorizationFleetCardholderPromptData> = typed<IssuingAuthorizationFleetCardholderPromptData>(object({
  alphanumericId: optional(string()),
  driverId: optional(string()),
  odometer: optional(number()),
  unspecifiedId: optional(string()),
  userId: optional(string()),
  vehicleNumber: optional(string()),
}));