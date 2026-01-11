import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted } from './TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted';
import { TaxProductResourceTaxAssociationTransactionAttemptsResourceCommittedSchema } from './TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted';
import type { TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored } from './TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored';
import { TaxProductResourceTaxAssociationTransactionAttemptsResourceErroredSchema } from './TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored';
/**
 * TaxProductResourceTaxAssociationTransactionAttempts
 *
 * 
 */
export interface TaxProductResourceTaxAssociationTransactionAttempts {
  /**
   * TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted
   *
   * 
   */
  committed?: TaxProductResourceTaxAssociationTransactionAttemptsResourceCommitted;
  /**
   * TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored
   *
   * 
   */
  errored?: TaxProductResourceTaxAssociationTransactionAttemptsResourceErrored;
  /**
   * The source of the tax transaction attempt. This is either a refund or a payment intent.
   */
  source: string;
  /**
   * The status of the transaction attempt. This can be `errored` or `committed`.
   */
  status: string;
}

export const TaxProductResourceTaxAssociationTransactionAttemptsSchema: TypedSchema<TaxProductResourceTaxAssociationTransactionAttempts> = typed<TaxProductResourceTaxAssociationTransactionAttempts>(object({
  get committed() { return optional(TaxProductResourceTaxAssociationTransactionAttemptsResourceCommittedSchema) },
  get errored() { return optional(TaxProductResourceTaxAssociationTransactionAttemptsResourceErroredSchema) },
  source: string(),
  status: string(),
}));