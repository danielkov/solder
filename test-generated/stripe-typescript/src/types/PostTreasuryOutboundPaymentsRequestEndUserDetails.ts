import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * end_user_details_params
 *
 * End user details.
 */
export interface PostTreasuryOutboundPaymentsRequestEndUserDetails {
  ipAddress?: string;
  present: boolean;
}

export const PostTreasuryOutboundPaymentsRequestEndUserDetailsSchema: TypedSchema<PostTreasuryOutboundPaymentsRequestEndUserDetails> = typed<PostTreasuryOutboundPaymentsRequestEndUserDetails>(object({
  ipAddress: optional(string()),
  present: boolean(),
}));