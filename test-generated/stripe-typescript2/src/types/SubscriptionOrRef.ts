import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Subscription } from './Subscription';
import { SubscriptionSchema } from './Subscription';
/**
 * The subscription that generated this invoice
 */
export type SubscriptionOrRef = string | Subscription;

export const SubscriptionOrRefSchema: TypedSchema<SubscriptionOrRef> = typed<SubscriptionOrRef>(union(string(), SubscriptionSchema));
