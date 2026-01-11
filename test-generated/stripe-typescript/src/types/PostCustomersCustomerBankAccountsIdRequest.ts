import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCustomersCustomerBankAccountsIdRequestOwner } from './PostCustomersCustomerBankAccountsIdRequestOwner';
import { PostCustomersCustomerBankAccountsIdRequestOwnerSchema } from './PostCustomersCustomerBankAccountsIdRequestOwner';
export interface PostCustomersCustomerBankAccountsIdRequest {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName?: string;
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: string;
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
  /**
   * owner
   */
  owner?: PostCustomersCustomerBankAccountsIdRequestOwner;
}

export const PostCustomersCustomerBankAccountsIdRequestSchema: TypedSchema<PostCustomersCustomerBankAccountsIdRequest> = typed<PostCustomersCustomerBankAccountsIdRequest>(object({
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  addressCity: optional(string()),
  addressCountry: optional(string()),
  addressLine1: optional(string()),
  addressLine2: optional(string()),
  addressState: optional(string()),
  addressZip: optional(string()),
  expMonth: optional(string()),
  expYear: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
  get owner() { return optional(PostCustomersCustomerBankAccountsIdRequestOwnerSchema) },
}));