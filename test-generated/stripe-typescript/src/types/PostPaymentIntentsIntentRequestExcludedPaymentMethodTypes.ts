import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes = Array<string> | string;

export const PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema: TypedSchema<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes> = typed<PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes>(union(array(string()), string()));