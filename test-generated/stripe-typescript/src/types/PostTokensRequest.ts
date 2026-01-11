import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTokensRequestAccount } from './PostTokensRequestAccount';
import { PostTokensRequestAccountSchema } from './PostTokensRequestAccount';
import type { PostTokensRequestBankAccount } from './PostTokensRequestBankAccount';
import { PostTokensRequestBankAccountSchema } from './PostTokensRequestBankAccount';
import type { PostTokensRequestCard } from './PostTokensRequestCard';
import { PostTokensRequestCardSchema } from './PostTokensRequestCard';
import type { PostTokensRequestCvcUpdate } from './PostTokensRequestCvcUpdate';
import { PostTokensRequestCvcUpdateSchema } from './PostTokensRequestCvcUpdate';
import type { PostTokensRequestPerson } from './PostTokensRequestPerson';
import { PostTokensRequestPersonSchema } from './PostTokensRequestPerson';
import type { PostTokensRequestPii } from './PostTokensRequestPii';
import { PostTokensRequestPiiSchema } from './PostTokensRequestPii';
export interface PostTokensRequest {
  /**
   * connect_js_account_token_specs
   *
   * Information for the account this token represents.
   */
  account?: PostTokensRequestAccount;
  /**
   * token_create_bank_account
   *
   * The bank account this token will represent.
   */
  bankAccount?: PostTokensRequestBankAccount;
  /**
   * The card this token will represent. If you also pass in a customer, the card must be the ID of a card belonging to the customer. Otherwise, if you do not pass in a customer, this is a dictionary containing a user's credit card details, with the options described below.
   */
  card?: PostTokensRequestCard;
  /**
   * Create a token for the customer, which is owned by the application's account. You can only use this with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). Learn more about [cloning saved payment methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
   */
  customer?: string;
  /**
   * cvc_params
   *
   * The updated CVC value this token represents.
   */
  cvcUpdate?: PostTokensRequestCvcUpdate;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * person_token_specs
   *
   * Information for the person this token represents.
   */
  person?: PostTokensRequestPerson;
  /**
   * pii_token_specs
   *
   * The PII this token represents.
   */
  pii?: PostTokensRequestPii;
}

export const PostTokensRequestSchema: TypedSchema<PostTokensRequest> = typed<PostTokensRequest>(object({
  get account() { return optional(PostTokensRequestAccountSchema) },
  get bankAccount() { return optional(PostTokensRequestBankAccountSchema) },
  get card() { return optional(PostTokensRequestCardSchema) },
  customer: optional(string()),
  get cvcUpdate() { return optional(PostTokensRequestCvcUpdateSchema) },
  expand: optional(array(string())),
  get person() { return optional(PostTokensRequestPersonSchema) },
  get pii() { return optional(PostTokensRequestPiiSchema) },
}));