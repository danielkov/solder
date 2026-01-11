import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostAccountsAccountBankAccountsIdRequestDocuments } from './PostAccountsAccountBankAccountsIdRequestDocuments';
import { PostAccountsAccountBankAccountsIdRequestDocumentsSchema } from './PostAccountsAccountBankAccountsIdRequestDocuments';
export interface PostAccountsAccountBankAccountsIdRequest {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: string;
  /**
   * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: string;
  /**
   * City/District/Suburb/Town/Village.
   */
  addressCity?: string;
  /**
   * Billing address country, if provided when creating card.
   */
  addressCountry?: string;
  /**
   * Address line 1 (Street address/PO Box/Company name).
   */
  addressLine1?: string;
  /**
   * Address line 2 (Apartment/Suite/Unit/Building).
   */
  addressLine2?: string;
  /**
   * State/County/Province/Region.
   */
  addressState?: string;
  /**
   * ZIP or postal code.
   */
  addressZip?: string;
  /**
   * When set to true, this becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean;
  /**
   * external_account_documents_param
   *
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: PostAccountsAccountBankAccountsIdRequestDocuments;
  /**
   * Two digit number representing the card’s expiration month.
   */
  expMonth?: string;
  /**
   * Four digit number representing the card’s expiration year.
   */
  expYear?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Cardholder name.
   */
  name?: string;
}

export const PostAccountsAccountBankAccountsIdRequestSchema: TypedSchema<PostAccountsAccountBankAccountsIdRequest> = typed<PostAccountsAccountBankAccountsIdRequest>(object({
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  accountType: optional(string()),
  addressCity: optional(string()),
  addressCountry: optional(string()),
  addressLine1: optional(string()),
  addressLine2: optional(string()),
  addressState: optional(string()),
  addressZip: optional(string()),
  defaultForCurrency: optional(boolean()),
  get documents() { return optional(PostAccountsAccountBankAccountsIdRequestDocumentsSchema) },
  expMonth: optional(string()),
  expYear: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
}));