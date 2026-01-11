import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxTransactionLineItemResourceReversal
 *
 * 
 */
export interface TaxProductResourceTaxTransactionLineItemResourceReversal {
  /**
   * The `id` of the line item to reverse in the original transaction.
   */
  originalLineItem: string;
}

export const TaxProductResourceTaxTransactionLineItemResourceReversalSchema: TypedSchema<TaxProductResourceTaxTransactionLineItemResourceReversal> = typed<TaxProductResourceTaxTransactionLineItemResourceReversal>(object({
  originalLineItem: string(),
}));