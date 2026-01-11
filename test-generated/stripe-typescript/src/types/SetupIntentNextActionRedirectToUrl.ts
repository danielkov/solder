import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SetupIntentNextActionRedirectToUrl
 *
 * 
 */
export interface SetupIntentNextActionRedirectToUrl {
  /**
   * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
   */
  returnUrl?: string;
  /**
   * The URL you must redirect your customer to in order to authenticate.
   */
  url?: string;
}

export const SetupIntentNextActionRedirectToUrlSchema: TypedSchema<SetupIntentNextActionRedirectToUrl> = typed<SetupIntentNextActionRedirectToUrl>(object({
  returnUrl: optional(string()),
  url: optional(string()),
}));