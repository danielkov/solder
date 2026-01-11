import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { NotificationEventData } from './NotificationEventData';
import { NotificationEventDataSchema } from './NotificationEventData';
import type { NotificationEventRequest } from './NotificationEventRequest';
import { NotificationEventRequestSchema } from './NotificationEventRequest';
/**
 * NotificationEvent
 *
 * Snapshot events allow you to track and react to activity in your Stripe integration. When
the state of another API resource changes, Stripe creates an `Event` object that contains
all the relevant information associated with that action, including the affected API
resource. For example, a successful payment triggers a `charge.succeeded` event, which
contains the `Charge` in the event's data property. Some actions trigger multiple events.
For example, if you create a new subscription for a customer, it triggers both a
`customer.subscription.created` event and a `charge.succeeded` event.

Configure an event destination in your account to listen for events that represent actions
your integration needs to respond to. Additionally, you can retrieve an individual event or
a list of events from the API.

[Connect](https://docs.stripe.com/connect) platforms can also receive event notifications
that occur in their connected accounts. These events include an account attribute that
identifies the relevant connected account.

You can access events through the [Retrieve Event API](https://docs.stripe.com/api/events#retrieve_event)
for 30 days.
 */
export interface Event {
  /**
   * The connected account that originates the event.
   */
  account?: string;
  /**
   * The Stripe API version used to render `data` when the event was created. The contents of `data` never change, so this value remains static regardless of the API version currently in use. This property is populated only for events created on or after October 31, 2014.
   */
  apiVersion?: string;
  /**
   * Authentication context needed to fetch the event or related object.
   */
  context?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * NotificationEventData
   *
   * 
   */
  data: NotificationEventData;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Number of webhooks that haven't been successfully delivered (for example, to return a 20x response) to the URLs you specify.
   */
  pendingWebhooks: number;
  /**
   * Information on the API request that triggers the event.
   */
  request?: NotificationEventRequest;
  /**
   * Description of the event (for example, `invoice.created` or `charge.refunded`).
   */
  type: string;
}

export const EventSchema: TypedSchema<Event> = typed<Event>(object({
  account: optional(string()),
  apiVersion: optional(string()),
  context: optional(string()),
  created: number(),
  data: NotificationEventDataSchema,
  id: string(),
  livemode: boolean(),
  object: string(),
  pendingWebhooks: number(),
  get request() { return optional(NotificationEventRequestSchema) },
  type: string(),
}));