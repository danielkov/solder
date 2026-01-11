import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_payment_method_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestBancontactObject {
  preferredLanguage?: string;
}

export const PostCustomersCustomerSubscriptionsRequestBancontactObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestBancontactObject> = typed<PostCustomersCustomerSubscriptionsRequestBancontactObject>(object({
  preferredLanguage: optional(string()),
}));