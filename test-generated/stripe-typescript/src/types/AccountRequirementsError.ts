import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountRequirementsError
 *
 * 
 */
export interface AccountRequirementsError {
  /**
   * The code for the type of error.
   */
  code: string;
  /**
   * An informative message that indicates the error type and provides additional details about the error.
   */
  reason: string;
  /**
   * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
   */
  requirement: string;
}

export const AccountRequirementsErrorSchema: TypedSchema<AccountRequirementsError> = typed<AccountRequirementsError>(object({
  code: string(),
  reason: string(),
  requirement: string(),
}));