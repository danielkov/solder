import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourceRebootWindow
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceRebootWindow {
  /**
   * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
   */
  endHour: number;
  /**
   * Integer between 0 to 23 that represents the start hour of the reboot time window.
   */
  startHour: number;
}

export const TerminalConfigurationConfigurationResourceRebootWindowSchema: TypedSchema<TerminalConfigurationConfigurationResourceRebootWindow> = typed<TerminalConfigurationConfigurationResourceRebootWindow>(object({
  endHour: number(),
  startHour: number(),
}));