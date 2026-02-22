import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
/**
 * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
 */
export type PendingSetupIntentOrRef = string | SetupIntent;

export const PendingSetupIntentOrRefSchema: TypedSchema<PendingSetupIntentOrRef> = typed<PendingSetupIntentOrRef>(union(string(), SetupIntentSchema));
