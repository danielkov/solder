import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted
 *
 * 
 */
export interface TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted {
  /**
   * The [Tax Transaction](https://stripe.com/docs/api/tax/transaction/object)
   */
  transaction: string;
}

export const TaxProductResourceTaxAssociationTransactionAttemptsResourceCommittedSchema: TypedSchema<TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted> = typed<TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted>(object({
  transaction: string(),
}));