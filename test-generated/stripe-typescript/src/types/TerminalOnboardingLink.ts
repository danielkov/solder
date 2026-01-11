import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalOnboardingLinkLinkOptions } from './TerminalOnboardingLinkLinkOptions';
import { TerminalOnboardingLinkLinkOptionsSchema } from './TerminalOnboardingLinkLinkOptions';
/**
 * TerminalOnboardingLinkOnboardingLink
 *
 * Returns redirect links used for onboarding onto Tap to Pay on iPhone.
 */
export interface TerminalOnboardingLink {
  /**
   * TerminalOnboardingLinkLinkOptions
   *
   * Link type options associated with the current onboarding link object.
   */
  linkOptions: TerminalOnboardingLinkLinkOptions;
  /**
   * The type of link being generated.
   */
  linkType: string;
  object: string;
  /**
   * Stripe account ID to generate the link for.
   */
  onBehalfOf?: string;
  /**
   * The link passed back to the user for their onboarding.
   */
  redirectUrl: string;
}

export const TerminalOnboardingLinkSchema: TypedSchema<TerminalOnboardingLink> = typed<TerminalOnboardingLink>(object({
  linkOptions: TerminalOnboardingLinkLinkOptionsSchema,
  linkType: string(),
  object: string(),
  onBehalfOf: optional(string()),
  redirectUrl: string(),
}));