import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
export type SetupIntentOrRef = string | SetupIntent;

export const SetupIntentOrRefSchema: TypedSchema<SetupIntentOrRef> = typed<SetupIntentOrRef>(union(string(), SetupIntentSchema));