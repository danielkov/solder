import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingTransactionFleetCardholderPromptData } from './IssuingTransactionFleetCardholderPromptData';
import { IssuingTransactionFleetCardholderPromptDataSchema } from './IssuingTransactionFleetCardholderPromptData';
import type { IssuingTransactionFleetReportedBreakdown } from './IssuingTransactionFleetReportedBreakdown';
import { IssuingTransactionFleetReportedBreakdownSchema } from './IssuingTransactionFleetReportedBreakdown';
/**
 * IssuingTransactionFleetData
 *
 * 
 */
export interface IssuingTransactionFleetData {
  /**
   * Answers to prompts presented to cardholder at point of sale.
   */
  cardholderPromptData?: IssuingTransactionFleetCardholderPromptData;
  /**
   * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
   */
  purchaseType?: string;
  /**
   * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
   */
  reportedBreakdown?: IssuingTransactionFleetReportedBreakdown;
  /**
   * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
   */
  serviceType?: string;
}

export const IssuingTransactionFleetDataSchema: TypedSchema<IssuingTransactionFleetData> = typed<IssuingTransactionFleetData>(object({
  get cardholderPromptData() { return optional(IssuingTransactionFleetCardholderPromptDataSchema) },
  purchaseType: optional(string()),
  get reportedBreakdown() { return optional(IssuingTransactionFleetReportedBreakdownSchema) },
  serviceType: optional(string()),
}));