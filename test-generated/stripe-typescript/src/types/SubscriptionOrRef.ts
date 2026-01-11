import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Subscription } from './Subscription';
import { SubscriptionSchema } from './Subscription';
export type SubscriptionOrRef = string | Subscription;

export const SubscriptionOrRefSchema: TypedSchema<SubscriptionOrRef> = typed<SubscriptionOrRef>(union(string(), SubscriptionSchema));