import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
 */
export interface InvoiceCreditBalanceProperty {
}

export const InvoiceCreditBalancePropertySchema: TypedSchema<InvoiceCreditBalanceProperty> = typed<InvoiceCreditBalanceProperty>(object({
}));