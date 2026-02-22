import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Additional error details
 */
export interface DetailsProperty {}

export const DetailsPropertySchema: TypedSchema<DetailsProperty> = typed<DetailsProperty>(object({}));
