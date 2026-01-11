import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * NotificationEventRequest
 *
 * 
 */
export interface NotificationEventRequest {
  /**
   * ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
   */
  id?: string;
  /**
   * The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.
   */
  idempotencyKey?: string;
}

export const NotificationEventRequestSchema: TypedSchema<NotificationEventRequest> = typed<NotificationEventRequest>(object({
  id: optional(string()),
  idempotencyKey: optional(string()),
}));