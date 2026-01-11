import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostSetupIntentsIntentRequestExcludedPaymentMethodTypes = Array<string> | string;

export const PostSetupIntentsIntentRequestExcludedPaymentMethodTypesSchema: TypedSchema<PostSetupIntentsIntentRequestExcludedPaymentMethodTypes> = typed<PostSetupIntentsIntentRequestExcludedPaymentMethodTypes>(union(array(string()), string()));