import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * radar_options_with_hidden_options
 *
 * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
 */
export interface PostChargesRequestRadarOptions {
  session?: string;
}

export const PostChargesRequestRadarOptionsSchema: TypedSchema<PostChargesRequestRadarOptions> = typed<PostChargesRequestRadarOptions>(object({
  session: optional(string()),
}));