import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fleet_cardholder_prompt_data_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData {
  driverId?: string;
  odometer?: number;
  unspecifiedId?: string;
  userId?: string;
  vehicleNumber?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestCardholderPromptDataSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData> = typed<PostTestHelpersIssuingAuthorizationsRequestCardholderPromptData>(object({
  driverId: optional(string()),
  odometer: optional(number()),
  unspecifiedId: optional(string()),
  userId: optional(string()),
  vehicleNumber: optional(string()),
}));