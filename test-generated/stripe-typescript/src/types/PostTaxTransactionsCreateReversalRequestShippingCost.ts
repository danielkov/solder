import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * transaction_shipping_cost_reversal
 *
 * The shipping cost to reverse.
 */
export interface PostTaxTransactionsCreateReversalRequestShippingCost {
  amount: number;
  amountTax: number;
}

export const PostTaxTransactionsCreateReversalRequestShippingCostSchema: TypedSchema<PostTaxTransactionsCreateReversalRequestShippingCost> = typed<PostTaxTransactionsCreateReversalRequestShippingCost>(object({
  amount: number(),
  amountTax: number(),
}));