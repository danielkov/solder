import { object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface VariablesProperty {}

export const VariablesPropertySchema: TypedSchema<VariablesProperty> = typed<VariablesProperty>(object({}));
