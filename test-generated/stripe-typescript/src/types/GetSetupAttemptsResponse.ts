import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { SetupAttempt } from './SetupAttempt';
import { SetupAttemptSchema } from './SetupAttempt';
/**
 * PaymentFlowsSetupIntentSetupAttemptList
 *
 * 
 */
export interface GetSetupAttemptsResponse {
  data: Array<SetupAttempt>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetSetupAttemptsResponseSchema: TypedSchema<GetSetupAttemptsResponse> = typed<GetSetupAttemptsResponse>(object({
  data: array(SetupAttemptSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));