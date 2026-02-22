import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SetupAttempt } from './SetupAttempt';
import { SetupAttemptSchema } from './SetupAttempt';
/**
 * The most recent SetupAttempt for this SetupIntent.
 */
export type LatestAttemptOrRef = string | SetupAttempt;

export const LatestAttemptOrRefSchema: TypedSchema<LatestAttemptOrRef> = typed<LatestAttemptOrRef>(union(string(), SetupAttemptSchema));
