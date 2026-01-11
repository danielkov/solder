import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PayoutsTraceID
 *
 * 
 */
export interface PayoutsTraceId {
  /**
   * Possible values are `pending`, `supported`, and `unsupported`. When `payout.status` is `pending` or `in_transit`, this will be `pending`. When the payout transitions to `paid`, `failed`, or `canceled`, this status will become `supported` or `unsupported` shortly after in most cases. In some cases, this may appear as `pending` for up to 10 days after `arrival_date` until transitioning to `supported` or `unsupported`.
   */
  status: string;
  /**
   * The trace ID value if `trace_id.status` is `supported`, otherwise `nil`.
   */
  value?: string;
}

export const PayoutsTraceIdSchema: TypedSchema<PayoutsTraceId> = typed<PayoutsTraceId>(object({
  status: string(),
  value: optional(string()),
}));