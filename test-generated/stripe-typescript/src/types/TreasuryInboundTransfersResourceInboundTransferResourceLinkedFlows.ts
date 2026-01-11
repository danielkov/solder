import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows
 *
 * 
 */
export interface TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows {
  /**
   * If funds for this flow were returned after the flow went to the `succeeded` state, this field contains a reference to the ReceivedDebit return.
   */
  receivedDebit?: string;
}

export const TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlowsSchema: TypedSchema<TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows> = typed<TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows>(object({
  receivedDebit: optional(string()),
}));