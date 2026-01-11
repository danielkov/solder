import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline } from './ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline';
import { ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnlineSchema } from './ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline';
/**
 * ConfirmationTokensResourceMandateDataResourceCustomerAcceptance
 *
 * This hash contains details about the customer acceptance of the Mandate.
 */
export interface ConfirmationTokensResourceMandateDataResourceCustomerAcceptance {
  /**
   * If this is a Mandate accepted online, this hash contains details about the online acceptance.
   */
  online?: ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline;
  /**
   * The type of customer acceptance information included with the Mandate.
   */
  type: string;
}

export const ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceSchema: TypedSchema<ConfirmationTokensResourceMandateDataResourceCustomerAcceptance> = typed<ConfirmationTokensResourceMandateDataResourceCustomerAcceptance>(object({
  get online() { return optional(ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnlineSchema) },
  type: string(),
}));