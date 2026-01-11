import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface ExchangeAuthCodeForApiKeyResponse {
  /**
   * The API key to use for OpenRouter requests
   */
  key: string;
  /**
   * User ID associated with the API key
   */
  userId: string;
}

export const ExchangeAuthCodeForApiKeyResponseSchema: TypedSchema<ExchangeAuthCodeForApiKeyResponse> = typed<ExchangeAuthCodeForApiKeyResponse>(object({
  key: string(),
  userId: string(),
}));