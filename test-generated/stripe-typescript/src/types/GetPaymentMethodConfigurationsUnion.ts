import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type GetPaymentMethodConfigurationsUnion = string | string;

export const GetPaymentMethodConfigurationsUnionSchema: TypedSchema<GetPaymentMethodConfigurationsUnion> = typed<GetPaymentMethodConfigurationsUnion>(union(string(), string()));