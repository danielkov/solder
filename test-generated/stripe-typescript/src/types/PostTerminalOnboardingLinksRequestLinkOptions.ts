import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTerminalOnboardingLinksRequestAppleTermsAndConditions } from './PostTerminalOnboardingLinksRequestAppleTermsAndConditions';
import { PostTerminalOnboardingLinksRequestAppleTermsAndConditionsSchema } from './PostTerminalOnboardingLinksRequestAppleTermsAndConditions';
/**
 * link_options_params
 *
 * Specific fields needed to generate the desired link type.
 */
export interface PostTerminalOnboardingLinksRequestLinkOptions {
  /**
   * apple_terms_and_conditions_params
   */
  appleTermsAndConditions?: PostTerminalOnboardingLinksRequestAppleTermsAndConditions;
}

export const PostTerminalOnboardingLinksRequestLinkOptionsSchema: TypedSchema<PostTerminalOnboardingLinksRequestLinkOptions> = typed<PostTerminalOnboardingLinksRequestLinkOptions>(object({
  get appleTermsAndConditions() { return optional(PostTerminalOnboardingLinksRequestAppleTermsAndConditionsSchema) },
}));