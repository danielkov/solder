import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes = Array<string> | string;

export const PostCustomersCustomerSubscriptionsRequestPaymentMethodTypesSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes> = typed<PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes>(union(array(string()), string()));
