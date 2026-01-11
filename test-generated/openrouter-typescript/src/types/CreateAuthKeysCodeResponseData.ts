import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Auth code data
 */
export interface CreateAuthKeysCodeResponseData {
  /**
   * The application ID associated with this auth code
   */
  appId: number;
  /**
   * ISO 8601 timestamp of when the auth code was created
   */
  createdAt: string;
  /**
   * The authorization code ID to use in the exchange request
   */
  id: string;
}

export const CreateAuthKeysCodeResponseDataSchema: TypedSchema<CreateAuthKeysCodeResponseData> = typed<CreateAuthKeysCodeResponseData>(object({
  appId: number(),
  createdAt: string(),
  id: string(),
}));