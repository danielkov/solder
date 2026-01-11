import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalOnboardingLinkAppleTermsAndConditions
 *
 * Options associated with the Apple Terms and Conditions link type.
 */
export interface TerminalOnboardingLinkAppleTermsAndConditions {
  /**
   * Whether the link should also support users relinking their Apple account.
   */
  allowRelinking?: boolean;
  /**
   * The business name of the merchant accepting Apple's Terms and Conditions.
   */
  merchantDisplayName: string;
}

export const TerminalOnboardingLinkAppleTermsAndConditionsSchema: TypedSchema<TerminalOnboardingLinkAppleTermsAndConditions> = typed<TerminalOnboardingLinkAppleTermsAndConditions>(object({
  allowRelinking: optional(boolean()),
  merchantDisplayName: string(),
}));