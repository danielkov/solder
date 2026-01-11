import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalOnboardingLinksRequestLinkOptions } from './PostTerminalOnboardingLinksRequestLinkOptions';
import { PostTerminalOnboardingLinksRequestLinkOptionsSchema } from './PostTerminalOnboardingLinksRequestLinkOptions';
export interface PostTerminalOnboardingLinksRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * link_options_params
   *
   * Specific fields needed to generate the desired link type.
   */
  linkOptions: PostTerminalOnboardingLinksRequestLinkOptions;
  /**
   * The type of link being generated.
   */
  linkType: string;
  /**
   * Stripe account ID to generate the link for.
   */
  onBehalfOf?: string;
}

export const PostTerminalOnboardingLinksRequestSchema: TypedSchema<PostTerminalOnboardingLinksRequest> = typed<PostTerminalOnboardingLinksRequest>(object({
  expand: optional(array(string())),
  linkOptions: PostTerminalOnboardingLinksRequestLinkOptionsSchema,
  linkType: string(),
  onBehalfOf: optional(string()),
}));