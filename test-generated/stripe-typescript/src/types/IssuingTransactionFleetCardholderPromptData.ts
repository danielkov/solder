import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFleetCardholderPromptData
 *
 * 
 */
export interface IssuingTransactionFleetCardholderPromptData {
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

export const IssuingTransactionFleetCardholderPromptDataSchema: TypedSchema<IssuingTransactionFleetCardholderPromptData> = typed<IssuingTransactionFleetCardholderPromptData>(object({
  driverId: optional(string()),
  odometer: optional(number()),
  unspecifiedId: optional(string()),
  userId: optional(string()),
  vehicleNumber: optional(string()),
}));