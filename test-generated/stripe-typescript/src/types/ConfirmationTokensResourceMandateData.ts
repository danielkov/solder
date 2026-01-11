import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ConfirmationTokensResourceMandateDataResourceCustomerAcceptance } from './ConfirmationTokensResourceMandateDataResourceCustomerAcceptance';
import { ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceSchema } from './ConfirmationTokensResourceMandateDataResourceCustomerAcceptance';
/**
 * ConfirmationTokensResourceMandateData
 *
 * Data used for generating a Mandate.
 */
export interface ConfirmationTokensResourceMandateData {
  /**
   * ConfirmationTokensResourceMandateDataResourceCustomerAcceptance
   *
   * This hash contains details about the customer acceptance of the Mandate.
   */
  customerAcceptance: ConfirmationTokensResourceMandateDataResourceCustomerAcceptance;
}

export const ConfirmationTokensResourceMandateDataSchema: TypedSchema<ConfirmationTokensResourceMandateData> = typed<ConfirmationTokensResourceMandateData>(object({
  customerAcceptance: ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceSchema,
}));