import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * offline
 */
export interface PostTerminalConfigurationsRequestOfflineObject {
  enabled: boolean;
}

export const PostTerminalConfigurationsRequestOfflineObjectSchema: TypedSchema<PostTerminalConfigurationsRequestOfflineObject> = typed<PostTerminalConfigurationsRequestOfflineObject>(object({
  enabled: boolean(),
}));