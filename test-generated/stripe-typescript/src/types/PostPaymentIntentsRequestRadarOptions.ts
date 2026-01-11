import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * radar_options_with_hidden_options
 */
export interface PostPaymentIntentsRequestRadarOptions {
  session?: string;
}

export const PostPaymentIntentsRequestRadarOptionsSchema: TypedSchema<PostPaymentIntentsRequestRadarOptions> = typed<PostPaymentIntentsRequestRadarOptions>(object({
  session: optional(string()),
}));