import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { TerminalOnboardingLinkAppleTermsAndConditions } from './TerminalOnboardingLinkAppleTermsAndConditions';
import { TerminalOnboardingLinkAppleTermsAndConditionsSchema } from './TerminalOnboardingLinkAppleTermsAndConditions';
/**
 * TerminalOnboardingLinkLinkOptions
 *
 * Link type options associated with the current onboarding link object.
 */
export interface TerminalOnboardingLinkLinkOptions {
  /**
   * The options associated with the Apple Terms and Conditions link type.
   */
  appleTermsAndConditions?: TerminalOnboardingLinkAppleTermsAndConditions;
}

export const TerminalOnboardingLinkLinkOptionsSchema: TypedSchema<TerminalOnboardingLinkLinkOptions> = typed<TerminalOnboardingLinkLinkOptions>(object({
  get appleTermsAndConditions() { return optional(TerminalOnboardingLinkAppleTermsAndConditionsSchema) },
}));