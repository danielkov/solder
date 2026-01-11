import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface CreateAuthKeysCodeRequest {
  /**
   * The callback URL to redirect to after authorization. Note, only https URLs on ports 443 and 3000 are allowed.
   */
  callbackUrl: string;
  /**
   * PKCE code challenge for enhanced security
   */
  codeChallenge?: string;
  /**
   * The method used to generate the code challenge
   */
  codeChallengeMethod?: string;
  /**
   * Optional expiration time for the API key to be created
   */
  expiresAt?: string;
  /**
   * Credit limit for the API key to be created
   */
  limit?: number;
}

export const CreateAuthKeysCodeRequestSchema: TypedSchema<CreateAuthKeysCodeRequest> = typed<CreateAuthKeysCodeRequest>(object({
  callbackUrl: string(),
  codeChallenge: optional(string()),
  codeChallengeMethod: optional(string()),
  expiresAt: optional(string()),
  limit: optional(number()),
}));