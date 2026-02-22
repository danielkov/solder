import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
/**
 * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
 */
export type SetupIntentOrRef = string | SetupIntent;

export const SetupIntentOrRefSchema: TypedSchema<SetupIntentOrRef> = typed<SetupIntentOrRef>(union(string(), SetupIntentSchema));
