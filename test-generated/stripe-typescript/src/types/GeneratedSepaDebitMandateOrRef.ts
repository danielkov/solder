import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Mandate } from './Mandate';
import { MandateSchema } from './Mandate';
export type GeneratedSepaDebitMandateOrRef = string | Mandate;

export const GeneratedSepaDebitMandateOrRefSchema: TypedSchema<GeneratedSepaDebitMandateOrRef> = typed<GeneratedSepaDebitMandateOrRef>(union(string(), MandateSchema));