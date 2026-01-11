import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFields } from './PostCheckoutSessionsRequestCustomFields';
import { PostCheckoutSessionsRequestCustomFieldsSchema } from './PostCheckoutSessionsRequestCustomFields';
import type { PostCustomersRequestRenderingOptions } from './PostCustomersRequestRenderingOptions';
import { PostCustomersRequestRenderingOptionsSchema } from './PostCustomersRequestRenderingOptions';
/**
 * customer_param
 *
 * Default invoice settings for this customer.
 */
export interface PostCustomersRequestInvoiceSettings {
  customFields?: PostCheckoutSessionsRequestCustomFields;
  defaultPaymentMethod?: string;
  footer?: string;
  renderingOptions?: PostCustomersRequestRenderingOptions;
}

export const PostCustomersRequestInvoiceSettingsSchema: TypedSchema<PostCustomersRequestInvoiceSettings> = typed<PostCustomersRequestInvoiceSettings>(object({
  get customFields() { return optional(PostCheckoutSessionsRequestCustomFieldsSchema) },
  defaultPaymentMethod: optional(string()),
  footer: optional(string()),
  get renderingOptions() { return optional(PostCustomersRequestRenderingOptionsSchema) },
}));