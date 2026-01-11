import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingBillResourceInvoicingTaxesTaxRateDetails
 *
 * 
 */
export interface BillingBillResourceInvoicingTaxesTaxRateDetails {
  taxRate: string;
}

export const BillingBillResourceInvoicingTaxesTaxRateDetailsSchema: TypedSchema<BillingBillResourceInvoicingTaxesTaxRateDetails> = typed<BillingBillResourceInvoicingTaxesTaxRateDetails>(object({
  taxRate: string(),
}));