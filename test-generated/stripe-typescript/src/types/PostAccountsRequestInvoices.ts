import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoices_settings_specs_create
 */
export interface PostAccountsRequestInvoices {
  hostedPaymentMethodSave?: string;
}

export const PostAccountsRequestInvoicesSchema: TypedSchema<PostAccountsRequestInvoices> = typed<PostAccountsRequestInvoices>(object({
  hostedPaymentMethodSave: optional(string()),
}));