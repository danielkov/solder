import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceReceiverFlow
 *
 * 
 */
export interface SourceReceiverFlow {
  /**
   * The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
   */
  address?: string;
  /**
   * The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency.
   */
  amountCharged: number;
  /**
   * The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency.
   */
  amountReceived: number;
  /**
   * The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
   */
  amountReturned: number;
  /**
   * Type of refund attribute method, one of `email`, `manual`, or `none`.
   */
  refundAttributesMethod: string;
  /**
   * Type of refund attribute status, one of `missing`, `requested`, or `available`.
   */
  refundAttributesStatus: string;
}

export const SourceReceiverFlowSchema: TypedSchema<SourceReceiverFlow> = typed<SourceReceiverFlow>(object({
  address: optional(string()),
  amountCharged: number(),
  amountReceived: number(),
  amountReturned: number(),
  refundAttributesMethod: string(),
  refundAttributesStatus: string(),
}));