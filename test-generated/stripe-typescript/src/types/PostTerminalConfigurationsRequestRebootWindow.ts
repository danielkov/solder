import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * reboot_window
 *
 * Reboot time settings for readers. that support customized reboot time configuration.
 */
export interface PostTerminalConfigurationsRequestRebootWindow {
  endHour: number;
  startHour: number;
}

export const PostTerminalConfigurationsRequestRebootWindowSchema: TypedSchema<PostTerminalConfigurationsRequestRebootWindow> = typed<PostTerminalConfigurationsRequestRebootWindow>(object({
  endHour: number(),
  startHour: number(),
}));