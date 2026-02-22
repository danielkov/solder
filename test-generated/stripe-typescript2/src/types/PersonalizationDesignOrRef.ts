import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingPersonalizationDesign } from './IssuingPersonalizationDesign';
import { IssuingPersonalizationDesignSchema } from './IssuingPersonalizationDesign';
/**
 * The personalization design object belonging to this card.
 */
export type PersonalizationDesignOrRef = string | IssuingPersonalizationDesign;

export const PersonalizationDesignOrRefSchema: TypedSchema<PersonalizationDesignOrRef> = typed<PersonalizationDesignOrRef>(union(string(), IssuingPersonalizationDesignSchema));
