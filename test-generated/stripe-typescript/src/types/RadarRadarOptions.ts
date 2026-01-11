import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * RadarRadarOptions
 *
 * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
 */
export interface RadarRadarOptions {
  /**
   * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
   */
  session?: string;
}

export const RadarRadarOptionsSchema: TypedSchema<RadarRadarOptions> = typed<RadarRadarOptions>(object({
  session: optional(string()),
}));