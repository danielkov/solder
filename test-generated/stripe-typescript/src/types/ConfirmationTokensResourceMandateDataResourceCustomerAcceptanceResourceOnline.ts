import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline
 *
 * This hash contains details about the online acceptance.
 */
export interface ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline {
  /**
   * The IP address from which the Mandate was accepted by the customer.
   */
  ipAddress?: string;
  /**
   * The user agent of the browser from which the Mandate was accepted by the customer.
   */
  userAgent?: string;
}

export const ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnlineSchema: TypedSchema<ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline> = typed<ConfirmationTokensResourceMandateDataResourceCustomerAcceptanceResourceOnline>(object({
  ipAddress: optional(string()),
  userAgent: optional(string()),
}));