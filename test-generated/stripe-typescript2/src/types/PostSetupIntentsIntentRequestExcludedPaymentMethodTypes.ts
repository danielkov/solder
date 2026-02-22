import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The list of payment method types to exclude from use with this SetupIntent.
 */
export type PostSetupIntentsIntentRequestExcludedPaymentMethodTypes = Array<string> | string;

export const PostSetupIntentsIntentRequestExcludedPaymentMethodTypesSchema: TypedSchema<PostSetupIntentsIntentRequestExcludedPaymentMethodTypes> = typed<PostSetupIntentsIntentRequestExcludedPaymentMethodTypes>(union(array(string()), string()));
