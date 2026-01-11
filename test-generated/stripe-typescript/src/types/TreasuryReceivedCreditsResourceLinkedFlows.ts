import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryReceivedCreditsResourceSourceFlowsDetails } from './TreasuryReceivedCreditsResourceSourceFlowsDetails';
import { TreasuryReceivedCreditsResourceSourceFlowsDetailsSchema } from './TreasuryReceivedCreditsResourceSourceFlowsDetails';
/**
 * TreasuryReceivedCreditsResourceLinkedFlows
 *
 * 
 */
export interface TreasuryReceivedCreditsResourceLinkedFlows {
  /**
   * The CreditReversal created as a result of this ReceivedCredit being reversed.
   */
  creditReversal?: string;
  /**
   * Set if the ReceivedCredit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
   */
  issuingAuthorization?: string;
  /**
   * Set if the ReceivedCredit is also viewable as an [Issuing transaction](https://stripe.com/docs/api#issuing_transactions) object.
   */
  issuingTransaction?: string;
  /**
   * ID of the source flow. Set if `network` is `stripe` and the source flow is visible to the user. Examples of source flows include OutboundPayments, payouts, or CreditReversals.
   */
  sourceFlow?: string;
  /**
   * The expandable object of the source flow.
   */
  sourceFlowDetails?: TreasuryReceivedCreditsResourceSourceFlowsDetails;
  /**
   * The type of flow that originated the ReceivedCredit (for example, `outbound_payment`).
   */
  sourceFlowType?: string;
}

export const TreasuryReceivedCreditsResourceLinkedFlowsSchema: TypedSchema<TreasuryReceivedCreditsResourceLinkedFlows> = typed<TreasuryReceivedCreditsResourceLinkedFlows>(object({
  creditReversal: optional(string()),
  issuingAuthorization: optional(string()),
  issuingTransaction: optional(string()),
  sourceFlow: optional(string()),
  get sourceFlowDetails() { return optional(TreasuryReceivedCreditsResourceSourceFlowsDetailsSchema) },
  sourceFlowType: optional(string()),
}));