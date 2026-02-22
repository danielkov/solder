import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestTransferData } from './DefaultPostCheckoutSessionsRequestTransferData';
import { DefaultPostCheckoutSessionsRequestTransferDataSchema } from './DefaultPostCheckoutSessionsRequestTransferData';
/**
 * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges. This will be unset if you POST an empty value.
 */
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData = DefaultPostCheckoutSessionsRequestTransferData | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferDataSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData>(union(DefaultPostCheckoutSessionsRequestTransferDataSchema, string()));
