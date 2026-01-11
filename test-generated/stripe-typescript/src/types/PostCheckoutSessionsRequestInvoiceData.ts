import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestCustomFields } from './PostCheckoutSessionsRequestCustomFields';
import { PostCheckoutSessionsRequestCustomFieldsSchema } from './PostCheckoutSessionsRequestCustomFields';
import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
import type { PostCheckoutSessionsRequestRenderingOptions } from './PostCheckoutSessionsRequestRenderingOptions';
import { PostCheckoutSessionsRequestRenderingOptionsSchema } from './PostCheckoutSessionsRequestRenderingOptions';
/**
 * invoice_data_params
 */
export interface PostCheckoutSessionsRequestInvoiceData {
  accountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  customFields?: PostCheckoutSessionsRequestCustomFields;
  description?: string;
  footer?: string;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
  metadata?: PostAccountsRequestMetadataObject;
  renderingOptions?: PostCheckoutSessionsRequestRenderingOptions;
}

export const PostCheckoutSessionsRequestInvoiceDataSchema: TypedSchema<PostCheckoutSessionsRequestInvoiceData> = typed<PostCheckoutSessionsRequestInvoiceData>(object({
  get accountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  get customFields() { return optional(PostCheckoutSessionsRequestCustomFieldsSchema) },
  description: optional(string()),
  footer: optional(string()),
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get renderingOptions() { return optional(PostCheckoutSessionsRequestRenderingOptionsSchema) },
}));