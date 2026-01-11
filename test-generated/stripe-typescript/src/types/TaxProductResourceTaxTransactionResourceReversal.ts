import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxTransactionResourceReversal
 *
 * 
 */
export interface TaxProductResourceTaxTransactionResourceReversal {
  /**
   * The `id` of the reversed `Transaction` object.
   */
  originalTransaction?: string;
}

export const TaxProductResourceTaxTransactionResourceReversalSchema: TypedSchema<TaxProductResourceTaxTransactionResourceReversal> = typed<TaxProductResourceTaxTransactionResourceReversal>(object({
  originalTransaction: optional(string()),
}));