import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingAuthorizationFleetCardholderPromptData } from './IssuingAuthorizationFleetCardholderPromptData';
import { IssuingAuthorizationFleetCardholderPromptDataSchema } from './IssuingAuthorizationFleetCardholderPromptData';
import type { IssuingAuthorizationFleetReportedBreakdown } from './IssuingAuthorizationFleetReportedBreakdown';
import { IssuingAuthorizationFleetReportedBreakdownSchema } from './IssuingAuthorizationFleetReportedBreakdown';
/**
 * IssuingAuthorizationFleetData
 *
 * 
 */
export interface IssuingAuthorizationFleetData {
  /**
   * Answers to prompts presented to the cardholder at the point of sale. Prompted fields vary depending on the configuration of your physical fleet cards. Typical points of sale support only numeric entry.
   */
  cardholderPromptData?: IssuingAuthorizationFleetCardholderPromptData;
  /**
   * The type of purchase.
   */
  purchaseType?: string;
  /**
   * More information about the total amount. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
   */
  reportedBreakdown?: IssuingAuthorizationFleetReportedBreakdown;
  /**
   * The type of fuel service.
   */
  serviceType?: string;
}

export const IssuingAuthorizationFleetDataSchema: TypedSchema<IssuingAuthorizationFleetData> = typed<IssuingAuthorizationFleetData>(object({
  get cardholderPromptData() { return optional(IssuingAuthorizationFleetCardholderPromptDataSchema) },
  purchaseType: optional(string()),
  get reportedBreakdown() { return optional(IssuingAuthorizationFleetReportedBreakdownSchema) },
  serviceType: optional(string()),
}));