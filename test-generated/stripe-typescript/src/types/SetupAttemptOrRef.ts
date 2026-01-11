import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SetupAttempt } from './SetupAttempt';
import { SetupAttemptSchema } from './SetupAttempt';
export type SetupAttemptOrRef = string | SetupAttempt;

export const SetupAttemptOrRefSchema: TypedSchema<SetupAttemptOrRef> = typed<SetupAttemptOrRef>(union(string(), SetupAttemptSchema));