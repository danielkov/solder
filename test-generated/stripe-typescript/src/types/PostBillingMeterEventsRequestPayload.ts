import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * The payload of the event. This must contain the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
 */
export interface PostBillingMeterEventsRequestPayload {
}

export const PostBillingMeterEventsRequestPayloadSchema: TypedSchema<PostBillingMeterEventsRequestPayload> = typed<PostBillingMeterEventsRequestPayload>(object({
}));