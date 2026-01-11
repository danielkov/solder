import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface ExchangeAuthCodeForApiKeyRequest {
  /**
   * The authorization code received from the OAuth redirect
   */
  code: string;
  /**
   * The method used to generate the code challenge
   */
  codeChallengeMethod?: string;
  /**
   * The code verifier if code_challenge was used in the authorization request
   */
  codeVerifier?: string;
}

export const ExchangeAuthCodeForApiKeyRequestSchema: TypedSchema<ExchangeAuthCodeForApiKeyRequest> = typed<ExchangeAuthCodeForApiKeyRequest>(object({
  code: string(),
  codeChallengeMethod: optional(string()),
  codeVerifier: optional(string()),
}));