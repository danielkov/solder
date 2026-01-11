import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * apple_terms_and_conditions_params
 */
export interface PostTerminalOnboardingLinksRequestAppleTermsAndConditions {
  allowRelinking?: boolean;
  merchantDisplayName: string;
}

export const PostTerminalOnboardingLinksRequestAppleTermsAndConditionsSchema: TypedSchema<PostTerminalOnboardingLinksRequestAppleTermsAndConditions> = typed<PostTerminalOnboardingLinksRequestAppleTermsAndConditions>(object({
  allowRelinking: optional(boolean()),
  merchantDisplayName: string(),
}));