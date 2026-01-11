import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestTransferData } from './DefaultPostCheckoutSessionsRequestTransferData';
import { DefaultPostCheckoutSessionsRequestTransferDataSchema } from './DefaultPostCheckoutSessionsRequestTransferData';
export type PostSubscriptionSchedulesRequestTransferData = DefaultPostCheckoutSessionsRequestTransferData | string;

export const PostSubscriptionSchedulesRequestTransferDataSchema: TypedSchema<PostSubscriptionSchedulesRequestTransferData> = typed<PostSubscriptionSchedulesRequestTransferData>(union(DefaultPostCheckoutSessionsRequestTransferDataSchema, string()));