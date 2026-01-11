import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * reboot_window
 */
export interface PostTerminalConfigurationsConfigurationRequestRebootWindowObject {
  endHour: number;
  startHour: number;
}

export const PostTerminalConfigurationsConfigurationRequestRebootWindowObjectSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequestRebootWindowObject> = typed<PostTerminalConfigurationsConfigurationRequestRebootWindowObject>(object({
  endHour: number(),
  startHour: number(),
}));