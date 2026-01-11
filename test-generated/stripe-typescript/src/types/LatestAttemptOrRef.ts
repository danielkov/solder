import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { SetupAttempt } from './SetupAttempt';
import { SetupAttemptSchema } from './SetupAttempt';
export type LatestAttemptOrRef = string | SetupAttempt;

export const LatestAttemptOrRefSchema: TypedSchema<LatestAttemptOrRef> = typed<LatestAttemptOrRef>(union(string(), SetupAttemptSchema));