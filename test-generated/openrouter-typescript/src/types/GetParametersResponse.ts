import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { GetParametersResponseData } from './GetParametersResponseData';
import { GetParametersResponseDataSchema } from './GetParametersResponseData';
export interface GetParametersResponse {
  /**
   * Parameter analytics data
   */
  data: GetParametersResponseData;
}

export const GetParametersResponseSchema: TypedSchema<GetParametersResponse> = typed<GetParametersResponse>(object({
  data: GetParametersResponseDataSchema,
}));