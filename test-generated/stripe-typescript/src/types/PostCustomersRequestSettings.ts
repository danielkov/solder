import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * balance_settings_param
 */
export interface PostCustomersRequestSettings {
  reconciliationMode?: string;
}

export const PostCustomersRequestSettingsSchema: TypedSchema<PostCustomersRequestSettings> = typed<PostCustomersRequestSettings>(object({
  reconciliationMode: optional(string()),
}));