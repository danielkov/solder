import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Mandate } from './Mandate';
import { MandateSchema } from './Mandate';
/**
 * ID of the mandate used to make this payment.
 */
export type MandateOrRef = string | Mandate;

export const MandateOrRefSchema: TypedSchema<MandateOrRef> = typed<MandateOrRef>(union(string(), MandateSchema));
