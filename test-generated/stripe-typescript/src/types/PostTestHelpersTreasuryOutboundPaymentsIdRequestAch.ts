import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * ach_tracking_details_params
 */
export interface PostTestHelpersTreasuryOutboundPaymentsIdRequestAch {
  traceId: string;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdRequestAchSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdRequestAch> = typed<PostTestHelpersTreasuryOutboundPaymentsIdRequestAch>(object({
  traceId: string(),
}));