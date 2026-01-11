import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingPersonalizationDesign } from './IssuingPersonalizationDesign';
import { IssuingPersonalizationDesignSchema } from './IssuingPersonalizationDesign';
export type PersonalizationDesignOrRef = string | IssuingPersonalizationDesign;

export const PersonalizationDesignOrRefSchema: TypedSchema<PersonalizationDesignOrRef> = typed<PersonalizationDesignOrRef>(union(string(), IssuingPersonalizationDesignSchema));