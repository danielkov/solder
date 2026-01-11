import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
export type PendingSetupIntentOrRef = string | SetupIntent;

export const PendingSetupIntentOrRefSchema: TypedSchema<PendingSetupIntentOrRef> = typed<PendingSetupIntentOrRef>(union(string(), SetupIntentSchema));