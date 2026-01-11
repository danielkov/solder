import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Parameter analytics data
 */
export interface GetParametersResponseData {
  /**
   * Model identifier
   */
  model: string;
  /**
   * List of parameters supported by this model
   */
  supportedParameters: Array<string>;
}

export const GetParametersResponseDataSchema: TypedSchema<GetParametersResponseData> = typed<GetParametersResponseData>(object({
  model: string(),
  supportedParameters: array(string()),
}));