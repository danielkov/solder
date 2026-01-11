import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * radar_options_with_peval_options
 *
 * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
 */
export interface DefaultPostPaymentIntentsRequestRadarOptions {
  session?: string;
}

export const DefaultPostPaymentIntentsRequestRadarOptionsSchema: TypedSchema<DefaultPostPaymentIntentsRequestRadarOptions> = typed<DefaultPostPaymentIntentsRequestRadarOptions>(object({
  session: optional(string()),
}));