import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * meter_value_settings_param
 *
 * Fields that specify how to calculate a meter event's value.
 */
export interface PostBillingMetersRequestValueSettings {
  eventPayloadKey: string;
}

export const PostBillingMetersRequestValueSettingsSchema: TypedSchema<PostBillingMetersRequestValueSettings> = typed<PostBillingMetersRequestValueSettings>(object({
  eventPayloadKey: string(),
}));