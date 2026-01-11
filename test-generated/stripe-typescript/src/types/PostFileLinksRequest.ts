import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostFileLinksRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The link isn't usable after this future timestamp.
   */
  expiresAt?: number;
  /**
   * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `financial_account_statement`, `identity_document_downloadable`, `issuing_regulatory_reporting`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, `terminal_android_apk`, or `terminal_reader_splashscreen`.
   */
  file: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostFileLinksRequestSchema: TypedSchema<PostFileLinksRequest> = typed<PostFileLinksRequest>(object({
  expand: optional(array(string())),
  expiresAt: optional(number()),
  file: string(),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));