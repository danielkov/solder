import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type GetPaymentMethodConfigurationsUnion = string | string;

export const GetPaymentMethodConfigurationsUnionSchema: TypedSchema<GetPaymentMethodConfigurationsUnion> = typed<GetPaymentMethodConfigurationsUnion>(union(string(), string()));
