import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SetupAttempt } from './SetupAttempt';
import { SetupAttemptSchema } from './SetupAttempt';
/**
 * The ID of the SetupAttempt that generated this PaymentMethod, if any.
 */
export type SetupAttemptOrRef = string | SetupAttempt;

export const SetupAttemptOrRefSchema: TypedSchema<SetupAttemptOrRef> = typed<SetupAttemptOrRef>(union(string(), SetupAttemptSchema));
