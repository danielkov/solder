import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountLinksRequestCollectionOptions } from './PostAccountLinksRequestCollectionOptions';
import { PostAccountLinksRequestCollectionOptionsSchema } from './PostAccountLinksRequestCollectionOptions';
export interface PostAccountLinksRequest {
  /**
   * The identifier of the account to create an account link for.
   */
  account: string;
  /**
   * The collect parameter is deprecated. Use `collection_options` instead.
   */
  collect?: string;
  /**
   * collection_options_params
   *
   * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
   */
  collectionOptions?: PostAccountLinksRequestCollectionOptions;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.
   */
  refreshUrl?: string;
  /**
   * The URL that the user will be redirected to upon leaving or completing the linked flow.
   */
  returnUrl?: string;
  /**
   * The type of account link the user is requesting.

You can create Account Links of type `account_update` only for connected accounts where your platform is responsible for collecting requirements, including Custom accounts. You can't create them for accounts that have access to a Stripe-hosted Dashboard. If you use [Connect embedded components](/connect/get-started-connect-embedded-components), you can include components that allow your connected accounts to update their own information. For an account without Stripe-hosted Dashboard access where Stripe is liable for negative balances, you must use embedded components.
   */
  type: string;
}

export const PostAccountLinksRequestSchema: TypedSchema<PostAccountLinksRequest> = typed<PostAccountLinksRequest>(object({
  account: string(),
  collect: optional(string()),
  get collectionOptions() { return optional(PostAccountLinksRequestCollectionOptionsSchema) },
  expand: optional(array(string())),
  refreshUrl: optional(string()),
  returnUrl: optional(string()),
  type: string(),
}));