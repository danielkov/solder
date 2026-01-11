import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceCodeVerificationFlow
 *
 * 
 */
export interface SourceCodeVerificationFlow {
  /**
   * The number of attempts remaining to authenticate the source object with a verification code.
   */
  attemptsRemaining: number;
  /**
   * The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).
   */
  status: string;
}

export const SourceCodeVerificationFlowSchema: TypedSchema<SourceCodeVerificationFlow> = typed<SourceCodeVerificationFlow>(object({
  attemptsRemaining: number(),
  status: string(),
}));