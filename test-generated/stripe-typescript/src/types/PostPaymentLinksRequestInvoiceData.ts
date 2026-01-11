import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostCheckoutSessionsRequestCustomFields } from './PostCheckoutSessionsRequestCustomFields';
import { PostCheckoutSessionsRequestCustomFieldsSchema } from './PostCheckoutSessionsRequestCustomFields';
import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
import type { PostCheckoutSessionsRequestRenderingOptions } from './PostCheckoutSessionsRequestRenderingOptions';
import { PostCheckoutSessionsRequestRenderingOptionsSchema } from './PostCheckoutSessionsRequestRenderingOptions';
/**
 * invoice_settings_params
 */
export interface PostPaymentLinksRequestInvoiceData {
  accountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  customFields?: PostCheckoutSessionsRequestCustomFields;
  description?: string;
  footer?: string;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
  metadata?: PostAccountsRequestMetadata;
  renderingOptions?: PostCheckoutSessionsRequestRenderingOptions;
}

export const PostPaymentLinksRequestInvoiceDataSchema: TypedSchema<PostPaymentLinksRequestInvoiceData> = typed<PostPaymentLinksRequestInvoiceData>(object({
  get accountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  get customFields() { return optional(PostCheckoutSessionsRequestCustomFieldsSchema) },
  description: optional(string()),
  footer: optional(string()),
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  get renderingOptions() { return optional(PostCheckoutSessionsRequestRenderingOptionsSchema) },
}));