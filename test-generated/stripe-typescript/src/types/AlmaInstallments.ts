import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * alma_installments
 *
 * 
 */
export interface AlmaInstallments {
  /**
   * The number of installments.
   */
  count: number;
}

export const AlmaInstallmentsSchema: TypedSchema<AlmaInstallments> = typed<AlmaInstallments>(object({
  count: number(),
}));