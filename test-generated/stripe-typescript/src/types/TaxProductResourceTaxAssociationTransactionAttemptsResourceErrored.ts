import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored
 *
 * 
 */
export interface TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored {
  /**
   * Details on why we couldn't commit the tax transaction.
   */
  reason: string;
}

export const TaxProductResourceTaxAssociationTransactionAttemptsResourceErroredSchema: TypedSchema<TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored> = typed<TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored>(object({
  reason: string(),
}));