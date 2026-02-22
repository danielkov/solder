import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface ServiceTierUnion {}

export const ServiceTierUnionSchema: TypedSchema<ServiceTierUnion> = typed<ServiceTierUnion>(object({}));
